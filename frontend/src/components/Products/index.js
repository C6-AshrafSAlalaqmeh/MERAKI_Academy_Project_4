import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.css'


const Products = ({setFavorite,titleList,setProductDetalis,productDetalis,listidOriginal ,setShowCreateProduct,ProductItem,setProducts})=>{
  const [updateTitle, setUpdateTitle] = useState('')
  const [avarage, setAvarage] = useState('')
  const [desc, setDesc] = useState('')
  const [showInputUpdate, setShowInputUpdate] = useState(false)

  setShowCreateProduct(true)
    
   
    const navigate = useNavigate();
   
    const getProduct =()=>{
        axios.get('http://localhost:5000/product')
        .then((result)=>{
          setProducts(result.data.product)
          
        })
        .catch((err)=>{
         console.log(err)
        })
    }
 useEffect(()=>{
    getProduct()
 },[ProductItem])


 const buttonUpdate = (id)=>{
  axios.put(`http://localhost:5000/product/${id}`,{
    nameFood : updateTitle ,
    avarage : avarage ,
    short_desc : desc
  })
  .then((result)=>{
    
     getProduct()

    
  })
  .catch((err)=>{
   console.log(err)
  })
 }


 const buttonDelete =(id)=>{
  axios.delete(`http://localhost:5000/product/${id}`)
  .then((result)=>{
    const deleteitem = ProductItem.filter((elem)=>{
      return id != elem._id
    })
  })
  .catch((err)=>{
    console.log(err)
  })
  
 }




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
                <div className="titAndAvarageAnddesc">
                <p className="ptit" onClick={()=>{ navigate('/detalis') ;setShowCreateProduct(false);setProductDetalis(elem) }}>{elem.nameFood}</p>
                <p className="p">{elem.avarage}</p>
                <p className="p"> {elem.short_desc}</p>
                </div>
                <div className="inputUpdate">
                  <input placeholder="Title" onChange={(e)=>{setUpdateTitle(e.target.value)}}/>
                  <input placeholder="avarege" onChange={(e)=>{setAvarage(e.target.value)}}/>
                  <input placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}}/>
                </div>
                <div className="buttonUpdateAndDelete">
                  <button onClick={()=>{buttonUpdate(elem._id)}}> Update </button>
                  <button onClick={()=>{buttonDelete(elem._id)}}> Delete</button>
                </div>
                <div>
                  <button onClick={()=>{ setFavorite(elem)}}>Favorite </button>
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