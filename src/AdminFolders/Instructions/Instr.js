// import React, { Component } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import { BsStarFill } from "react-icons/bs";


// class Instr extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: [],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div className="cont">
//           <section className="page-content innerContant">
//             <div>
//               <h1 className="text-center bold">
//                 Reasoning Practice Examinations
//               </h1>
//               <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
//                 Please read the following instructions Carefully
//               </h3>
//             </div>
//             <div className="clearfix">
//               <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>
//                 General Instructions
//               </h3>
//               <ul className="oderlist">
//                 <BsStarFill className="col" /> Total No of Question: <strong>10</strong>
//                 <br />
//                <BsStarFill className="col" /> Time alloted : <strong>15</strong> Minutes.
//                 <br />
//                 <BsStarFill className="col" /> Marks for each correct answer: <strong>1</strong> mark
//                 <br />
//                 <BsStarFill className="col" /> Penalty for each incorrect answer: <strong>0</strong> mark
//                 <br />
//                 <BsStarFill className="col"  /> Click on radio button to select/deselect your answer <br />
//                 <BsStarFill className="col"  /> To complete the test, click on <strong>Submit Test</strong> button given on the bottom of the test page
//                 <br />
//                 <BsStarFill className="col"  /> Test will be submitted automatically if time got expired and it will display report page <br />
//                 <BsStarFill className="col"  /> DO NOT refresh the page <br />
//               </ul>
//             </div>
//             <div className="topbar m-center-btn">
//               <ul className="list-inline">
//                 <Link to={'/Reasoning'}>
//                   <button type="submit" className="start" style={{width:"auto"}}>
//                     Start Now
//                   </button>
//                 </Link>
//               </ul>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }
// export default Instr;

                              // integartion 

import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

import { BsStarFill } from "react-icons/bs";


class Instr extends Component {
  constructor() {
    super();
    this.state = {
      rqId: "",
      rqName: "",
      values: [],
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/reasoning/saveReasoningQuestions", this.state)
      .then((response) => {
        console.log(response);
        console.log(response.values);
      });
  };

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8081/reasoning/getReasoningQuestions", {
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ values: json });
      });
  }

  deleteRow(rqId) {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      axios.delete(`http://localhost:8081/reasoning/deleteReasoningQuestions/${rqId}`);
    }
  }

  getRecord = (rqName) => {
    const obj = this.state.values.find((item) => item.rqName === rqName);
    return obj;
  };
  Edit = (rqName) => {
    const tempProduct = this.state.values;
    const index = tempProduct.indexOf(this.getRecord(rqName));
    const selectedRecord = tempProduct[index];
    this.setState({
      rqId: selectedRecord["rqId"],
      rqName: selectedRecord["rqName"],
    });
  };

  render() {
    const { rqId, rqName } = this.state;
    return (
      <div>
        <div className="cont">
          <section className="page-content innerContant">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1 className="text-center bold">
                Reasoning Instructions
              </h1>
               </div>
               <p>
                  <span className="sub-heading" style={{paddingLeft:"20px"}}>
              Write the instructions Here:
                  </span>
                </p>
                <div>
                  <input
                    type="text"
                    id="rqId"
                    name="rqName"
                    data-parse="uppercase"
                    value={this.state.rqName}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="stbtns">
                  <button type="submit" style={{width:"20%"}} onClick={this.componentDidMount()}>
                    Save
                  </button>
                 
                </div>
                </form>
            <div className="clearfix">
            <div className="top">
            {this.state.values.map((obj) => {
              return (
                <ul className="oderlist" key={obj.rqId}>
                  {/* <td> */}
                  {/* <button onClick={() => this.Edit(obj.jqName)}>
                    <GrUpdate />
                  </button>
                  <button onClick={() => this.deleteRow(obj.jqId)}>
                    <AiFillDelete />
                  </button> */}
                  {/* </td> */}
                  {/* <li classname="loo" onClick={() => this.deleteRow(obj.jqId)}>
                    <AiFillDelete /> </li> */}
                  <li onClick={() => this.Edit(obj.rqName)}>
                  <BsStarFill className="col" /> <AiFillDelete style={{marginLeft:"8px"}} onClick={() => this.deleteRow(obj.rqId)}/>
                    <GrUpdate style={{marginLeft:"12px"}}/> {obj.rqName}</li>
                   
                </ul>
              );
            })}
            </div>
              
              {/* <ul className="oderlist">
                <BsStarFill className="col" /> Total No of Question: <strong>10</strong>
                <br />
               <BsStarFill className="col" /> Time alloted : <strong>15</strong> Minutes.
                <br />
                <BsStarFill className="col" /> Marks for each correct answer: <strong>1</strong> mark
                <br />
                <BsStarFill className="col" /> Penalty for each incorrect answer: <strong>0</strong> mark
                <br />
                <BsStarFill className="col"  /> Click on radio button to select/deselect your answer <br />
                <BsStarFill className="col"  /> To complete the test, click on <strong>Submit Test</strong> button given on the bottom of the test page
                <br />
                <BsStarFill className="col"  /> Test will be submitted automatically if time got expired and it will display report page <br />
                <BsStarFill className="col"  /> DO NOT refresh the page <br />
              </ul> */}
            </div>
            {/* <div className="topbar m-center-btn">
              <ul className="list-inline">
                <Link to={'/Reasoning'}>
                  <button type="submit" className="start" style={{width:"auto"}}>
                     Question Page
                  </button>
                </Link>
              </ul>
            </div> */}
          </section>
        </div>
      </div>
    );
  }
}
export default Instr;




