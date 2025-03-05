import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css"

const Dashboard = ({isLoggedIn, setLogin}) => {
  return (
    <main className="main">
      <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />
      <div>
        <h1>Dashboard</h1>
        <div className="cards">
          <Card
            header="Dataset Size"
            title="10+ GBs"
            imgPath="./data_size.svg"
            borderColor="#a10a0a"
          />
          <Card
            header="Training Size"
            title="80%"
            imgPath="./size.svg"
            borderColor="#067815"
          />
          <Card
            header="Test Size"
            title="20%"
            imgPath="./size.svg"
            borderColor="#620185"
          />
          <Card
            header="Accuracy"
            title="99%"
            imgPath="./accuracy.svg"
            borderColor="#012969"
          />
        </div>
        <div className="home-container">
          <div className="left">
            <div className="home-card">
              <div className="head">
                <h3>Algorithm vs Accuracy</h3>
              </div>
              <h4>Random Forest</h4>
              <img src="./random-forest-bar.png" alt="" />
              <h4>LightGBM</h4>
              <img src="./lightgbm-bar.png" alt="" />
            </div>
            <div className="home-card">
              <div className="head">
                <h3>Confusion Matrix</h3>
              </div>
              <img src="./confusion-matrix.png" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="home-card">
              <div className="head">
                <h3>Legitimate vs Malicious</h3>
              </div>
              <img src="./pie-chart.png" alt="" />
            </div>
            <div className="home-card">
              <div className="head">
                <h3>Development Approach</h3>
              </div>
              <p>
                The ML model development includes data acquisitiion from multiple trusted souurces. For example the dataset for URL prediction model were acquired from <a href="https://www.kaggle.com/datasets/samahsadiq/benign-and-malicious-urls">Kaggle</a> and the dataset for training the model for PE file prediction was taken from <a href="https://github.com/elastic/ember">Ember</a>. The next steps in developing the models were data preprocessing (making the data suitable for model training), feature extraction, choosing algorithms for building the model, model development, computation of performance metrices and then choosing the best model to use.
              </p>
            </div>
            <div className="home-card">
              <div className="head">
                <h3>Model Development</h3>
              </div>
              <p>
                Machine Learning (ML) Model Lifecycle refers to the process that covers right from source data identification to model development, model deployment and model maintainence. At high level, the entire ectivities fall under two broad ctegories which are ML Model Development and ML Model Operations. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;