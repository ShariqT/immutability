import React from "react";
import { render } from "react-dom";

import App1Container from "./containers/App1Container";
import { Web3Provider } from "react-web3";
import { NoWeb3 } from "./components/NoWeb3";

class App1 extends React.Component{
    constructor(props){
        super(props);

        console.log(props)
    }
    render(){
        return (
                <App1Container />
        )
    }
}

render(<Web3Provider>
<App1 />
</Web3Provider>, document.getElementById('App1'))
