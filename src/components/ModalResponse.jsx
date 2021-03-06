import React from 'react';
import {Modal, Button, Icon, Header} from 'semantic-ui-react'

export default class ModalResponse extends React.Component{
   constructor(props, context){
        super(props);
        
        this.state = { 
            open: props.open,
            message: props.message,
            type: props.type,
            title: props.title,
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
       var self = this;
            this.setState({
                open:false
            }, function(){;
                
                this.props.handleFormState(this.state.open);
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            message: nextProps.message,
            type: nextProps.type,
            title: nextProps.title,
            alertColor: this.setAlertColor(nextProps.type)
        });
    }
    render(){
        
        return(
            <Modal open={this.state.open}>
                <Header color={this.state.alertColor}>{this.state.title === undefined ? this.state.type : this.state.title}</Header>
                <Modal.Content>
                    {this.state.message}
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