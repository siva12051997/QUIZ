// import React, { Component } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import { BsStarFill } from "react-icons/bs";
// // import { Link } from "react-router-dom";

// class Instruction extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: [],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div className="Instruction">
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
//                 <Link to={'/Aptitude'}>
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
// export default Instruction;



                          // ADMIN ADD OR SEND INSTRUCTION TO USER
                         
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import { BsStarFill } from "react-icons/bs";
// import { Link } from "react-router-dom";

class Instruction extends Component {
  constructor() {
    super();
    this.state = {
       rqId: "",
      rqName: "",
    Instruction: [],
    };
  }

  componentDidMount() {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8081/reasoning/getReasoningQuestions", {
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ Instruction: json });
      });
  }
  render() {
    return (
      <div> 
        <section className="Instruction3">
        <Link to="/Headerbar">
          <p style={{ color: "white", float:"right", fontSize:"18px" }}>Logout</p>
        </Link>
          <div className="cotaines">
            <div className="box">
              <div className="Heading">
                <h1>Instructions</h1>
              </div>
              <p>
                <span className="sub-heading">
                  Read the following instructions carefully:
                </span>
              </p>

              {this.state.Instruction.map((obj) => {
                return (
                  <ul className="oderlist" key={obj.rqId}>
                    <li onClick={() => this.Edit(obj.rqName)}>{obj.rqName}</li>
                  </ul>
                );
              })}

              {/* <ul  key={obj.jqId}>
                   <div> <BsStarFill className="col" />{obj.jqName}</div>
                       </ul> */}

              <div className="stbtns">
                <a href="/Aptinew">START TEST</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Instruction;