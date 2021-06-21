import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import InfoBox from "./InfoBox";
import Header from "./Header";

const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <Header />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAdhIwaFjKiqg19koJUs9JK7iwmqIFl_gE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <InfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 36.114647,
    lng: -115.172813,
  },
  zoom: 7,
};
export default Map;
