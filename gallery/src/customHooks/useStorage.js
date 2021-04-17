import React from "react";
import {useState, useEffect} from "react";
import {projectStorage} from "../components/firebase_config.js";

const useStorage=(file)=>{
    const [progress, setProgress]=useState(0);
    const [error, setError]=useState(null);
    const [url, setUrl]=useState(null);


useEffect(()=>{
    const storageRef=proejctStorage.ref(file.name)//this references a file inside default firebase bucket.
    storageRef.put(file).on('state_changed',(snap)=>{
        let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
        setProgress(percentage)
    },(err)=>{
        setError(err)
    },async()=>{
        const url=await storageRef.getDownloadURL();
        setUrl(url);
    })//state change happens multiple times during upload
},[file]) //the fxn inside useEffect fires every time the dependency array changes.
return {progress, url, error}
}

export default useStorage;

