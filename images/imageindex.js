
import React from "react";
import image1 from './image1.jpg';
let listImages = {};

let images = () =>{
   
    let path = '';
    for(let i = 1; i< 8; i++){
        path = `./image${i}.jpg`;
        listImages[`image${i}`] = require(`./image${i}.jpg`).default
    }
    
    
}
images();
export default listImages;