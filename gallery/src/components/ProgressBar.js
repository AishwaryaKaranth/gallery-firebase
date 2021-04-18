import React from "react";
import useStorage from '../customHooks/useStorage';

const ProgressBar=({file, setFile})=>{ //destructuring the props
    const {url, progress}=useStorage(file); //this fires the useEffect hook and create a reference
    console.log(progress,url);
    return(
        <div className="progress-bar">
            progress
        </div>
    )
}

export default ProgressBar;