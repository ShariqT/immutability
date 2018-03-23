import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route } from "react-router-dom"
import App1Container from "./containers/App1Container";
import App2Container from "./containers/App2Container";
import { Web3Provider } from "react-web3";
import Intro from "./components/Intro";

class App1 extends React.Component{
    constructor(props){
        super(props);

        console.log(props)
    }
    render(){
        return(
        <App1Container />
        );
    }
}

render(
    <Web3Provider web3UnavailableScreen={() => <Intro dynamic="true"></Intro>}>
    <Router>
        <div>
        <Route exact path="/" component={App1Container} />
        <Route path="/r/:id" component={App2Container} />
        </div>
    </Router>
    </Web3Provider>, document.getElementById('App1'))

