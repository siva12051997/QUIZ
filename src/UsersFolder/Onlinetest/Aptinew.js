import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

class Aptinew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issActive: true,
      ibActive: false,
      minutes: 20,
      seconds: 0,
      jqId: "",
      jqName: "",
      jqoOne: "",
      jqoTwo: "",
      jqoThree: "",
      jqoFour: "",
      values: [],
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
    // alert("your Time is Completed");
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8081/java/getJavaQuestions", {
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ values: json });
        console.log(json);
      });
  }

  render() {
    const { image } = this.state;
    const { minutes, seconds } = this.state;
    return (
      <div>
        <section className="test-timer" id="countdown">
          {minutes === 0 && seconds === 0 ?
          (function() { alert ("Your Exam Time is Completed"); }) (
           
          ) : (
            <h1>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
            
          )}
        </section>
        <form className="fors" onSubmit={this.componentDidMount}>
          <section className="center">
            <div className="cus-container">
              <div className="nquizbox onlinetest">
                <div className="page-heading">
                  <h1>APTITUDE EXAMINATIONS</h1>
                  <h1 style={{ float: "right", marginRight: "120px" }}>
                    Total Questions:- 20
                  </h1>
                </div>
                <div style={{ marginLeft: "18px" }}>
                  <p>
                    The Team of subject matter experts of JagranJosh has come up
                    with all new Conceptual Practice Test on Quantitative
                    Aptitude- Data Interpretation which contains topics such as
                    Pie Chart, Tables, Graphs, Combination of graphs and
                    Miscellaneous.{" "}
                  </p>
                </div>

                <div className="top">
                  {this.state.values.map((obj) => {
                    return (
                      <div>
                        <div className="oderlist" key={obj.jqId}>
                          <h4>
                            <div style={{ marginLeft: "12px" }} />
                            {obj.jqName}
                          </h4>

                          <ul className="quiz-answer ansbox">
                            <div className="a3500801050 ques_option2">
                              <li className="opt-list" type="radio">
                                <input type="checkbox" />
                                <label className="lab">{obj.jqoOne}</label>
                              </li>
                            </div>
                            <div className="a3500801050 ques_option2">
                              <li className="opt-list" type="radio">
                                <input type="checkbox" />
                                <label className="lab">{obj.jqoTwo}</label>
                              </li>
                            </div>
                            <div className="a3500801050 ques_option2">
                              <li className="opt-list" type="radio">
                                <input type="checkbox" />
                                <label className="lab">{obj.jqoThree}</label>
                              </li>
                            </div>
                            <div className="a3500801050 ques_option2">
                              <li className="opt-list" type="radio">
                                <input type="checkbox" />
                                <label className="lab">{obj.jqoFour}</label>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    );
                  })}


 {/* SUBMIT SECTION  */}


                          <div className="prev-next">
                            {/* <a
                              href="#"
                              onClick={this.toggle19}
                              className="prev-slide prev"
                            >
                              {" "}
                              Previous <i className="icon-prev"></i>
                            </a> */}
                            <a href="#" className="subsepbtn" onClick={this.postShow}>
                              SUBMIT
                            </a>
                            {/* <a href="#" className="next-slide next disable">
                              Next <i className="icon-next"></i>
                            </a> */}
                          </div>


 {/* CONFIRM SUBMISSION SECTION */}
                          
              {this.state.ibActive && (  <div 
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
                        <a href="/Aptinew" className=" q-red-btn">
                          Coutinue the Test
                        </a>
                        <a href="#" className="q-green-btn">
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
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}
export default Aptinew;
