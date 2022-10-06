import React, { useEffect, useState } from 'react'

import './style.css'


const Pagination = ({postsPerPage ,totalProduct , paginate}) => {
 const pageNumbers = []




    
    for(let i= 1; i<= Math.ceil(totalProduct / postsPerPage); i++){
      
        pageNumbers.push(i)
       
     }
     

 
    return (
    <div >
   
    <div className='pagenation'>
  {pageNumbers.map((number)=>{
return (

 
  <p className='count' onClick={()=>paginate(number)} >{number}</p>
  




)
    

  })}
 

 </div>



    </div>
  )
}

export default Pagination