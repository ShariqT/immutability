import React from 'react';
import {Modal, Button, Icon, Header} from 'semantic-ui-react'

export default class ModalResponse extends React.Component{
   constructor(props, context){
        super(props);
        
        this.state = { 
            open: props.open,
            message: props.message,
            type: props.type,
            alertColor: this.setAlertColor(props.type),
        };
    }

    setAlertColor(modal_type){
        switch(modal_type){
            case  "Error":
                var alertColor = "red";
            break;
            case "Success":
                var alertColor = "green";
            break;
            default:
                var alertColor="black";
        }

        return alertColor;
    }
   handleClose = (evt)=>{
    this.setState({
        open:false
    })
   }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            message: nextProps.message,
            type: nextProps.type,
            alertColor: this.setAlertColor(nextProps.type)
        });
    }
    render(){
        
        console.log(this.state);
        return(
            <Modal open={this.state.open}>
                <Header color={this.state.alertColor}>{this.state.type}</Header>
                <Modal.Content>
                    <p>{this.state.message}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleClose} inverse color="green">
                        <Icon name="remove" /> Close
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}