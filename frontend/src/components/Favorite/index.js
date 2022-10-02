import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const Favorite = ({idFavorite,UserId,token,favorite}) => {
 const [favoriteItem, setFavoriteItem] = useState([])
console.log(UserId);

const getFavorite =()=>{

 // if(idFavorite === UserId)
  axios.get(`http://localhost:5000/favorite/${UserId}`,{
    headers :{
      authorization : 'Bearer ' + token
    }
  })

  .then((result)=>{
    setFavoriteItem(result.data.result)
    console.log(result.data.result)
   
  //  const item = favoriteItem.find((elem)=>{
    // console.log(elem.Userid);
    // console.log(elem.Userid);
    // return elem.Userid == UserId
  //})
   
  })
  .catch((err)=>{
  console.log(err);
  })
}
 useEffect(()=>{
  if(!favoriteItem.length)
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
    <div className='contanirfavorite'>
  {favoriteItem.length && favoriteItem.map((elem)=>{
    return (
      <div className='itemFavorite'>
        <div>
      <img className='imgFavorite' src={`${elem.itemid.img}`}/>
      </div>
      <div className='titAndAvarageAnddesc' >
      <p className="ptit"> {elem.itemid.nameFood}</p>
      <p className="pava"> {elem.itemid.avarage}</p>
      <p className="pfavorite"> {elem.itemid.short_desc}</p>
      </div>
      
     <div className='divbuttonFavorite'>
     <button className='buttondeleteFavorite' onClick={()=>{deleteItem(elem._id)}} > Delete Favorite </button>
     </div>
      
      
      </div>
    )
  })}

    </div>
  )
}

export default Favorite