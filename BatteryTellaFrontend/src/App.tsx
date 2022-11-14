import { useState } from "react";
import "./App.css";
import logo from "./assets/images/batterytellaLogo.png";
import { Device } from "./device";
import { Navbar } from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DevicePage } from "./DevicePage/devicePage";
import {PricePage} from "./PricePage/pricePage";

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
              <Route path="/prices" element={<PricePage/>} />
              <Route path="" element={<DevicePage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
