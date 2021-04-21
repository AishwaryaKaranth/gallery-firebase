import React from "react";
import {useState, useEffect} from "react";
import {projectStorage, projectFirestore, timestamp, like} from "../firebase/firebase_config.js";

const useStorage=(file)=>{
    const [progress, setProgress]=useState(0);
    const [error, setError]=useState(null);
    const [url, setUrl]=useState(null); //url here is the image url and this will be stored is firebase
    //const [like, setLike]=useState(0);

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
        //const like=projectFirestore.FieldValue.increment(1);
        collectionRef.update({
            like:projectFirestore.FieldValue.increment(1)
        });
        collectionRef.add({url, createdAt, like})//createdAt is the timestamp when the image is uploaded. This is added in the firebase_config file
        setUrl(url);
        setLike(like);
    })//state change happens multiple times during upload
},[file]) //the fxn inside useEffect fires every time the dependency array changes.
return {progress, url, error, like}
}

export default useStorage;

