import React, { useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";

const Homepage = () => {

// Using Use state hook to handle response of API

  const [subs, setSubs] = useState([]);
  const [names, setNames] = useState([]);
  const [ids, setIds] = useState([]);
  const [id, setId] = useState([]);

// Fetching Data from API

  const fetchDataSub = async () => {
    let { data } = await axios.get("http://localhost:3000/subscribers");
    setSubs(data);
  };

  const fetchDataNames = async () => {
    let { data } = await axios.get("http://localhost:3000/subscribers/names");
    setNames(data);
  };

  const fetchDataIds = async () => {
    let { data } = await axios.get(`http://localhost:3000/subscribers/${id}`);
    setIds(data);
  };

//  On Click event handler

  const showDataSub = () => {
    fetchDataSub();
  };

  const showNames = () => {
    fetchDataNames();
  };

  const showIds = () => {
    fetchDataIds();
  };

//  Main Page
 
  return (
    <div>
      <div className="header px-2 py-3">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand align-middle">
              <i className="fa-brands fa-youtube px-1"></i>
              Youtube
            </a>
          </div>
        </nav>
      </div>

      {/* Button to show all sunscribers data */}
      
      <div className="container text-center text-light">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={showDataSub}
            >
              All Subscriber Data
            </button>
            {subs.map((item) => (
              <div
                className="card bg-dark m-3 p-1"
                style={{ width: "22rem" }}
                key={item._id}
              >
                <p className="text-success text-start p-2">
                  ID : {item._id}
                  <br />
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                  <br />
                  Subscribed Date : {item.subscribedDate}
                </p>
              </div>
            ))}
          </div>

          {/* Button to show Subscriber name and channel */}

          <div className="col">
            <button
              type="button"
              className="btn btn-warning"
              onClick={showNames}
            >
              Subscriber Name & Channel
            </button>
            {names.map((item) => (
              <div
                className="card bg-dark m-3 p-1"
                style={{ width: "19.5rem" }}
                key={item.name}
              >
                <p className="text-success text-start p-2">
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                </p>
              </div>
            ))}
          </div>

          {/* Search box for searching ID */}

          <div className="col">
            <input
              type="text"
              className="mx-2 py-1"
              placeholder="Enter ID"
              aria-label="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              style={{heigth:"1rem",width:"15rem",borderRadius:"0.5rem",borderColor:"rgb(42, 45, 48)"}}
            />
            <button type="submit" className="btn btn-danger" onClick={showIds}>
              Search
            </button>
            {ids.map((item) => (
              <div
                className="card bg-dark m-3 p-1"
                style={{ width: "19rem" }}
                key={item.subscribedChannel}
              >
                <p className="text-success text-start p-2">
                  ID : {item._id}
                  <br />
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                  <br />
                  Subscribed Date : {item.subscribedDate}
                  
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
