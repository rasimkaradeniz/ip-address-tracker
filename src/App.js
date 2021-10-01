import "./App.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
function App() {
  const position = [51.505, -0.09];
  return (
    <>
      <header className="header">
        <h1>IP Address Tracker</h1>
        <form action="" className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="border-black"
            />
            <button type="submit" className="bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </form>
      </header>
      <main>
        <div className="content">
          <div className="ip">
            <h6>IP ADDRESS</h6>
            <h2>192.212.174.101</h2>
          </div>
          <div className="location">
            <h6>LOCATION</h6>
            <h2>Brooklyn, NY 10001</h2>
          </div>
          <div className="timezone">
            <h6>TIMEZONE</h6>
            <h2>UTC-05:00</h2>
          </div>
          <div className="isp">
            <h6>ISP</h6>
            <h2>SpaceX Starlink</h2>
          </div>
        </div>

        <div className="w-full h-full bg-red-600">a</div>
      </main>
    </>
  );
}

export default App;
