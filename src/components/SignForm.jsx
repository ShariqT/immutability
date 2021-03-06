import React from "react"
import ModalResponse from "./ModalResponse";
import {Form, Button, Dropdown, TextArea} from "semantic-ui-react"
import PropTypes from 'prop-types';
import Axios from "axios";


export default class SignForm extends React.Component{
    state = {}
    constructor(props, context){
        super(props)
        this.web3Context = context.web3;
        
        var items = [];
        for( var i =0; i < this.web3Context.accounts.length; i++){
            items.push({key: this.web3Context.accounts[i], value: this.web3Context.accounts[i], text: this.web3Context.accounts[i]})
        }

        this.state.items = items;
        this.state.selectedAccount = null;
        this.state.message = null;
        this.state.isLoading = true;
        this.state.modal = {}
        this.state.modal.show = false;
        this.state.modal.type = "loading"
        this.state.modal.message = "Loading"
    }
    handleChange = (e, val)=>{
        console.log(val);
        console.log(this);
        this.setState({
            selectedAccount: val.value
        }, function(){
            console.log(this.state);
        });
       
    }

    onSubmit = (e, val) => {       
        console.log("submitting form")
        console.log(window.web3.version)
        if (window.web3.version.network !== "3"){
            this.setState({
                modal:{
                    show:true,
                    type:"Error",
                    message: 
                    <div>
                        <p>You are not on the Ropsten Testnet. Please change your MetaMask client to use the Ropsten Testnet!</p>
                    </div>
                }
            });

            return;
        }
        const self = this;
        window.web3.eth.sendTransaction({
            from: this.state.selectedAccount,
            data: window.web3.toHex(this.state.message)
        }, (err, tx)=>{
            if (err){
                console.log(err);
                self.setState({
                    modal:{
                        show:true,
                        type:"Error",
                        message: err.message
                    }
                });
                return;
            }
            console.log(tx);
            var params = new URLSearchParams();
            params.append("acct", this.state.selectedAccount);
            params.append("tx", tx);
            var csrftoken = document.querySelectorAll('input[name=csrfmiddlewaretoken]')[0].value;

            var options = {
                method: "POST",
                headers: {
                    "X-CSRFToken": csrftoken,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: params
            }
            Axios("/sign", options).catch((err) => {
                self.setState({
                    modal:{
                        show:true,
                        type:"Error",
                        message:"Could not finish transaction. Server returned a " + err.response.status + " code."
                    }
                });
            }).then((res) => {
                var data = res.data;
                self.setState({
                    modal:{
                        show:true,
                        type:"Success",
                        message: 
                        <div>
                            <p>You have signed a transaction and put it on the blockchain.</p>
                            <p>Transaction number is{data.transaction}</p>
                             <p>Here is a shortcut url to share: 
                             <a href={"/r/" + data.shortcut}>{"" + "r/" + data.shortcut}</a></p>
                        </div>
                    },
                    transaction: data.transaction,
                    selectedAccount: null,
                    message: null
                });
            });
        })
        
    }

    handleClose(val){
        console.log("from the form module")
        console.log(val);
        console.log(this);
        this.setState({
            modal:{
                show: val
            }
        })
    }

    handleInput = (e, val) =>{
        
        this.setState({
            message: val.value
        })
    }


    render(){
        return(
            <div>
            
            <ModalResponse open={this.state.modal.show} message={this.state.modal.message} type={this.state.modal.type} handleFormState={this.handleClose.bind(this)}></ModalResponse>
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Account</label>
                    <Dropdown placeholder="Select Account" name="acct" onChange={this.handleChange} selection options={this.state.items}></Dropdown>
                </Form.Field>
                    
                <Form.Field>
                <label>Message</label>
                    <TextArea placeholder="Write your message..." onInput={this.handleInput}></TextArea>
                </Form.Field>
                <Button type="submit" color="blue">Sign</Button>
            </Form>
            </div>
        );
    }
}


SignForm.contextTypes = {
    web3: PropTypes.object
}

