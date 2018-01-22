import React from "react";
import SignForm from "../components/SignForm"
import {Container, Segment, Header, Divider} from "semantic-ui-react"

export default class App1Container extends React.Component{
    componentDidMount(){
        window.particlesJS("block")
    }
    render(){
        return (
            <Container fluid>

                
                <div className="graph" id="block">l</div>
                <Segment basic>
                    <h1>Write a message on the blockchain</h1>
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
                <Segment basic>
                <SignForm></SignForm>
                </Segment>
            </Container>
        )
    }
}