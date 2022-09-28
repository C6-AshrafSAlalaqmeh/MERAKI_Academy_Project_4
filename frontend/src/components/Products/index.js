import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.css'


const Products = ({titleList,setProductDetalis,productDetalis,listidOriginal ,setShowCreateProduct,ProductItem,setProducts})=>{
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
        <div className="contanirProduct">
        <div className="titleProduct">
        <h1 className="tit">{`${titleList}`}</h1>
        </div>
        <div className="products">
        {ProductItem.length && ProductItem.map((elem)=>{
           
          if(listidOriginal === elem.listId){
             
                return (
                 <div className="itemProduct">
                    <div className="imgProduct">
                <p className="p">{elem.img}</p>
                </div>
                <div>
                <p className="ptit" onClick={()=>{ navigate('/detalis') ;setShowCreateProduct(false);setProductDetalis(elem) }}>{elem.nameFood}</p>
                <p className="p">{elem.avarage}</p>
                <p className="p"> {elem.short_desc}</p>
                </div>
                   </div>
             )
            
            }
            
        })}
          </div>
        </div>
    )
}
export default Products