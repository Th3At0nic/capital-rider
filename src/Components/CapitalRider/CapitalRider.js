import React from "react";
import "./CapitalRider.css";
import bikeImage from "../../images/bike.png";
import busImage from "../../images/bus.png";
import jeepImage from "../../images/jeep.png";
import trainImage from "../../images/train.png";
import { Link } from "react-router-dom";

const CapitalRider = () => {
  return (
    <div className="row">
      <div className="col mb-5">
        <Link to="/bike">
          <div>
            <div>
              <img className="images p-2" src={bikeImage} alt="" />
            </div>
            <div>
              <h3>BIKE</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="col mb-5">
        <Link to="/bus">
          <div>
            <div>
              <img className="images p-2" src={busImage} alt="" />
            </div>
            <div>
              <h3>BUS</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="col mb-5">
        <Link to="/car">
          <div>
            <div>
              <img className="images p-2" src={jeepImage} alt="" />
            </div>
            <div>
              <h3>CAR</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="col mb-5">
        <Link to="/train">
          <div>
            <div>
              <img className="images p-2" src={trainImage} alt="" />
            </div>
            <div>
              <h3>TRAIN</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CapitalRider;
