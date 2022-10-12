import { useState } from "react";
import "./App.css";
import logo from "./assets/images/batterytellaLogo.png";
import { Navbar } from "./navbar";

function App() {
  return (
    <div>
      <img src={logo} className="h-[5rem] flex justify-center m-auto"></img>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
      />

      <Navbar />
      <div className="fixed bottom-0 m-2 w-screen">
        <button className="btn btn-outline btn-accent">Button</button>
      </div>
    </div>
  );
}

export default App;
