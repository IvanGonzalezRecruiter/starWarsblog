import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Card() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/people">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
