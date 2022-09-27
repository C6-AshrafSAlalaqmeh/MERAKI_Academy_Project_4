import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Products = ({listidOriginal ,setShowCreateProduct,ProductItem,setProducts})=>{
    setShowCreateProduct(true)
    console.log(listidOriginal)
   
    const navigate = useNavigate();
   
    const getProduct =()=>{
        axios.get('http://localhost:5000/product')
        .then((result)=>{
          console.log(result.data.product)
          setProducts(result.data.product)
          console.log(result.data.product[0].listId)
        })
        .catch((err)=>{
         console.log(err)
        })
    }
 useEffect(()=>{
    getProduct()
 },[])


    return (
        <>
        <h1>Products</h1>
        {ProductItem.length && ProductItem.map((elem)=>{
            if(listidOriginal === elem.listId){
             return (
                 <>
                <p onClick={()=>{ navigate('/detalis') ;setShowCreateProduct(false) }}>{elem.nameFood}</p>
                <p>{elem.avarage}</p>
                <p>{elem.img}</p>
                   </>
             )
            }
        })}

        </>
    )
}
export default Products