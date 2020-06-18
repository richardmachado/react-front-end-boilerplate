import React, { Component } from 'react'
import { Container, Col, Form, Button} from "react-bootstrap";

import {  axiosWithAuth}  from "./axiosWithAuth"

class NewLogin extends Component {
    constructor(props){
      super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          user:[],
          isLoggedIn:false,
          username:'',
          password:''
        };
    }

     handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
      }

      handleLogoutClick = e => {
        this.setState({ isLoggedIn: false })
      }


  onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
        .post(`http://localhost:4000/api/auth/login`, e)
    .then(res => {
      const user = res.data[0].username;
      const password = res.data[0].password;
      const username = this.state.username;
      const passwordEntered = this.state.password;
      if(user === username && passwordEntered === password){
          this.setState({ isLoggedIn:true })
        }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      <div className="App">
          <h4
          className="display-4 mt-4 mb-4 text-center"
          >
          <i 
          className="fas fa-asterisk">
          </i> Expiration Reminder
          </h4>


          <Container onSubmit={this.onSubmit}>
              {this.state.isLoggedIn ? (
                <>
                <Button className="btn btn-sm btn-light mr-5 float-right" onClick={this.handleLogoutClick}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Button>
             
                </>
              ) : (
                <>
                <div id="status"></div>
                <Form className="loginForm ml-5">
                      <Form.Row>
                      <Form.Group as={Col}>
                      <Form.Label>Username</Form.Label>
                        <Form.Control
                        type="text"
                        name="username"
                        id="username"
                        value={this.state.value}
                        onChange={this.handleChange}
                        >
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                      </Form.Group>
                      </Form.Row>
                      <Button className="btn btn-sm btn-light" onClick={this.onSubmit}>
                        <i  className="fas fa-sign-in-alt"></i> Login
                      </Button>
                    </Form>
                </>
              )}
          </Container>



      </div>
    )
  }

}

export default NewLogin;