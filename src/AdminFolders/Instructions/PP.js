// import React, { Component } from "react";

// import { GrUpdate } from "react-icons/gr";
// import { AiFillDelete } from "react-icons/ai";
// import axios from "axios";

// class PP extends Component {
//   refresh = () => {
//     window.location.reload(false);
//   };
//   constructor(props) {
//     super(props);

//     this.state = {
//       jqId: "",
//       jqName: "",
//       values: [],
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//       .post(
//         "http://localhost:8081/java/saveJavaQuestions",
//         this.state
//       )
//       .then((response) => {
//         console.log(response);
//         console.log(response.values);
//       });
//   };

//   componentDidMount() {
//     const headers = { "Content-Type": "application/json" };
//     fetch("http://localhost:8081/java/getJavaQuestions", {
//       headers,
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ values: json });
//       });
//   }

//   deleteRow(jqId) {
//     if (window.confirm("Are You Sure You Want To Delete?")) {
//       axios.delete(
//         `http://localhost:8081/java/deleteJavaQuestions/${jqId}`
//       );
//     }
//   }

//   getRecord = (jqName) => {
//     const obj = this.state.values.find(
//       (item) => item.jqName === jqName
//     );
//     return obj;
//   };
//   Edit = (jqName) => {
//     const tempProduct = this.state.values;
//     const index = tempProduct.indexOf(this.getRecord(jqName));
//     const selectedRecord = tempProduct[index];
//     this.setState({
//       jqId: selectedRecord["jqId"],
//       jqName: selectedRecord["jqName"],

//     });
//   };

//   render() {
//     const { jqId, jqName } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} >
//           <section className="tab">
//           <div className="cotaines">
//             <div className="box">
//               <div className="Heading">
//             <h1>Instructions</h1>
//             </div>
//             <p>
//                 <span className="sub-heading">
//                   Read the following instructions carefully:
//                 </span>
//               </p>
//               <input
//                 type="text"
//                 id="jqId"
//                 name="jqName"
//                 data-parse="uppercase"
//                 value={this.state.jqName}
//                 onChange={this.handleChange}
//                 required
//               />
//           </div>
//           </div>
//           <div className="footer">
//             <a href="#" onClick={this.componentDidMount()}  type="submit">
//               Save
//             </a>
//           </div>
//           </section>
//         </form>

//         <div style={{ paddingTop: "10px" }}>
//           <ul id="myTable">
//             {this.state.values.map((obj) => {
//               return (
//                 <ul key={obj.jqId}>
//                   <li>
//                     <button
//                       onClick={() => this.Edit(obj.jqName)}

//                     >
//                       <GrUpdate />{" "}
//                     </button>
//                     <button
//                       style={{ marginLeft: "10px" }}
//                       onClick={() => this.deleteRow(obj.jqId)}

//                     >
//                       <AiFillDelete />{" "}
//                     </button>
//                   </li>

//                   <li>{obj.jqName}</li>

//                 </ul>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default PP;

import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";

class PP extends Component {
  constructor(props) {
    super(props);
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
              <h1 className="text-center bold">Instructions</h1>
            </div>
            <p>
              <span className="sub-heading" style={{ paddingLeft: "20px" }}>
                Write the instructions Here:
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
            </div>
            <div className="stbtns">
              <button
                type="submit"
                style={{ width: "20%" }}
                onClick={this.componentDidMount()}
              >
                Save
              </button>
              {/* <a href="#" onClick={this.componentDidMount()} >Save</a> */}
            </div>
          </form>
          <div className="top">
            {this.state.values.map((obj) => {
              return (
                <ul  className="oderlist" key={obj.rqId}>
                  <li onClick={() => this.Edit(obj.jqName)}>
                    {/* <BsStarFill className="col" />  */}
                    <BsStarFill className="col" /> <AiFillDelete
                      style={{ marginLeft: "8px" }}
                      onClick={() => this.deleteRow(obj.jqId)}
                    />
                    <GrUpdate style={{ marginLeft: "12px" }} /> {obj.jqName}
                  </li>
                </ul>
              );
            })}
          </div>
          {/* <div className="topbar m-center-btn">
            <ul className="list-inline">
              <Link to={"/Aptinew"}>
                <button
                  type="submit"
                  className="start"
                  style={{ width: "auto" }}
                >
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
export default PP;
