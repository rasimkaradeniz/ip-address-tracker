/* eslint-disable import/no-webpack-loader-syntax */
// eslint-disable-next-line import/no-webpack-loader-syntax
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl";

function CreateMap({ lat, lng }) {
  const [zoom, setZoom] = useState(11);
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmFzaW1rIiwiYSI6ImNrdTluN2Z5MzA4aDIycWw5emo1anpoNjQifQ.sY8HPIZitVLm10XRJKJhgA";
  const mapContainer = useRef(null);
  const maps = useRef(null);
  useEffect(() => {
    if (maps.current) return;
    maps.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className="map-container" />;
}

export default CreateMap;
