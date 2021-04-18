import React from "react";
import './App.css';
import UploadForm from "./components/formUpload.js";
import ImageGrid from "./components/imageGrid";
function App() {
  return (
    <div className="App">
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
