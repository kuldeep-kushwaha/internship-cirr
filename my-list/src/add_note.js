import React from 'react';
import ReactDOM from 'react-dom';

import {react, Component } from 'react';
import { Nav,Navbar, Jumbotron, Button , Alert, Label,Form,Glyphicon} from 'react-bootstrap';
import { NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { FormGroup,FormControl,Image} from 'react-bootstrap';

import {Modal} from 'react-bootstrap';
 
import styles from './user_home.css'

import { Link } from 'react-router-dom'


class AddNote extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleHide() {
      this.setState({ show: false });
    }
    render() {
      return (
        <div className="modal-container" style={{ height:0 }}>
          <Button style={{padding:0,backgroundColor:'#232222',borderColor:'#232222',color:'white'}}
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
             <Glyphicon glyph="plus" />Add Note
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
          
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Add Note
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 <div style={{width:100,height:100,backgroundColor:'red'}}>
                 </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
  export default AddNote;
  