import React from "react";
import {useState} from "react";

const UploadForm=()=>{
    const [file, setFile]=useState(null);
    const [error, setError]=useState(null);
    const validFormat = ['image/png','image/jpg','video/avi','video/mp4']
    const fileHandler=(e)=>{
        let file=e.target.files[0];
        //console.log(file);
        if(file && validFormat.includes(file.type)){
            setFile(file);
            setError('');
        }
        else{
            setError("Please select a file of .jpg, .png, .avi, .mp4 format🙂");
            setFile(null);
        }
        
    }
    return(
        <>
            Upload File<input type="file" onChange={fileHandler}></input>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
        </>
    )
}

export default UploadForm;