import React from 'react';
import {Modal, Button, Icon} from 'semantic-ui-react'

export default class ModalResponse extends React.Component{
   constructor(props, context){
        super(props);
        this.state = { open: props.open };
    }
   handleClose = (evt)=>{
    this.setState({
        open:false
    })
   }

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open});
    }
    render(){
        
        console.log(this.state.open);
        return(
            <Modal open={this.state.open} closeIcon>
                <p>hello</p>
                <Modal.Actions>
                    <Button onClick={this.handleClose}>
                        <Icon name="checkmark" />
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}