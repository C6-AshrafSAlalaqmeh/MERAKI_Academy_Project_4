import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = ({token}) => {
    
    const [nameFood, setnameFood] = useState('')
    const [avarage, setavarage] = useState('')
    const [img , setImag]= useState('')
    const [shortDesc, setshortDesc] = useState('')
    const [Ingredients, setIngredients] = useState('')
    const [Method, setMethod] = useState('')
    const [listId, setlistId] = useState('') 


    const buttonCreateProduct =()=>{
    axios.post('http://localhost:5000/product',{
        nameFood,
        avarage,
        img,
        short_desc :shortDesc,
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
    console.log(result)
    })
    .catch((err)=>{
        console.log(listId)
  console.log(err)
    })
}
  
    return (
     <>
    <div>AddProduct</div>
<input type='text' placeholder='Name Food' onChange={(e)=>{setnameFood(e.target.value)}}/>
<input type='number' placeholder='Avarage' onChange={(e)=>{setavarage(e.target.value)}}/>
<input type='text' placeholder='Link Image For Food' onChange={(e)=>{setImag(e.target.value)}} />
<input type='text' placeholder='Short Description'  onChange={(e)=>{setshortDesc(e.target.value)}} />
<input type='text' placeholder='Ingredients' onChange={(e)=>{setIngredients(e.target.value)}}/>
<input type='text' placeholder='Method' onChange={(e)=>{setMethod(e.target.value)}}/>   
<select name='rating' onChange={(e)=>{setlistId(e.target.value) ; console.log(e) }}>

<option>select </option>  
 <option value="6330adc34ace890bc52132ff">Type Food 1 </option>   
 <option value='6330af4fe2d21343ae89a9e7'>Type Food 2 </option>
 <option value='3'>Type Food 3 </option>   
 <option value='4'>Type Food 4 </option>
</select> 
<button onClick={buttonCreateProduct}>Create Product </button>
    
    
    </>
  )
}

export default AddProduct