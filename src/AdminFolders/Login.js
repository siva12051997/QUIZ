import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "./Logo/image.jpg";
import $ from "jquery";

// import axios from 'axios';

import { Button, Card, CardBody, Col, Form,  Input, Row } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      entities: {},
      errors: {},

      image: [],
      userName: '',
      userPassword: '',

      
      
    };

   

    
    // this.handleForm = this.handleForm.bind(this);
    // this.submitLogin = this.submitLogin.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);



    // this.handleChange = this.handleChange.bind(this);
    // this.RegisterForm = this.RegisterForm.bind(this);
  }

   loadDoc(){
    var userName=$('#userName').val();;
var userPassword=$('#userPassword').val();;
  $.ajax({
  url: "http://localhost:8081/login/user/"+userName+"/"+userPassword,
  type: "get", //send it through get method
  headers: {
    "Authorization": "Basic " + btoa(userName + ":" + userPassword)
  },
  data:JSON
, }).then(res => res.json())
  .then(data => console.log(data))
    .catch(err => console.log(err))
    
   }






  changeHandlerrr = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleForm  = (e) => { 
    this.setState ({
       [e.target.name] : e.target.value
    })
  }





  handleChange(e) {
    let entities = this.state.entities;
    entities[e.target.name] = e.target.value;
    this.setState({
      entities,
    });
  }
  RegisterForm(e) {
    e.preventDefault();
    if (this.validateemployee()) {
      let entities = {};
      entities["UserName"] = "";
      entities["Email"] = "";
      this.setState({ entities: entities });
      alert("Details Save Successully Completed");
    }
  }
  validateemployee() {
    let entities = this.state.entities;
    let errors = {};
    let IsValid = true;
    if (!entities["UserName"]) {
      IsValid = false;
      errors["UserName"] = "Please fill the name";
    }
    if (!entities["Password"]) {
      IsValid = false;
      errors["Password"] = "Please enter your password";
    }
    this.setState({
      errors: errors,
    });
    return IsValid;
  }

  render() {
    return (
      <div className="bg_image"> 
      <section>
        <div className="imr">
          <img src={image} style={{ paddingTop:"15px", width: "300px", height: "120px" }} />
        </div>
        <div className="_6luv" >
          <div className="app flex-row align-items-center">
            <section>
              <Row className="justify-content-center">
                <Col md="9" lg="7" xl="6">
                  <Card className="mx-4">
                    <CardBody className="p-4">
                      <Form id="form_login" onSubmit={this.loadDoc}>
                        <h1 style={{color:"skyblue"}}>Login Form</h1>
                        <div style={{ paddingTop: "15px" }}>
                          <div className="labs">
                            <label>UserName</label>
                          </div>
                          <input
                            type="text"
                            id="userName"
                            className="mrgn"
                            name="userName"
                            value={this.state.userName}
                            onChange={ this.changeHandlerrr}
                            // value={this.state.entities.UserName}
                            // onChange={this.handleChange}
                            placeholder="Enter UserName" required
                          />
                          <div className="errorMsg">
                            {this.state.errors.UserName}
                          </div>
                          <div className="labs">
                            <label>Password</label>
                          </div>
                          <input
                            type="text"
                            id="userPassword"
                            className="mrgn"
                            name="userPassword"
                            value={this.state.userPassword}
                            onChange={this.changeHandlerrr}
                            // value={this.state.entities.Password}
                            // onChange={this.handleChange}
                            placeholder="Enter Password" required
                          />
                          <div className="errorMsg">
                            {this.state.errors.Password}
                          </div>
                          <div className="res">
                            <Link to="/Register">
                              <p>Register Here</p>
                            </Link>
                          </div>
                        </div>
                        {/* <div className="_8icz">
                          <hr />
                        </div> */}
                        <button
                          type="submit"
                          className="suse"
                          style={{marginLeft:"22px"}}
                        >
                          LOG IN
                        </button>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </section>
          </div>
        </div>
      </section>
      </div>
    );
  }
}
export default Login;
