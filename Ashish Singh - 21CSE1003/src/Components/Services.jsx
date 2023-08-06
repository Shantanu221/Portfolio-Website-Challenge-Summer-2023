import React from "react";
import "./Services.css";

import vscode from "../images/services/vscode.png";
import excel from "../images/services/Excel.png";
import github from "../images/services/github-mark.png";
import python from "../images/services/python.png";
import postgresql from "../images/services/PostgreSQL.png";
import pandas from "../images/services/pandas_mark.png";
import numpy from "../images/services/numpylogoicon.png";
import scikit from "../images/services/scikit-learn-logo.png";
import selenium from "../images/services/Selenium_Logo.png";

const serviceList = [
  {
    title: "Visual Studio Code",
    description: "Experienced with Visual Studio Code for efficient coding workflows",
    image: vscode,
  },
  {
    title: "Microsoft Excel",
    description: "Proficient in Microsoft Excel for data analysis and spreadsheet management",
    image: excel,
  },
  {
    title: "GitHub",
    description: "Experienced in GitHub for version control and collaborative coding",
    image: github,
  },
  {
    title: "Python",
    description: "Skilled in Python for versatile and efficient programming",
    image: python,
  },
  {
    title: "PostgreSQL",
    description: "Familiar with PostgreSQL for basic data analysis and database management",
    image: postgresql,
  },
  {
    title: "Pandas",
    description: "Proficient in pandas for data manipulation, analysis, and visualization",
    image: pandas,
  },
  {
    title: "NumPy",
    description: "Skilled in NumPy for efficient numerical computations in Python",
    image: numpy,
  },
  {
    title: "Scikit-learn",
    description: "Proficient in scikit-learn for machine learning and predictive modeling",
    image: scikit,
  },
  {
    title: "Selenium",
    description: "Skilled in Selenium for browser automation and web scraping tasks",
    image: selenium,
  }
];

const Services = () => {
  return (
    <section className="padding" id="services">
      <h2 style={{ textAlign: "center" }}>Technologies I use</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="service-container">
          {serviceList.map((service) => (
            <div className="row-service-wrap">
              <div className="service-card">
                <div className="service-box">
                  <img className="service-img" src={service.image} alt="vscode" />
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                   </div>
                 </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
