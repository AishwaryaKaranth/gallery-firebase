import React from "react";
import {useState, useEffect} from "react";
import {projectFirestore} from "../firebase/firebase_config";

const useFirestore=(collection)=>{
    const [docs, setDocs]=useState([]);
    useEffect(()=>{
        const unsub=projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let documents=[];//will have id and url properties from firestore
            snap.forEach(doc => {
                documents.push({...doc.data(), id:doc.id})
            });
            setDocs(documents);
        })//iterates through all the collections in firestore
        return ()=>unsub();
    },[collection])
    return {docs}
}

export default useFirestore;