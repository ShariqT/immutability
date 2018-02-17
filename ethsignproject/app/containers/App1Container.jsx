import React from "react";
import { WebSocketBridge } from 'django-channels';
import SignForm from "../components/SignForm"
import {Container, Segment, Header, Divider} from "semantic-ui-react"
import ModalResponse from "../components/ModalResponse"
import base64url from 'base64-url'
export default class App1Container extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            modal:{
                open:false,
                message:""
            },
            socketState: 0,
            availableTransactions:[],
            lastTransaction:null
        }

        this.bridge = new WebSocketBridge();
        this.bridge.connect("/filter/");
        
        this.path = ""

    }

    sendWSMessage(data){
        if (this.state.socketState === 1) {
            console.log("sending data to server");
            console.log(data);
            this.bridge.send(data);
        } else {
            var that = this;
            // optional: implement backoff for interval here
            setTimeout(function () {
                that.sendWSMessage(data);
            }, 200);
        }
    }
    
    showModal(){
        console.log(this.state)
        if(this.state.availableTransactions == undefined){
            this.setState({
                modal:{
                open:true,
                message:"Awaiting new information to be processed on the blockchain..."
            }});
            return;
        }
        this.path = window.location.origin + "/r"  
        
        var rndIdx = Math.floor(Math.random() * Math.floor(this.state.availableTransactions.length))
        this.path = this.path + "/" + base64url.encode(this.state.availableTransactions[rndIdx].toString())
        this.setState({
            modal:{
            open:true,
            message:<a href={this.path}>Link</a>
        }});
    }

    handleModalState(state){
        this.setState({
            modal:{
                open:state
            }
        });
    }

    componentDidMount(){
        var self = this;

        this.bridge.socket.addEventListener("open", ()=>{
            console.log("opened a socket connection");
            self.setState({
                socketState:WebSocket.OPEN
            })

        });

        this.bridge.socket.addEventListener("close", ()=>{
            console.log("closed a socket connection");
            self.setState({
                socketState: WebSocket.CLOSED
            })
        });
        this.bridge.socket.addEventListener("message", (msg)=>{
            var blockInfo = JSON.parse(msg.data)
            if(blockInfo.error){
                //we don't have any blocks right now, so send out another request
                this.sendWSMessage({"check":true})
            }else{
                console.log(blockInfo);
                this.setState({
                    availableTransactions: blockInfo.transactions,
                    lastTransaction: blockInfo.time
                });
            }
        })
        //set a timer to periodically send a message back to the server to check
        //for new blocks
        setInterval(()=>{
            self.sendWSMessage({"check":true})
        }, 20000)
        //this.sendWSMessage({"hello":"there"})
        var pJS = window.particlesJS("block",{
            particles:{
                number: {
                    value:20
                },
                shape:{
                    type:"polygon",
                    stroke:{
                        width:3,
                        color:"#000000"
                    },
                    polygon:{
                        nb_sides:4
                    }
                },
                size:{
                    value:30,
                    random: false
                },
                line_linked:{
                    enable:true,
                    distance:800
                },
                move:{
                    attract:{
                        enable:false
                    },
                    bounce: false,
                    speed:5,
                    straight:false,
                    random:true,
                    out_mode:"out"
                },
                interactivity:{
                    events:{
                        onclick:{
                            enable:true,
                            mode:"push"
                        },
                        modes:{
                            push:{
                                particles_nb:1
                            }
                        }
                    }
                }
            }
        });
        window.particlesJS.setOnClickHandler(function(e){
            console.log("dfsddsfs");
            console.log(e);
            self.showModal();
        });
    }
    render(){
        return (
            <Container fluid>
                <div className="graph" id="block"></div>
                <ModalResponse type="green" open={this.state.modal.open} message={this.state.modal.message} handleFormState={this.handleModalState.bind(this)}></ModalResponse>

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