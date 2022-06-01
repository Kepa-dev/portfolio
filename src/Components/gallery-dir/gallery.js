
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Gallery = () => {
    
    let galleryphoto = [];
    let styleimg
    let navigate = useNavigate();
    
    for (let i = 1; i < 8; i++) {
        styleimg = {
            backgroundImage: `url(images/image${i}.jpg)`,
            backgroundSize: 'cover',
            width: '14rem',
            height: '250px',
            margin: 'auto'
        }
        galleryphoto.push(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2" >
                <div role='button' onClick={() => { navigate(`/gallery/photo/${i}`) }}
                    className="mt-3 shadow card rounded  border-dark border-2" style={styleimg}>

                </div>

            </div>
        )
    }




    
   
    return (
        <div className="row-100 d-flex flex-wrap">
            {galleryphoto}
        </div>
    )
}


export default Gallery