import React from "react";
import {useState, useEffect} from "react";
import {projectStorage, projectFirestore, timestamp} from "../firebase/firebase_config.js";

const useStorage=(file)=>{
    const [progress, setProgress]=useState(0);
    const [error, setError]=useState(null);
    const [url, setUrl]=useState(null); //url here is the image url and this will be stored is firebase


useEffect(()=>{
    const storageRef=projectStorage.ref(file.name)//this references a file inside default firebase bucket.
    const collectionRef=projectFirestore.collection('images');
    
    storageRef.put(file).on('state_changed',(snap)=>{
        let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
        setProgress(percentage)
    },(err)=>{
        setError(err)
    },async()=>{
        const url=await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({url, createdAt})//creaatedAt is the timestamp when the image is uploaded. This is added in the firebase_config file
        setUrl(url);
    })//state change happens multiple times during upload
},[file]) //the fxn inside useEffect fires every time the dependency array changes.
return {progress, url, error}
}

export default useStorage;

