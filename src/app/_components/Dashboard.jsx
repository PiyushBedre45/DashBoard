import React from "react";
import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navitem">
            <li className="listitem">Dashboard</li>
            <li>Search Cources</li>
            <li>Application</li>
            <li>Student</li>
          </div>
        </div>
        <div className="bgbox">
          <div className="dashboard-wrapper">
            <div className="grid-wrapper">
              <div className="header-bar">
                <div className="dropbox">
                  <li>Date</li>
                  <li>Date</li>
                  <li>Country</li>
                  <li>Country</li>
                </div>
              </div>
              <div className="card">
                <p className="card-title">All Application Applied</p>
                <h1 className="card-value">06</h1>
              </div>
              <div className="card">
                <p className="card-title">All Application Applied</p>
                <h1 className="card-value">06</h1>
              </div>
              <div className="card">
                <p className="card-title">All Application Applied</p>
                <h1 className="card-value">06</h1>
              </div>
              <div className="card">
                <p className="card-title">All Application Applied</p>
                <h1 className="card-value">06</h1>
              </div>
            </div>

            <div className="deal-box">
              <h2 className="deal-title">Deal of the Week</h2>
              <div>
                <p className="deal-subtitle">Get Free Ticket!</p>
                <p className="deal-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="news-box">
              <h2 className="news-title">News & Updates</h2>
              <div className="news-item">
                <h1 className="newsHeading">GEORGIA ADMISSIONS STARTED</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="news-item">
                <h1 className="newsHeading">GEORGIA ADMISSIONS STARTED</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, suscipit.
                </p>
              </div>
              <div className="news-item">
                <h1 className="newsHeading">GEORGIA ADMISSIONS STARTED</h1>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
