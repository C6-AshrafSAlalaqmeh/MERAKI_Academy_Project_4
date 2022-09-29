import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const Favorite = ({userId,favorite,token}) => {
 const [favoriteItem, setFavoriteItem] = useState([])


const getFavorite =()=>{
  axios.get('http://localhost:5000/favorite')
  .then((result)=>{
   console.log(result.data.result)
   setFavoriteItem(result.data.result)

  })
  .catch((err)=>{
  console.log(err);
  })
}
 useEffect(()=>{
  getFavorite()
 },[])

//  onClick={() => {
//   navigate("/detalis");
//   setTitleProduct(elem.nameFood);
//   setShowCreateProduct(false);
//   setProductDetalis(elem);
// }}

  const deleteItem=(id)=>{
    console.log("ddd")
    axios.delete(`http://localhost:5000/favorite/${id}`)
    .then((result)=>{
      console.log("zzz");
      const deleteItem = favoriteItem.filter((elemnt)=>{
      // console.log(elemnt._id)
        return id != elemnt._id 
      })
      console.log(deleteItem);
      setFavoriteItem(deleteItem)
    })
    .catch((err)=>{
  console.log(err);
    })
  }



  return (
    <div className='contanirProduct'>
  {favoriteItem.length && favoriteItem.map((elem)=>{
    return (
      <div className='itemFavorite'>
      <img className='imgFavorite' src={`${elem.itemid.img}`}/>
      <div className='titAndAvarageAnddesc' >
      <p className="ptit"> {elem.itemid.nameFood}</p>
      <p className="pava"> {elem.itemid.avarage}</p>
      <p className="p"> {elem.itemid.short_desc}</p>
     <div className='divbuttonFavorite'>
     <button className='buttondeleteFavorite' onClick={()=>{deleteItem(elem._id)}} > Delete Favorite </button>
     </div>
      </div>
      
      </div>
    )
  })}

    </div>
  )
}

export default Favorite