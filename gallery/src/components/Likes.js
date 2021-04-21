import React from "react";
import {useState} from "react";

const Likes=()=>{
    const [likes, setLikes]=useState(0);
    return(
        <div>
            <button onClick={setLikes(likes+1)}>❤</button>
        </div>
    )
}