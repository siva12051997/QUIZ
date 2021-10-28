import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

class Aptinew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jqId: "",
      jqName: "",
      jqoOne: "",
      jqoTwo: "",
      jqoThree: "",
      jqoFour: "",
      values: [],
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/java/saveJavaQuestions", this.state)
      .then((response) => {
        console.log(response);
        console.log(response.values);
      });
  };

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

  deleteRow(jqId) {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      axios.delete(
        `http://localhost:8081/java/deleteJavaQuestions/${jqId}`
      );
    }
  }

  getRecord = (jqName) => {
    const obj = this.state.values.find((item) => item.jqName === jqName);
    return obj;
  };
  Edit = (jqName) => {
    const tempProduct = this.state.values;
    const index = tempProduct.indexOf(this.getRecord(jqName));
    const selectedRecord = tempProduct[index];
    this.setState({
      jqId: selectedRecord["jqId"],
      jqName: selectedRecord["jqName"],
      jqoOne: selectedRecord["jqoOne"],
      jqoTwo: selectedRecord["jqoTwo"],
      jqoThree: selectedRecord["jqoThree"],
      jqoFour: selectedRecord["jqoFour"],
    });
  };
  render() {
    const { jqId, jqName, jqoOne, jqoTwo, jqoThree, jqoFour } = this.state;
    return (
      <div className="contes">
        <section className="page-content innerContant">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1 className="text-center bold">QUESTIONS & OPTIONS</h1>
            </div>
            <p>
              <span className="sub-heading" style={{ paddingLeft: "20px" }}>
                Add Question And Options Here :
              </span>
            </p>

            <div>
              <input
                type="text"
                id="jqId"
                name="jqName"
                data-parse="uppercase"
                value={this.state.jqName}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoOne"
                data-parse="uppercase"
                value={this.state.jqoOne}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoTwo"
                data-parse="uppercase"
                value={this.state.jqoTwo}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoThree"
                data-parse="uppercase"
                value={this.state.jqoThree}
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                // id="aqId"
                name="jqoFour"
                data-parse="uppercase"
                value={this.state.jqoFour}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="stbtns">
              <button
                type="submit"
                style={{ width: "20%" }}
                onClick={this.componentDidMount()}
              >
                Save
              </button>
            </div>
          </form>
          <div className="top">
            {this.state.values.map((obj) => {
              return (
                <div>
                  <ul className="oderlist" key={obj.aqId}>
                    <li onClick={() => this.Edit(obj.jqName)}>
                      <BsStarFill className="col" />{" "}
                      <AiFillDelete
                        style={{ marginLeft: "8px" }}
                        onClick={() => this.deleteRow(obj.aqId)}
                      />
                      <GrUpdate style={{ marginLeft: "12px" }} /> {obj.jqName}
                    </li>

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
                  </ul>
                </div>
              );
            })}
          </div>
          {/* <div className="topbar m-center-btn">
              <ul className="list-inline">
                <Link to={'/Aptitude'}>
                  <button type="submit" className="start" style={{width:"auto"}}>
                    Start Now
                  </button>
                </Link>
              </ul>
            </div> */}
        </section>
      </div>
    );
  }
}
export default Aptinew


                              
