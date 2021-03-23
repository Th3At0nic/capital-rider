import React from "react";
import map from "../../images/ubermap.jpg";

const Destination = () => {
  return (
    <div className="row">
      <div className="col-md-5">
        <h5>Pick from</h5>
        <input
          className="mb-2 form-control"
          type="text"
          placeholder="enter your location"
        />{" "}
        <br />
        <h5>Pick to</h5>
        <input
          className="mb-2 form-control"
          type="text"
          placeholder="enter your destination"
        />{" "}
        <br />
        <input className="btn btn-warning" type="submit" value="submit" />
      </div>
      <div className="col-md-7">
        <img src={map} alt="" />{" "}
      </div>
    </div>
  );
};

export default Destination;
