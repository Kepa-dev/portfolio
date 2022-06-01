import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './photo.css'

const Photo = () => {
    let { id } = useParams()
    let [photoId, setPhotoId] = useState(id);
  
    
    
   
   
    let changephoto = (id) => {
     
       
        switch (id) {
           case '-':
               setPhotoId((photoId-1 == 0)? 7 : photoId-1)
               break;
            case '+':
                setPhotoId((Number(photoId)+1 == 8)? 1 : Number(photoId)+1)
                break;
        }
       
    };
    return (
        <div className="w-100 mt-2 ">

            <Link to="/gallery"><button onClick={changephoto.bind(this, '-')} type="button" class=" m-2 btn btn-success">
            <i class="bi bi-house"></i> Powrót
            </button>
            </Link>
            <div className="w-100 d-flex justify-content-center">
                <div className="btn">
                    <button onClick={changephoto.bind(this, '-')}  class="btn btn-outline-success">
                    <i class="bi bi-caret-left"></i> Poprzedni
                    </button>
                </div>
                <div className="singlephoto w-75 justify-content-center">
                    <img className="singlephoto" src={`/images/image${photoId}.jpg`} />
                </div>
                <div className="btn">
                    <button onClick={changephoto.bind(this, '+')}  class="btn btn-outline-success">
                    Następny <i class="bi bi-caret-right"></i> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Photo


