import React from "react";
import moosepic from "../../assets/moose.jpeg"

export default function Moose() {
  return (
    <div className="d-flex flex-column align-items-center moose-card">
    <img
      src={moosepic}
      className="img-responsive align-center"
      id="moose-pic"
      alt="dog picture"
    ></img>
    <h3>This is Moose</h3>
    <p className="summary">He's a rescue from Mexico and was voted the world's best boy by GQ in 2022. When he's not chasing squirrels or chewing sticks, he enjoys swimming and hiking. </p>
  </div>
    // <>
    // <div className="container d-flex flex-column align-items-center">
    //   <div className="card d-flex flex-column align-items-center" id="moose-card;">
    //     <img src={moosepic} className="card-img-top" id="moose-pic" alt="..."></img>
    //     <div className="card-body">
    //     <h5 className="card-title">This is Moose</h5>
    //       <p className="card-text">
    //         He's a rescue from Mexico and was voted the world's best boy by GQ in 2022. When he's not chasing squirrels or chewing sticks, he enjoys swimming and hiking. 
    //       </p>
    //     </div>
    //   </div>
    // </div>
    // </>
  );
}
