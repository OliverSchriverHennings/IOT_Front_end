import { useState } from "react";
import "./App.css";
import logo from "./assets/images/batterytellaLogo.png";
import { Device } from "./DevicePage/device";
import { Navbar } from "./core/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DevicePage } from "./DevicePage/devicePage";
import { PricePage } from "./PricePage/pricePage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="h-[5rem] flex justify-center m-auto"></img>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <Navbar />

        <BrowserRouter>
          <main>
            <Routes>
              <Route path="/devices" element={<DevicePage />} />
              <Route path="/stats" element={<p>No stats to see...</p>} />
              <Route path="/prices" element={<PricePage />} />
              <Route path="" element={<DevicePage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
