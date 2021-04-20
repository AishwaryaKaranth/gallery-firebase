import React from "react";
import './App.css';
import UploadForm from "./components/formUpload.js";
import ImageGrid from "./components/imageGrid";
import Modals from "./components/Modals";
import Title from "./components/Title";
import {useState} from "react";

function App() {
  const [select, setSelect]=useState(null); //select will contain url of image
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelect={setSelect}/>
      {select && <Modals select={select} setSelect={setSelect}/>}
    </div>
  );
}

export default App;
