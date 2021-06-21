import React from "react";

const InfoBox = ({ info }) => {
  return (
    <div className="info">
      <h2>Events Info</h2>
      <ul>
        <li>
          ID of event: <span>{info.id}</span>
        </li>
        <li>
          Name: <span>{info.title}</span>
        </li>
      </ul>
    </div>
  );
};

export default InfoBox;
