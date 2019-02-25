import React from "react";

const weatherComp = ({
  temperature,
  city,
  humidity,
  description,
  error,
  iconId
}) => {
  const icon = `http://openweathermap.org/img/w/${iconId}.png`;
  return (
    <div className="mt-3">
      {city && <h3>{city}</h3>}
      {iconId && (
        <p>
          <img src={icon} alt="1" />
        </p>
      )}
      {temperature && <p>{temperature}°C</p>}
      {humidity && <p>Humidity: {humidity}</p>}
      {description && <p>Description: {description}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default weatherComp;
