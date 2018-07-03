import dayjs from "dayjs";
import React from "react";

import "./MeasurementsItem.css";

const MeasurementString = ({ measurement }) => {
  const [time, value] = measurement;
  const valueString = Array.isArray(value) ? (
    <a
      className="href"
      href={`https://maps.google.com/?ll=${value[0]},${value[1]}`}
    >
      Latitude: {value[0]}, Longitude: {value[1]}
    </a>
  ) : (
    value.toString()
  );

  return (
    <span className="measurement">
      {dayjs(time).format("DD.MM.YYYY HH:mm:ss")} &rarr; {valueString}
    </span>
  );
};

export default MeasurementString;
