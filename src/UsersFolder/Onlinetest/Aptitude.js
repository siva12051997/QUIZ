import React, { Component } from "react";
import axios from 'axios';
import { AiFillCloseCircle } from "react-icons/ai";
class Aptitude extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      issActive: true,
      ibActive: true,
      showButton: true,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,


      minutes: 20,
      seconds: 0,
      image: [],
      aqoTwo:"",
      aqoOne:"",
      aqoThree:"",
      aqoFour:""  
    };   
  }


    
  // PAGE SHOW & HIDE

  postShow = () => {
    this.setState({ ibActive: true });
  };
  postHide = () => {
    this.setState({ ibActive: false });
  };

  haandleShow = () => {
    this.setState({ issActive: true });
  };
  haandleHide = () => {
    this.setState({ issActive: false });
  };
  toggle = () => {
    this.setState({
      showButton: true,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle2 = () => {
    this.setState({
      showButton: false,
      showButton2: true,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle3 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: true,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle4 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: true,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle5 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: true,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle6 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: true,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle7 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: true,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle8 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: true,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle9 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: true,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle10 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: true,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle11 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: true,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle12 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: true,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle13 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: true,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle14 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: true,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle15 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: true,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle16 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: true,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle17 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: true,
      showButton18: false,
      showButton19: false,
      showButton20: false,
    });
  };

  toggle18 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: true,
      showButton19: false,
      showButton20: false,
    });
  };
  toggle19 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: true,
      showButton20: false,
    });
  };

  toggle20 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: false,
      showButton5: false,
      showButton6: false,
      showButton7: false,
      showButton8: false,
      showButton9: false,
      showButton10: false,
      showButton11: false,
      showButton12: false,
      showButton13: false,
      showButton14: false,
      showButton15: false,
      showButton16: false,
      showButton17: false,
      showButton18: false,
      showButton19: false,
      showButton20: true,
    });
  };

  componentWillMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }
 onentWillUnmount() {
    clearInterval(this.myInterval);
  }

  componentDidMount() {
    fetch("http://" + window.hostname + "/aptitude/getAptitudeQuestions/" )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          image: json,
        });
      });
    console.log(this.state.image);
  }
  changeHandlerrr = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    fetch('http://localhost:8081/aptitude/check',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({aqoTwo:"",
        aqoOne:"",
        aqoThree:"",
        aqoFour:""})
    }).then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    
}

  render() {
    const { image } = this.state;
    const { minutes, seconds } = this.state;
    return (
      <div>
        <section className="test-timer" id="countdown">
          {minutes === 0 && seconds === 0 ? (
            <h1></h1>
          ) : (
            <h1>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </section>
        <form className="fors" onSubmit={this.submitHandler}>
          <section className="center">
            <div className="cus-container">
              <div className="nquizbox onlinetest">
                <div className="page-heading">
                  <h1>APTITUDE EXAMINATIONS</h1>
                  <h1 style={{ float: "right",marginRight:"120px" }}>Total Questions:- 20</h1>
                </div>
                    {this.state.image.map((img, index) => ( <div className="1hspart">
                  <ul>
                    {this.state.showButton ? (
                      <div>
                         <div style={{ marginLeft: "18px"}}> 
                <p>The Team of subject matter experts of JagranJosh has 
                    come up with all new Conceptual Practice Test on Quantitative Aptitude- Data 
                    Interpretation which contains topics such as Pie Chart, Tables, Graphs, 
                    Combination of graphs and Miscellaneous. </p></div>
                         <li className="question">
                        <h2 className="question-heading">
                          <span>Question 
                             1 
                            {/* {img.aqId} */}
                          </span>
                        </h2>

                        <div className="que multichoice">
                          <div className="qxtcontent">
                            <b>Directions: </b>
                            Read the Table carefully and answer the question
                            given below:
                            {image && image.length > 0}
                            <div style={{ paddingTop: "10px" }}>
                              <img
                                src={"data:image/jpeg;base64," + img.aqImage}
                              />
                              
                              <ul>{img.aqName}</ul>

                              <ul className="quiz-answer ansbox">
                                <div className="a3500801050 ques_option2">
                                  <li className="opt-list" type="radio">
                                  <input  type="checkbox" 
                                  name="aqoOne" 
                                  value={this.state.aqoOne}  
                                  onChange={(event) =>
                                    this.changeHandlerrr(event)} />
                                    <label className="lab">
                                     
                                      {img.aqoOne}
                                    </label>
                                  </li>
                                  <li class="opt-list">
                                  <input  type="checkbox" name="aqoTwo" value={this.state.aqoTwo}   onChange={(event) =>
                                    this.changeHandlerrr(event)
                                  }  />
                                    <label className="lab">
                                   
                                      {img.aqoTwo}
                                    </label>
                                  </li>
                                  <li className="opt-list">
                                  <input  type="checkbox" name="aqoThreee" value={this.state.aqoThreee}    onChange={(event) =>
                                    this.changeHandlerrr(event)
                                  }/>
                                    <label className="lab">
                                    
                                      {img.aqoThree}
                                    </label>
                                  </li>
                                  <li class="opt-list">
                                  <input  type="checkbox" name="aqoFour" value={this.state.aqoFour}  onChange={(event) =>
                                    this.changeHandlerrr(event)
                                  }  />
                                    <label className="lab">
                                    
                                      {img.aqoFour}
                                    </label>
                                  </li>
                                </div>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                        <div className="prev-next">
                        
                          <a
                            href="#"
                            onClick={this.toggle2}
                            className="next-slide next"
                          >
                            Next <i className="icon-next"></i>
                          </a>
                        </div>
                      </div>
                    ) : null}

                          {/*Question 2*/}

                    {this.state.showButton2 ? (
                       <div>
                       <li className="question">
                      <h2 className="question-heading">
                        <span>Question 
                           2
                          {/* {img.aqId} */}
                        </span>
                      </h2>
                         
                        <div className="que multichoice">
                          <div className="qxtcontent">
                            <b>Directions: </b>
                            Read the Table carefully and answer the question
                            given below:
                            {image && image.length > 0}
                            <div style={{ paddingTop: "10px" }}>
                              <img
                                src={"data:image/jpeg;base64," + img.aqImage}
                              />
                              
                              <ul>{img.aqName}</ul>

                              <ul className="quiz-answer ansbox">
                                <div className="a3500801050 ques_option2">
                                  <li className="opt-list" type="radio">
                                  <input  type="checkbox" 
                                  name="aqoOne" 
                                  value={this.state.aqoOne}  
                                  onChange={(event) =>
                                    this.changeHandlerrr(event)}
                                     />
                                    <label className="lab">
                                     
                                      {img.aqoOne}
                                    </label>
                                  </li>
                                  <li class="opt-list">
                                  <input  type="checkbox" name="aqoTwo" 
                                  value={this.state.aqoTwo}   
                                  onChange={(event) =>
                                    this.changeHandlerrr(event)
                                  }  
                                  />
                                    <label className="lab">
                                   
                                      {img.aqoTwo}
                                    </label>
                                  </li>
                                  <li className="opt-list">
                                  <input  type="checkbox" name="aqoThreee" 
                                  value={this.state.aqoThreee}    onChange={(event) =>
                                    this.changeHandlerrr(event)
                                  }
                                  />
                                    <label className="lab">
                                    
                                      {img.aqoThree}
                                    </label>
                                  </li>
                                  <li class="opt-list">
                                  <input  type="checkbox" name="aqoFour" 
                                  value={this.state.aqoFour}  onChange={(event) =>
                                    this.changeHandlerrr(event)
                                  }  
                                  />
                                    <label className="lab">
                                    
                                      {img.aqoFour}
                                    </label>
                                  </li>
                                </div>

                              </ul>
                            </div>
                          </div>
                        </div>
                        </li>

                        <div className="prev-next">
                          <a
                            href="#"
                            onClick={this.toggle}
                            className="prev-slide prev"
                          >
                            {" "}
                            Previous <i className="icon-prev"></i>
                          </a>
                          <a
                            href="#"
                            onClick={this.toggle3}
                            className="next-slide next"
                          >
                            Next <i className="icon-next"></i>
                          </a>
                        </div>
                      </div>
                    ) : null}

                      {/*Question 3*/}

                    {this.state.showButton3 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q3. </strong>where i syouigfffekfn
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                        </li>
                        <div className="prev-next">
                          <a
                            href="#"
                            onClick={this.toggle2}
                            className="prev-slide prev"
                          >
                            {" "}
                            Previous <i className="icon-prev"></i>
                          </a>
                          <a
                            href="#"
                            onClick={this.toggle4}
                            className="next-slide next"
                          >
                            Next <i className="icon-next"></i>
                          </a>
                        </div>
                      </div>
                    ) : null}

                      {/*Question 4*/}

                    {this.state.showButton4 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q4. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                        </li>
                        <div className="prev-next">
                          <a
                            href="#"
                            onClick={this.toggle3}
                            className="prev-slide prev"
                          >
                            {" "}
                            Previous <i className="icon-prev"></i>
                          </a>
                          
                          <a
                            href="#"
                            onClick={this.toggle5}
                            className="next-slide next"
                          >
                            Next <i className="icon-next"></i>
                          </a>
                        </div>
                      </div>
                    ) : null}

                                 {/*Question 5*/}

                    {this.state.showButton5 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q5. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                        </li>
                        <div className="prev-next">
                          <a
                            href="#"
                            onClick={this.toggle4}
                            className="prev-slide prev"
                          >
                            {" "}
                            Previous <i className="icon-prev"></i>
                          </a>
                         
                          <a
                            href="#"
                            onClick={this.toggle6}
                            className="next-slide next"
                          >
                            Next <i className="icon-next"></i>
                          </a>
                        </div>
                      </div>
                    ) : null}

                      {/*Question 6*/}

                    {this.state.showButton6 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q6. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                        </li>
                        <div className="prev-next">
                          <a
                            href="#"
                            onClick={this.toggle5}
                            className="prev-slide prev"
                          >
                            {" "}
                            Previous <i className="icon-prev"></i>
                          </a>
                         
                          <a
                            href="#"
                            onClick={this.toggle7}
                            className="next-slide next"
                          >
                            Next <i className="icon-next"></i>
                          </a>
                        </div>
                      </div>
                    ) : null}

                      {/*Question 7*/}

                    {this.state.showButton7 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q7. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle6}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                           
                            <a
                              href="#"
                              onClick={this.toggle8}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}

                      {/*Question 8*/}

                    {this.state.showButton8 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q8. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle7}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                          
                            <a
                              href="#"
                              onClick={this.toggle9}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}


                      {/*Question 9*/}

                    {this.state.showButton9 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q9. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle8}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                           
                            <a
                              href="#"
                              onClick={this.toggle10}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}

                      {/*Question 10*/}

                    {this.state.showButton10 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q10. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle9}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle11}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}

                      {/*Question 11*/}

                    {this.state.showButton11 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q11. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle10}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle12}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}


                                 {/*Question 12*/}

                    {this.state.showButton12 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q12. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle11}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle13}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}


                      {/*Question 13*/}

                    {this.state.showButton13 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q13. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle12}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle14}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}


                      {/*Question 14*/}

                    {this.state.showButton14 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q14. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle13}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle15}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}


                      {/*Question 15*/}

                    {this.state.showButton15 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q15. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle14}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle16}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}


                     {/*Question 16*/}

                    {this.state.showButton16 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q16. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle15}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle17}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}

                      {/*Question 17*/}

                    {this.state.showButton17 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q17. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle16}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle18}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}

                      {/*Question 18*/}

                    {this.state.showButton18 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q18. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle17}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle19}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}

                      {/*Question 19*/}

                    {this.state.showButton19 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q19. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle18}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            
                            <a
                              href="#"
                              onClick={this.toggle20}
                              className="next-slide next"
                            >
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}


                      {/*Question 20*/}
                      
                    {this.state.showButton20 ? (
                      <div>
                        <li className="1click">
                          <p>
                            <strong>Q20. </strong>when is brhgfibhkgdkdfkbv
                          </p>
                          <div className="ansbox ques_option1 a3524613090">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Gujarat
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613091">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Bihar</label>
                          </div>
                          <div className="ansbox ques_option1 a3524613092">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>
                              Uttarakhand
                            </label>
                          </div>
                          <div className="ansbox ques_option1 a3524613093">
                            <input
                              type="radio"
                              name="fav_language"
                              value="HTML"
                              style={{ marginLeft: "15px" }}
                            />
                            <label style={{ marginLeft: "-4px" }}>Odisaa</label>
                          </div>
                          <div className="prev-next">
                            <a
                              href="#"
                              onClick={this.toggle19}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a>
                            <a href="#" className="subsepbtn" onClick={this.postShow}>
                              SUBMIT
                            </a>
                            <a href="#" className="next-slide next disable">
                              Next <i className="icon-next"></i>
                            </a>
                          </div>
                        </li>
                      </div>
                    ) : null}
                  </ul>
                 
                  {this.state.ibActive && ( <div 
                    className="pop_screen"
                    id="newpost"
                    style={{ display: "block" }}>
                    
                    {this.state.issActive && ( <div className="overlay-div">
                       <div className="nquizbox contant-cont-box">
                      <span className="q-close-btn">
                      {this.state.issActive && ( 
                      <AiFillCloseCircle onClick={this.haandleHide} style={{width:"25px", height:"30px"}}/>
                      )}
                      </span>
                      <div style={{paddingTop:"20px"}}>
                      <h2 className="panal-header">
                        Would you like to submit the test?
                      </h2>
                      <div className="clear"></div>
                      <div className="btns_wrapper stbtn">
                        <a href="#" className=" q-red-btn">
                          Coutinue the Test
                        </a>
                        <a class="q-green-btn" href="#">
                          Confirm Submission
                        </a>
                      </div>
                      </div>
                    </div>
                    </div>
                    )}
                  </div>
                  )}
                 </div>
                  ))}
                </div>
            </div>
          </section>
          
          {/* <button type="submit" className="btt btt1">
            Submit
          </button> */}
        </form>
      </div>
    );
  }
}

