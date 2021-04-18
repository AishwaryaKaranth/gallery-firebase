import React from "react";

const Modals=({select,setSelect})=>{
    const clickHandler=(e)=>{
        setSelect(null);
    }
    return(
        <div className="backdrop" onClick={clickHandler}>
            <img src={select}/>
        </div>
    )
}

export default Modals;