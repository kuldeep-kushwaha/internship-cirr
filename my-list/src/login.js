
import React from 'react';
import ReactDOM from 'react-dom';

import {react, Component } from 'react';
import { Nav,Navbar, Jumbotron, Button , Alert, Label,Form} from 'react-bootstrap';
import { NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import { FormGroup,FormControl} from 'react-bootstrap';

import {Modal} from 'react-bootstrap';

class Login extends React.Component {

render() {

    var singup_style={
        display: 'inline-block',
    width: '90%',
    alignItems: 'center',
    padding: 15,
    'borderRadius': 15,
    border: '1px solid #8c8888'
    };

       var member = {
            color: 'red',
            fontSize: 18,
            marginTop: 14
          };

          var logo = {
            color: '#dedede',
            fontSize: 60,
            marginTop: 14,
            fontWeight:'bold'

          };

      return (

        <div id="main">
      <div id="nav">

            <div class="navigation">

                <Navbar inverse collapseOnSelect>
                      <Navbar.Brand>
                        <a href="#home" style={logo}>My-List</a>
                      </Navbar.Brand>
                      <Nav pullRight>
                        <NavItem eventKey={1} style={member}>
                            Join Us Now! 
                        </NavItem>
                        <NavItem eventKey={2}>
                        <Button bsStyle="primary" style={{height:50,width: 100,fontSize: 20}}>Sign Up</Button>
                        </NavItem>
                      </Nav>
              
                </Navbar>

          </div>
      </div>

      <div id="bottom_back">
          <div id="image">
           
          </div>

          <div id="signup_page">

           <div class="login" style={singup_style}>

                     <div class="heading" style={{marginBottom:30}}>
                        <h2 style={{}}>Login</h2>
                         <p class="lead">Connect with a social network</p>   
                    </div>

                  <div class="social_btn">
                      <input type="button" class="btn btn-danger" value="Google" />
                  </div>

                  <hr style={{backgroundColor:'rgba(204, 200, 200, 0.56)'}}/>

                      <div class="heading">
                    <p class="lead">Login in with your email address</p> 
                      </div>  


                       <form>


                     <div class="messagealert" id="alert_container">
                     </div>

                        <div class="form-group">
                          <label for="usr">Email</label>
                          <input type="email" class="form-control" id="mail" required/>
                             
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
          </div>
      </div>

    <div id="main_footer">
    </div>
    </div>

      
      );



    }
}
  export default Login;