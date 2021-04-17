import React from "react";
import {useState, useEffect} from "react";
import {projectStorage} from "../components/firebase_config.js";

const useStorage=(file)=>{
    const [progress, setProgress]=useState(0);
    const [error, setError]=useState(null);
    const [url, setUrl]=useState(null);
}
