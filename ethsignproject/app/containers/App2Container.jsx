import React from 'react'
import {Segment, Container} from 'semantic-ui-react'
import Axios from 'axios'

export default class App2Container extends React.Component{
    componentDidMount(){
        window.particlesJS("block");
    }

    constructor(props, context){
        super(props);
    }
    
    render(){
        return(
            <Container fluid>
                <div className="graph" id="block">l</div>

                <Segment basic>
                    <p>fdsfds</p>
                </Segment>
            </Container>
        )
    }
}