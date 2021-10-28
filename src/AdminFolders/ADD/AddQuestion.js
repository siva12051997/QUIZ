import React, { Component } from "react";

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <div>
        <form className="fors">
          <section className="center">
            <div className="cus-container">
              <div className="nquizbox onlinetest">
                {/* <div className="page-heading"></div> */}
                  <div className="1hspart">
                    <ul>
                        <div>
                          <div style={{ marginLeft: "18px" }}>
                           
                          </div>
                          <li className="question">
                            <h2 className="question-heading">
                              <span>Question 1</span>
                            </h2>

                            <div className="que multichoice">
                              <div className="qxtcontent">
                                <div style={{ paddingTop: "10px" }}>
                                  <h3>
                                      {/* {img.aqName} */}1. what is java
                                      </h3>

                                  <ul className="quiz-answer ansbox">
                                    <div className="a3500801050 ques_option2">
                                      <li className="opt-list" type="radio">
                                        <input
                                          type="checkbox"
                                          name="aqoOne"
                                        
                                        />
                                        <label className="lab">
                                          software
                                        </label>
                                      </li>
                                      <li class="opt-list">
                                        <input
                                          type="checkbox"
                                          name="aqoTwo"
                                        
                                        />
                                        <label className="lab">
                                               IT
                                        </label>
                                      </li>
                                      <li className="opt-list">
                                        <input
                                          type="checkbox"
                                          name="aqoThreee"
                                        
                                        />
                                        <label className="lab">
                                         NON-IT
                                        </label>
                                      </li>
                                      <li class="opt-list">
                                        <input
                                          type="checkbox"
                                          name="aqoFour"
                                        
                                        />
                                        <label className="lab">
                                          Technology
                                        </label>
                                      </li>
                                    </div>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                     
                    </ul>
                  </div>
                
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default AddQuestion;
