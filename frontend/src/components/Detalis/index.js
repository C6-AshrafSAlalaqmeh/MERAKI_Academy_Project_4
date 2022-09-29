import { useEffect, useState } from "react"
import './style.css'

const Detalis = ({productDetalis,titleProduct})=>{
   console.log(productDetalis)

   
    return(
    <>
    <h1>{`${titleProduct}`}</h1>
   
       <div className="itemDetalis">
            <p>{productDetalis.nameFood}</p>
            <p>{productDetalis.img}</p>
            <p>{productDetalis.avarage}</p>
            <p>{productDetalis.Ingredients}</p>
            <p>{productDetalis.Method}</p>
            
       </div>   
           
        
    
    
    
    </>
   )    
}

export default Detalis
