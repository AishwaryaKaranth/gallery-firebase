import React from "react";
import {motion} from "framer-motion";

const Modals=({select,setSelect})=>{
    const clickHandler=(e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelect(null);
        }
    }
    return(
        <motion.div className="backdrop" onClick={clickHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
            <motion.img src={select}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Modals;