/* eslint-disable import/no-webpack-loader-syntax */
import "./App.css";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Api } from "./fetch";
import CreateMap from "./map";
function App() {
  let url =
    "https://geo.ipify.org/api/v1?apiKey=at_FHm7bDx1FLvinA4zBjl7Wq4bmpWvJ";
  const [sendIp, setSendIp] = useState("");
  const { data, loading } = Api(url);
  const sendForm = (e) => {
    e.preventDefault();
    url = url + "&domain=" + sendIp;
  };
  if (data) {
    var { location } = data;
  }
  return (
    <>
      <header className="header relative">
        <h1>IP Address Tracker</h1>
        <form
          onSubmit={sendForm}
          className="form w-full flex justify-center items-start"
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="border-black"
              value={sendIp}
              onChange={(e) => setSendIp(e.target.value)}
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
        <div className="content">
          {loading === true ? (
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />
          ) : (
            <>
              <div className="ip">
                <h6>IP ADDRESS</h6>
                <h2>{data.ip}</h2>
              </div>
              <div className="location">
                <h6>LOCATION</h6>
                <h2>{data.location.city}</h2>
              </div>
              <div className="timezone">
                <h6>TIMEZONE</h6>
                <h2>{data.location.timezone}</h2>
              </div>
              <div className="isp">
                <h6>ISP</h6>
                <h2>{data.isp}</h2>
              </div>
            </>
          )}
        </div>
      </header>

      <div className="relative">
        {location && (
          <>
            <i className="marker ">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56">
                <path
                  fill-rule="evenodd"
                  d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"
                />
              </svg>
            </i>
            <CreateMap lat={location.lat} lng={location.lng} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
