import { useEffect, useState } from "react"
import './style.css'

const Detalis = ({productDetalis,titleProduct})=>{
   console.log(productDetalis)

   
    return(
    <>
    <h1>{`${titleProduct}`}</h1>
   <div className="contanirDetalis">
       <div className="itemDetalis">
           <div className="divimgDetalis">
           <img className="imgDetalis" src={`${productDetalis.img}`}/>
           </div>
           <div className="titAnaavaDetalis">
            <p>{productDetalis.nameFood}</p>  
            <p className="avarageDetalis">{productDetalis.avarage}</p>
           <div className="prepAndCook">
            <p>Prep : {productDetalis.Prep} minutes</p>
            <p>Cook : {productDetalis.Cook} minutes</p>
            </div>
            </div>
            <div className="stepsAndMethod">

            <p> Ingredients: <p className="Ingredients">{productDetalis.Ingredients}</p></p>
            <p>Method : <p className="Ingredients">{productDetalis.Method}</p></p>
            </div>
       </div>   
       </div>   
        
    
    
    
    </>
   )    
}

export default Detalis
