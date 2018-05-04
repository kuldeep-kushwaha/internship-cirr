
import React from 'react';
import ReactDOM from 'react-dom';

import {react, Component } from 'react';
import { Nav,Navbar, Jumbotron, Button , Alert, Label,Form} from 'react-bootstrap';
import { NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { FormGroup,FormControl} from 'react-bootstrap';

import {Modal} from 'react-bootstrap';
 
import styles from './login_signup.css'

class Login2 extends React.Component {

render() {

    var singup_style={
        display: 'inline-block',
    width: '90%',
    alignItems: 'center',
    padding: 15,
    'borderRadius': 15,
    border: '1px solid #8c8888'
    }
      return (
           <div class="login" style={singup_style}>

                     <div class="heading" style={{marginBottom:30}}>
                        <h2 style={{textAlign:'center'}}>Login</h2>
                    </div>

                       <form contenteditable="false">


                     <div class="messagealert" id="alert_container">
                     </div>
                     
                        <div class="form-group">
                          <label for="usr" id="lblResult" >Password</label>
                          <input type="password" class="form-control"  id="pass" minlength="6" required/>
                        </div>

                      <div class="active">
                          <input type="submit" class="btn btn-info"  Text="Log In" style={{width:100,marginBottom:20}} />
                      </div>
                    </form>
                </div>
      
      );



    }
}
  export default Login2;