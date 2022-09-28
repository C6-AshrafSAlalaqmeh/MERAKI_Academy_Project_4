import axios from "axios"
import { useEffect, useState } from "react"


const Detalis = ({productDetalis})=>{
   console.log(productDetalis)

   
    return(
    <>
    <h1>Detalis</h1>
   
       
            <p>{productDetalis.nameFood}</p>
            <p>{productDetalis.img}</p>
            <p>{productDetalis.avarage}</p>
            <p>{productDetalis.Ingredients}</p>
            <p>{productDetalis.Method}</p>
            
            
           
        
    
    
    
    </>
   )    
}

export default Detalis
