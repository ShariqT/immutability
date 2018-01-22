import App2Container from './containers/App2Container'
import React from 'react'
import { render} from 'react-dom'

class App2 extends React.Component{
    render(){
        return(<App2Container/>)
    }
}

render(<App2/>, document.getElementById("App2"))



