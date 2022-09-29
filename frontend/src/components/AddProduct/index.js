import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const AddProduct = ({message,showMessage,setShowMessage,setMessage,token}) => {
    
    const [nameFood, setnameFood] = useState('')
    const [avarage, setavarage] = useState('')
    const [img , setImag]= useState('')
    const [shortDesc, setshortDesc] = useState('')
    const [Ingredients, setIngredients] = useState('')
    const [Method, setMethod] = useState('')
    const [listId, setlistId] = useState('') 
    const [Prep, setPrep] = useState('')
    const [Cook, setCook] = useState('')

    
    useEffect(()=>{
        setShowMessage(false)
    },[])
    
    const buttonCreateProduct =()=>{
    axios.post('http://localhost:5000/product',{
        nameFood,
        avarage,
        img,
        short_desc :shortDesc,
        Prep,
        Cook,
        Ingredients,
        Method,
        listId
    },
    { 

        headers :{
            authorization : 'Bearer ' + token
        }
    }
    )
    .then((result)=>{
    
    setMessage(result.data.message)
    setShowMessage(true)
    })
    .catch((err)=>{
        console.log(listId)
  
  setMessage(err.response.data.message)
  setShowMessage(true)
    })
}
  
    return (
     <>
     <div className='contanirAddProduct'>
    <div className='divTitlecreateProduct'>
        <h2 className='TitlecreateProduct'>Add Product : </h2>
        </div>
    <div className='AllinputProduct'>
 <div className='inputProduct'>
<input type='text' placeholder='Name Food' onChange={(e)=>{setnameFood(e.target.value)}}/>
<input type='number' placeholder='Avarage' onChange={(e)=>{setavarage(e.target.value)}}/>
</div>
<div className='inputProduct'>
<input type='text' placeholder='Link Image For Food' onChange={(e)=>{setImag(e.target.value)}} />
<input type='text' placeholder='Short Description'  onChange={(e)=>{setshortDesc(e.target.value)}} />
</div>
<div className='inputProduct'>
<input type='number' placeholder='Prep'  onChange={(e)=>{setPrep(e.target.value)}} />
<input type='number' placeholder='Cook'  onChange={(e)=>{setCook(e.target.value)}} />
</div>
<div className='inputProduct'>
<input type='text' placeholder='Ingredients' onChange={(e)=>{setIngredients(e.target.value)}}/>
<input type='text' placeholder='Method' onChange={(e)=>{setMethod(e.target.value)}}/>   
</div>
<div className='Select' >
<select className='select' name='rating' onChange={(e)=>{setlistId(e.target.value) }}>

<option> Choose one from the list </option>  
 <option value="63357abd76aaa110985f6df1">family meals </option>   
 <option value='63357b3676aaa110985f6df4'>Quick cakes </option>
 <option value='63357b9476aaa110985f6df7'>under-20-minutes </option>   
 <option value='63357bf676aaa110985f6dfa'>types of breakfast </option>
</select>
</div> 
</div>
<div>
<button className='createProduct' onClick={buttonCreateProduct}>Create Product </button>
</div>
{showMessage && message }
</div>
    </>
  )
}

export default AddProduct