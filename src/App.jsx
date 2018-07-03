import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Measurements from "./Measurements/Measurements";
import Fetching from "./Fetching";

import { startFetchingMeasurements } from "./actions";

import "normalize.css";
import "./App.css";

import logo from "./images/logo.png";

const mapDispatchToProps = dispatch => ({
  startFetchingMeasurements: bindActionCreators(
    startFetchingMeasurements,
    dispatch
  )
});
const mapStateToProps = state => ({
  measurements: state.measurements
});

class App extends React.PureComponent {
  render() {
    const { error, measurements } = this.props;

    return (
      <React.Fragment>
        <header className="header">
          <img alt="Netronix logo" className="logo" src={logo} />
          <div className="text">Real-time measurements</div>
        </header>
        {error ? (
          <div className="center error">
            <span>Error while fetching from API.</span>
          </div>
        ) : measurements.length > 0 ? (
          <Measurements measurements={measurements} />
        ) : (
          <Fetching />
        )}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  measurements: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      unit: PropTypes.string,
      measurements: PropTypes.arrayOf(
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.number)
          ])
        )
      )
    })
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
