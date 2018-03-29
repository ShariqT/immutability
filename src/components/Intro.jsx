import React  from 'react';
import { Segment, Popup, Grid, Header, Message } from 'semantic-ui-react';
import BlockChainViz from './BlockchainViz'
export default class Intro extends React.Component{
    constructor(props,context){
        super(props);
        this.state = {
            dynamic: props.dynamic
        }
    }

    render(){
        return(
            <div>
            <BlockChainViz dynamic={this.state.dynamic}/>
            <Segment basic>
                <Header as="h1">A primer on blockchain technology</Header>
            </Segment>
            <Grid verticalAlign="top">
                <Grid.Row columns={2}>
                    <Grid.Column>
                    <Segment basic>
                    <p>There has been alot of talk about blockchain technology and how it can change different industries. 
                        This site aims to be a primer to understanding blockchain technology and how the Ethereum platform
                        fits into the overall picture.
                    </p>
                    <p>To get started, you should first create an account on the blockchain. An 
                        is your entry point on the blockchain. This is how other applications will interact with you and 
                    you will make transactions on the blockchain.</p>
                    <p>You can create an account on the blockchain by <a href="https://metamask.io/" target="_blank">downloading the MetaMask browser plugin.</a> Simply follow
                        the directions on their download page and refresh this page. You should see your account information
                        below if you have done this correct</p>
                    <Header as="h3">How to get ether</Header>
                    <p>To get ether, you would have to convert fiat money (dollars, yen, etc) into ether. You can 
                        do this on platforms like Coinbase. But for our little test purposes, we will be using the 
                        <a href="https://faucet.metamask.io/" target="_blank">Test Facuet</a>. This will provide you 
                        with the ether that you will need to make transactions. Please note that these
                        transactions are on the <strong>test network</strong> only. </p> 
                    </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic>
                        <Message color="teal">
                            <Message.Header>Key Terms</Message.Header>
                            <p><strong>Account</strong><br /> 
                            Each user of the blockchain has an account. 
                            This how they are identified uniquely on the blockchain. 
                            Creating an account will create a private key that is stored on your computer. 
                            This key unlocks your account and lets you sign transactions. If you lose it, 
                            effectively this means that anyone can impersonate you on the blockchain and 
                            make transactions on your behalf. It is VERY IMPORTAT that you keep your 
                            private key safe.</p>
                            <p><strong>Blockchain</strong><br />
                            A distributed database that is cryptographically secure and that acts as 
                            source of truth in a system. 
                            </p>
                            </Message>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
        </Grid>
        </div>
        )
    }
}

