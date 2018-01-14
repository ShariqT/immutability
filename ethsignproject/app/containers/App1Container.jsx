import React from "react";
import SignForm from "../components/SignForm"
import {Container, Segment, Header, Divider} from "semantic-ui-react"

export default class App1Container extends React.Component{
    render(){
        return (
            <Container fluid>
                <Header as="h1" textAlign="center">
                    Immutabilty -- Write a message on the forever-enduring blockchain
                </Header>
                <Segment basic>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, harum nulla ex quis iste 
                        illo aliquid fuga distinctio error voluptatem deserunt quos necessitatibus vel facilis animi 
                        consectetur eveniet minima corrupti.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, harum nulla ex quis iste 
                        illo aliquid fuga distinctio error voluptatem deserunt quos necessitatibus vel facilis animi 
                        consectetur eveniet minima corrupti.
                    </p>
                </Segment>
                <Divider />
                <SignForm></SignForm>
            </Container>
        )
    }
}