export default Aptitude;

//    SAME CODE BUT DIFFEFERNT METHOD

// class Gk extends Component {
//   constructor() {
//     super();
//     this.state = { time: {}, minutes: 1 };
//     this.timer = 0;
//     this.startTimer = this.startTimer.bind(this);
//     this.countDown = this.countDown.bind(this);
//   }

//   minutesToTime(secs) {
//     let hours = Math.floor(secs / (60 * 60));
//     let divisor_for_minutes = secs % (60 * 60);
//     let minutes = Math.floor(divisor_for_minutes / 60);
//     let divisor_for_seconds = divisor_for_minutes % 60;
//     let seconds = Math.ceil(divisor_for_seconds);

//     let obj = {
//       h: hours,
//       m: minutes,
//       s: seconds,
//     };
//     return obj;
//   }

//   componentDidMount() {
//     let timeLeftVar = this.minutesToTime(this.state.minutes);
//     this.setState({ time: timeLeftVar });
//   }

//   startTimer() {
//     if (this.timer == 0 && this.state.minutes > 0) {
//       this.timer = setInterval(this.countDown, 1000);
//     }
//   }

//   countDown() {
//     let minutes = this.state.minutes + 1;
//     this.setState({
//       time: this.minutesToTime(minutes),
//       minutes: minutes,
//     });

//     if (minutes == 0) {
//       clearInterval(this.timer);
//     }
//   }

//   render() {
//     return (
//       <div className="test-timer" id="countdown">
//         <button onClick={this.startTimer}>stat</button>
//         {this.state.time.m} : {this.state.time.s}
//       </div>
//     );
//   }
// }
