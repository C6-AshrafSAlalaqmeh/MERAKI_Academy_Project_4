import { useEffect, useState } from "react"
import './style.css'

const Detalis = ({productDetalis,titleProduct})=>{
   console.log(productDetalis)

   
    return(
    <>
    <h1>{`${titleProduct}`}</h1>
   <div className="contanirDetalis">
       <div className="itemDetalis">
           <div className="imgDetalis">
           <p>{productDetalis.img}</p>
           </div>
           <div>
            <p>{productDetalis.nameFood}</p>  
            <p>{productDetalis.avarage}</p>
            </div>
            <div className="stepsAndMethod">
            <p>{productDetalis.Ingredients}</p>
            <p>{productDetalis.Method}</p>
            </div>
       </div>   
       </div>   
        
    
    
    
    </>
   )    
}

export default Detalis
