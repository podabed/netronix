import React from "react";
import PropTypes from "prop-types";

import MeasurementsItem from "./components/MeasurementsItem/MeasurementsItem";

const Measurements = ({ measurements }) => (
  <React.Fragment>
    <div className="measurements__container">
      <div className="measurements__list">
        {measurements.map(item => (
          <MeasurementsItem
            key={`${item._id}${item.name}${item.measurements}`}
            {...item}
          />
        ))}
      </div>
    </div>
  </React.Fragment>
);

Measurements.propTypes = {
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

export default Measurements;
