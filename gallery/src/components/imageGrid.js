import React from "react";
import useFirestore from "../customHooks/useFirestore";
const ImageGrid = ()=>{
    const {docs}=useFirestore('images');//'images' is the name of the collection
    return(
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <div className="imag-wrap" key={doc.id}>
                    <img src={doc.url} />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;