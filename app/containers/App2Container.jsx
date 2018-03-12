import React from 'react'
import {Segment, Container, Grid,Message} from 'semantic-ui-react'
import BlockchainViz from '../components/BlockchainViz'
import ModalResponse from '../components/ModalResponse'
import Axios from 'axios'

export default class App2Container extends React.Component{
    

    constructor(props, context){
        super(props);
        console.log(props);
        this.state = {
            tx: null,
            acct:null,
            message: null,
            id: this.props.match.params.id,
            isLoading: true,
            modal:{
                open: false,
                message: null,
                title: null,
            }
        }

        
        var self = this;
        Axios.get("/resolve/"+ this.state.id).then(function(res){
            console.log(res);
            let response = res.data;
            console.log(response)
            self.setState({
                tx: response.record.tx,
                acct: response.record.acct,
                message: response.message,
                isLoading:false
            }, ()=>{

            });
        }).catch(function(err){
            console.log(err);
        });
    }
    

    handleModalState(state){
        this.setState({
            modal:{
                open:state
            }
        });
    }
    render(){
    
        
        return(
            <Container fluid>
                <ModalResponse type="Success" title={this.state.modal.title} open={this.state.modal.open} message={this.state.modal.message} handleFormState={this.handleModalState.bind(this)}></ModalResponse>
                <BlockchainViz dynamic="true" />
                <Segment basic>
                <Message color="teal">
                    <Message.Header><a href={'https://ropsten.etherscan.io/tx/' + this.state.tx}>Find out more information on Etherscan</a></Message.Header>
                </Message>
                </Segment>
                <Grid columns={2}>
                    <Grid.Column>
                        {!this.state.isLoading && 
                        <Segment basic>
                            <p><strong>Transaction:</strong> {this.state.tx}</p>
                            <p><strong>Message:</strong> {this.state.message} </p>
                        </Segment>
                        }
                        {this.state.isLoading && 
                            <Segment basic>
                                <p><strong>Searching blockchain...</strong></p>
                            </Segment>
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic>
                            <Message color="teal">
                                <Message.Header>Key Terms</Message.Header>
                                <p><strong>Transaction</strong><br /> 
                                Think of this as the receipt for your transaction. With this, you can query
                                the blockchain and find all of the information about this transaction. The best
                                part is that anyone else can also do the same. This is why the blockchain is a 
                                great tool for people or industries that have to track and reconcile 
                                a variety of different inputs that come from disaperate sources.</p>
                                <p><strong>Gas</strong><br />
                                This is the how a transaction is powered through the Ethereum blockchain.
                                Each operation on the Ethereum network has a computational cost, which is measured in "gas".
                                If you send too little "gas" with your Ethereum transaction, it will not be saved onto the 
                                blockchain and the "gas" that was sent with the original transaction will be given to the 
                                miner (individuals or groups who use their computer cycles to verify transactions).
                                </p>
                                </Message>
                            </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}