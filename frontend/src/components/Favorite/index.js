import React from 'react'

const Favorite = ({favorite}) => {
    console.log(favorite)
  return (
    <>
    <div>Favorite</div>
   <p>{favorite.img}</p>
   <p>{favorite.nameFood}</p>
   <p>{favorite.avarage}</p>
   <p>{favorite.Ingredients}</p>
   <p>{favorite.Method}</p>


    </>
  )
}

export default Favorite