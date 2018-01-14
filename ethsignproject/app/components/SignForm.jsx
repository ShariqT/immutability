import React from "react"
import ModalResponse from "./ModalResponse";
import {Form, Button, Dropdown, TextArea} from "semantic-ui-react"
import PropTypes from 'prop-types';

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
        this.state.isLoading = true;
        this.state.modal = {}
        this.state.modal.show = false;
        this.state.modal.type = "loading"
        this.state.modal.message = "Loading"
    }
    handleChange = (e, val)=>{
        console.log(val);
        this.setState({
            selectedAccount: val.value
        }, function(){
            console.log(this.state);
        });
       
    }

    onSubmit = (e, val) => {
        var options = {
            method: "POST",
            body: JSON.stringify({
                "acct":this.state.selectedAccount
            })
        }
        console.log("submitting form")
        const self = this;
        fetch("/sign", options).catch((res) => {
            console.log("dsfsdfds")
            self.setState({
                modal:{
                    show:true
                }
            });
        }).then((res) => {
            console.log(res);
            self.setState({
                modal:{
                    show:true,
                    type:"success"
                }
            });
        });
    }


    render(){
        return(
            <div>
            
            <ModalResponse open={this.state.modal.show}></ModalResponse>
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Account</label>
                    <Dropdown placeholder="Select Account" name="acct" onChange={this.handleChange} selection options={this.state.items}></Dropdown>
                </Form.Field>
                    
                <Form.Field>
                <label>Message</label>
                    <TextArea></TextArea>
                </Form.Field>
                <Button type="submit">Sign</Button>
            </Form>
            </div>
        );
    }
}


SignForm.contextTypes = {
    web3: PropTypes.object
}

