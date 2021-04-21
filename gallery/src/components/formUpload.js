import React from "react";
import {useState} from "react";
import ProgressBar from "./ProgressBar";

const UploadForm=()=>{
    const [file, setFile]=useState(null);
    const [error, setError]=useState(null);
    const [like,setLike]=useState(0);
    const validFormat = ['image/png','image/jpeg','video/avi','video/mp4','video/mkv']
    const fileHandler=(e)=>{
        let file=e.target.files[0];
        //console.log(file);
        if(file && validFormat.includes(file.type)){
            setError('');
            setFile(file);
            
        }
        else{
            setError("Please select a file of .jpg, .png, .avi, .mp4 format🙂");
            setFile(null);
        }
        
    }
    return(
        <form>
            <label>
            <input type="file" onChange={fileHandler}></input>
            <span>+</span>
            </label>
            <div className="output">
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
            
            </div>
        </form>
    )
}

export default UploadForm;