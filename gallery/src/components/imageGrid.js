import React from "react";
import useFirestore from "../customHooks/useFirestore";
import {motion} from "framer-motion";

const ImageGrid = ({setSelect})=>{
    const {docs}=useFirestore('images');//'images' is the name of the collection
    return(
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <motion.div className="imag-wrap" key={doc.id} 
                layout
                whileHover={{opacity:1}}
                onClick={()=>setSelect(doc.url)}>
                    <motion.img src={doc.url} 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;