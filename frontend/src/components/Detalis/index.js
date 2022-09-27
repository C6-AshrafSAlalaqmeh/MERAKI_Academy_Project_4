import axios from "axios"
import { useEffect, useState } from "react"


const Detalis = ()=>{
   const [productDetalis , setProductDetalis]=useState([])

const getDetalisProduct=()=>{
    axios.get('http://localhost:5000/product')
    .then((result)=>{
        console.log(result.data.product)
        setProductDetalis(result.data.product)
    })
    .catch((err)=>{

    })
}
useEffect(()=>{
    getDetalisProduct()
},[])

   
    return(
    <>
    <h1>Detalis</h1>
    {productDetalis.length && productDetalis.map((elem)=>{
        return(
            <>
            <p>{elem.nameFood}</p>
            <p>{elem.img}</p>
            <p>{elem.avarage}</p>
            <p>{elem.Ingredients}</p>
            <p>{elem.Method}</p>
            
            
            </>
        )
    }) }
    
    
    </>
   )    
}

export default Detalis
