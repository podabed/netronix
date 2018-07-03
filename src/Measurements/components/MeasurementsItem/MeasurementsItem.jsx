import React from "react";
import PropTypes from "prop-types";

import MeasurementString from "./MeasurementString";
import NoMeasurements from "../../../NoMeasurements";

import "./MeasurementsItem.css";

const MeasurementsItem = ({ _id, name, unit, measurements }) => (
  <div className="measurements-item">
    <div className="head">
      <span>
        <b className="uppercase">{name}</b> with ID:{" "}
        <b className="uppercase">{_id}</b>
        {unit && (
          <React.Fragment>
            {" "}
            in <b className="uppercase">{unit}</b>
          </React.Fragment>
        )}
      </span>
    </div>
    <div className="measurements">
      {measurements.length > 0 ? (
        <div className="left">
          {measurements.map(item => (
            <MeasurementString measurement={item} key={item} />
          ))}
        </div>
      ) : (
        <NoMeasurements />
      )}
    </div>
  </div>
);

MeasurementsItem.propTypes = {
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
};

export default MeasurementsItem;
