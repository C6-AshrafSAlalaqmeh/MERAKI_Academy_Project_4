import React, { useEffect, useState } from 'react'
import './style.css'


const Pagination = ({postsPerPage ,totalProductitem , paginate}) => {
 const pageNumbers = []
const [pageNumber, setPageNumber] = useState([])


//  useEffect(()=>{
   
    
    for(let i= 1; i<= Math.floor(totalProductitem / postsPerPage); i++){
      
        pageNumbers.push(i)
     }

//  }, [])

 
    return (
    <div >
    <div>Pagination</div>
    <div className='pagenation'>
  {pageNumbers.map((number)=>{
return (

 
  <p className='count' onClick={()=>paginate(number)} href='#'>{number}</p>
  




)
    

  })}
 

 </div>



    </div>
  )
}

export default Pagination