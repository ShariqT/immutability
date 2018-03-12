import React from 'react';
import SignForm from "../components/SignForm"
import {Message, Segment, Divider, Grid} from "semantic-ui-react"
import PropTypes from "prop-types"

export default class AccountInfoSegment extends React.Component{
    constructor(props, context){
        super(props);
        this.web3Context = context.web3;
        this.state = {
            accounts:[]
        };
        for( var i =0; i < this.web3Context.accounts.length; i++){
            this.state.accounts.push({key: this.web3Context.accounts[i], value: this.web3Context.accounts[i], text: this.web3Context.accounts[i]})
        }

        console.log(this.state.accounts)
    }

    showAccounts(){
        return this.state.accounts.map((acct)=>{
            console.log(acct.text);
            return <strong key={acct.key}>{acct.text}</strong>  
        })
    }
    render(){
        const accts = this.showAccounts();
        console.log(accts)
        return(
            <div>
            <Divider />
            <Grid columns={2}>
            <Grid.Column>
            <Segment basic>
                <p>Now that you have your account, you can interact with the Ethereum blockchain.</p>
                <p>Think of the blockchain as a global database that anyone can put information information
                and anyone can pull information out of. Now, you may ask, "why would I want to have a database that anyone can write to?"
                </p>
                <p>Well, that sort of database is great when you have parties that don't trust each other. Let's say
                    we have <em>Acme Inc</em>, who wants to do sell gizmos to <em>Foobar Industries</em>. And let's say we
                    have a third party, <em>the City of Los Angeles</em>, who is in charge of oversight of the deal.   
                </p>
                <p>Because anyone can view entries on the blockchain, <em>the City of Los Angeles</em>, can view the transaction between
                the two busineses. This means that <em>Acme Inc</em> can do their due diligence by inspecting the transaction that was made with 
                <em>Foobar Industries</em>. Since there is no way to alter the information after it has been added to the blockchain, one can track 
                an assest -- like a gizmo -- back through all of it owners. This makes it easy to reconile conflicts since the blockchain acts as a 
                <em>single source of truth</em>. </p>
                <p>The other benefit of the blockchain is that it is distributed. This means that it doesn't just reside on the 
                    <em>Acme Inc</em> computers or the <em>Foobar Industries</em> computers. It's spread out over many computers all over the world
                    and untamperable. 
                </p> 
            </Segment>
            <Segment basic>
                <SignForm></SignForm>
            </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment basic>
                <Message info>
                    <Message.Header>
                        Account Info:
                    </Message.Header>

                    {accts}
                </Message>
                </Segment>
            </Grid.Column>
        </Grid>
        </div>
        )
    };
}

AccountInfoSegment.contextTypes = {
    web3: PropTypes.object
}