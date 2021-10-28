// import React, { Component } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// // import { Link } from "react-router-dom";

// class Instr1 extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       time: {}, 
//      }; 
//   }

//   render() {
//     return (
//       <div>
//         <section className="tab">
//           <div className="cotaines">
//             <div className="box">
//               <div className="Heading">
//                 <h1>Instructions</h1>
//               </div>
//               <p>
//                 <span className="sub-heading">
//                   Read the following instructions carefully:
//                 </span>
//               </p>
//               <ul className="oderlist">
//                 <li>
//                   Total No of Question: <strong>10</strong>
//                 </li>
//                 <li>
//                   Time alloted : <strong>15</strong> Minutes.
//                 </li>
//                 <li>
//                   Marks for each correct answer: <strong>1</strong> mark
//                 </li>
//                 <li>
//                   Penalty for each incorrect answer: <strong>0</strong> mark
//                 </li>
//                 <li>Click on radio button to select/deselect your answer </li>
//                 <li>
//                   To complete the test, click on <strong>Submit Test</strong>{" "}
//                   button given on the bottom of the test page
//                 </li>
//                 <li>
//                   Test will be submitted automatically if time got expired and
//                   it will display report page{" "}
//                 </li>
//                 <li>DO NOT refresh the page </li>
//               </ul>
//               <div className="stbtns">
//                 <a href="/Technical">START TEST</a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// export default Instr1;

                               // GET POST AND DELETE FOR INSTRUCTIONS



                               
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

class Instr1 extends Component {
  constructor() {
    super();
    this.state = {
      jqId: "",
      jqName: "",
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
      });
  }

  deleteRow(jqId) {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      axios.delete(`http://localhost:8081/java/deleteJavaQuestions/${jqId}`);
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
    });
  };
  render() {
    const { jqId, jqName } = this.state;
    return (
      <div className="cont">
        <section className="page-content innerContant">
          <form onSubmit={this.handleSubmit}>
              <div>
                  <h1 className="text-center bold">
                    Instructions
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
                    id="jqId"
                    name="jqName"
                    style={{width:"100%"}}
                   
                    data-parse="uppercase"
                    value={this.state.jqName}
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
           <div className="top">
            {this.state.values.map((obj) => {
              return (
                <ul className="oderlist" key={obj.jqId}>
               
                  <li onClick={() => this.Edit(obj.jqName)}>
                  <BsStarFill className="col" /> <AiFillDelete  style={{marginLeft:"8px"}}  onClick={() => this.deleteRow(obj.jqId)}/>
                    <GrUpdate style={{marginLeft:"12px"}}/> {obj.jqName}</li>
                   
                </ul>
              );
            })}
            </div>
            
            {/* <div className="topbar m-center-btn">
              <ul className="list-inline">
                <Link to={'/Technical'}>
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
export default Instr1;

