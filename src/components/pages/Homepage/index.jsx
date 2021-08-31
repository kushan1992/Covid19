import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Template from "../../templates";
import { getCurrentStatistical } from "../../../actions";
import { Container, Row, Col } from "reactstrap";
import handWash from "../../../assets/images/handwash.png";
import meterDistance from "../../../assets/images/meter-distance.png";
import wearMask from "../../../assets/images/wear-mask.jpg";
import { FaGlobe } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";

function Homepage() {
  const statics = useSelector((state) => state.statics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentStatistical());
  }, []);

  function staticsChart() {
    const chartstatics = {};
    chartstatics.labels = ["Deaths", "Recoveries", "Active Cases"];
    chartstatics.datasets = [
      {
        label: "My First Dataset",
        data: [
          statics && statics.local_deaths,
          statics && statics.local_recovered,
          statics && statics.local_active_cases,
        ],
        backgroundColor: ["#DF6767", "#669AFF", "#6F49FF"],
      },
    ];

    return chartstatics;
  }

  function protectSection() {
    return (
      <div className="protect">
        <div className="protect-heading">
          <span className="protect-text">How to protect</span>
        </div>
        <div className="protect-card">
          <Row>
            <Col xl="5" lg="5" md="12" sm="5" xs="5">
              <img
                src={handWash}
                className="protect-image"
                weight="109"
                height="120"
                alt="handwash"
              />
            </Col>
            <Col
              xl="7"
              lg="7"
              md="12"
              sm="7"
              xs="7"
              className="protect-image-text"
            >
              <span>Wash your hands often</span>
            </Col>
          </Row>
          <Row>
            <Col xl="5" lg="5" md="12" sm="5" xs="5">
              <img
                src={meterDistance}
                weight="116"
                height="128"
                alt="meterDistance"
                className="protect-image"
              />
            </Col>
            <Col
              xl="7"
              lg="7"
              md="12"
              sm="7"
              xs="7"
              className="protect-image-text"
            >
              <span>Maintain at least one meter distance</span>
            </Col>
          </Row>
          <Row>
            <Col sm="12" xs="12" className="wearmask-text">
              <span className="">
                Always wear a clean face mask <br />
                when you leave home
              </span>
            </Col>
            <Col sm="12" xs="12" className="protect-wearmask">
              <img
                src={wearMask}
                alt="wearMask"
                className="protect-wearmask-image"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  function staticSectionOne() {
    return (
      <div className="sectionOne">
        <div className="sectionOne-heading">
          <span className="sectionOne-text">Statistics</span>
        </div>
        <div className="sectionOne-card">
          <Row>
            <Col sm="6" xs="6">
              <div className="new-cases">
                <span className="card-text">New Cases</span>
                <br />
                <span className="card-stat">
                  {statics && statics.local_new_cases}
                </span>
              </div>
            </Col>
            <Col sm="6" xs="6">
              <div className="new-deaths">
                <span className="card-text">New Deaths</span>
                <br />
                <span className="card-stat">
                  {statics && statics.local_new_deaths}
                </span>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm="6" xs="6">
              <div className="total-cases">
                <span className="card-text">Total Cases</span>
                <br />
                <span className="card-stat">
                  {statics && statics.local_total_cases}
                </span>
              </div>
            </Col>
            <Col sm="6" xs="6">
              <div className="deaths">
                <span className="card-text">Deaths</span>
                <br />
                <span className="card-stat">
                  {statics && statics.local_deaths}
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div className="sectionOne-chart">
          <Row>
            <Col sm="12" xs="12">
              <div className="chart-section">
                <Doughnut data={staticsChart()} className="doughnutChart" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  function staticSectionTwo() {
    return (
      <div className="sectionTwo">
        <div className="sectionTwo-card">
          <div className="card-area">
            <span className="card-text">Active Cases</span>
            <br />
            <span className="card-stat">
              {statics && statics.local_active_cases}
            </span>
          </div>
          <div className="card-area">
            <span className="card-text">Recovered</span>
            <br />
            <span className="card-stat">
              {statics && statics.local_recovered}
            </span>
          </div>
          <div className="card-area">
            <span className="card-text">Total Individuals in Hospital</span>
            <br />
            <span className="card-stat">
              {statics &&
                statics.local_total_number_of_individuals_in_hospitals}
            </span>
          </div>
          <div className="card-area">
            <span className="card-text">Total PCR Testing Count</span>
            <br />
            <span className="card-stat">
              {statics && statics.total_pcr_testing_count}
            </span>
          </div>
        </div>
        <div className="sectionTwo-card-global">
          <div className="card-global-area">
            <FaGlobe className="globe-icon" />
            <span className="card-text">GLOBAL</span>
          </div>
          <div className="card-area">
            <span className="card-text">New Deaths</span>
            <br />
            <span className="card-stat">
              {statics && statics.global_new_deaths}
            </span>
          </div>
          <div className="card-area">
            <span className="card-text">Deaths</span>
            <br />
            <span className="card-stat">
              {statics && statics.global_deaths}
            </span>
          </div>
          <div className="card-area">
            <span className="card-text">New Cases</span>
            <br />
            <span className="card-stat">
              {statics && statics.global_new_cases}
            </span>
          </div>
          <div className="card-area">
            <span className="card-text">Total Cases</span>
            <br />
            <span className="card-stat">
              {statics && statics.global_total_cases}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <Template>
        <Container fluid={true}>
          <Row>
            <Col xl="4" lg="4" md="4" sm="12" xs="12">
              {protectSection()}
            </Col>
            <Col xl="4" lg="4" md="4" sm="12" xs="12">
              {staticSectionOne()}
            </Col>
            <Col xl="4" lg="4" md="4" sm="12" xs="12">
              {staticSectionTwo()}
            </Col>
          </Row>
        </Container>
      </Template>
    </Fragment>
  );
}

export default Homepage;
