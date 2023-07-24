import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {action,originals} from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title="Netflix Originals"/>
    <Rowpost url={action} title=" Action" isSmall/>
    </div>
  );
}

export default App;
