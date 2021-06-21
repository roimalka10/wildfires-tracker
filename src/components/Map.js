import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAdhIwaFjKiqg19koJUs9JK7iwmqIFl_gE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 32.109333,
    lng: 34.855499,
  },
  zoom: 6,
};
export default Map;
