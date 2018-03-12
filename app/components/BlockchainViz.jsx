import React from "react"
import ModalResponse from "../components/ModalResponse"
import { WebSocketBridge } from 'django-channels';

import base64url from 'base64-url'

export default class BlockChainViz extends React.Component{
    constructor(props, context){
        super(props);
        this.pJS = null;
        this.state = {
            modal:{
                open:false,
                message:""
            },
            dynamic: props.dynamic,
            socketState: 0,
            availableTransactions:[],
            lastTransaction:null
        }

        if (props.dynamic){
            this.bridge = new WebSocketBridge();
            this.bridge.connect("/filter/");
        }
    }


    showModal(){
        console.log(this.state)
        if(this.state.availableTransactions == undefined || this.state.availableTransactions.length === 0){
            this.setState({
                modal:{
                open:true,
                message:"Awaiting new information to be processed on the blockchain..."
            }});
            return;
        }
        this.path = window.location.origin + "/r"  
        
        var rndIdx = Math.floor(Math.random() * Math.floor(this.state.availableTransactions.length))
        this.path = this.state.availableTransactions[rndIdx];
        console.log(this.path)
        var self = this;
        this.setState({
            modal:{
            open:true,
            title:"Latest Transaction from the Ethereum Test Network",
            message: <div>
                    <p><strong>To:</strong> {self.path.to}</p>
                    <p><strong>From:</strong>{self.path.from} </p>
                    <p><strong>Value:</strong>{ web3.fromWei(self.path.value, 'ether')} Ether</p>
                    <p><strong>Data:</strong>{self.path.data}</p>
                    </div>
        }});
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

    handleModalState(state){
        this.setState({
            modal:{
                open:state
            }
        });
    }

    componentDidMount(){
        var self = this;
        if(this.state.dynamic){
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
                console.log(JSON.parse(msg.data));
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
        }
        //-----
        this.pJS = window.particlesJS("block",{
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
            if(self.state.dynamic){
                self.showModal();
            }
        });
    }
    render(){
        return(<div>
            <ModalResponse type="Success" title={this.state.modal.title} open={this.state.modal.open} message={this.state.modal.message} handleFormState={this.handleModalState.bind(this)}></ModalResponse>
            <div className="graph" id="block"></div>
        </div>)
    }
}