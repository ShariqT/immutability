import React from "react";
import AccountInfoSegment from "../components/AccountInfoSegment"
import Intro from "../components/Intro"
import {Container} from "semantic-ui-react"

export default class App1Container extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.path = "";

    }

    render(){
        return (
            <Container fluid>
                <Intro dynamic="true"></Intro>
                <AccountInfoSegment></AccountInfoSegment>                
            </Container>
        )
    }
}