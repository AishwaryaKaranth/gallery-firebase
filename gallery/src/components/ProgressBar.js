import React, { useEffect } from "react";
import useStorage from '../customHooks/useStorage';

const ProgressBar=({file, setFile})=>{ //destructuring the props
    const {url, progress}=useStorage(file); //this fires the useEffect hook and create a reference
    console.log(progress, url);
    useEffect(()=>{
        if(url){
            setFile(null);//don't show the progress bar after completion of upload
        }
    }, [url, setFile]);// useEffect here does not show the progress bar once the image is upoaded.
    return(
        <div className="progress-bar" style={{width:progress + '%'}}></div>
    )
}

export default ProgressBar;