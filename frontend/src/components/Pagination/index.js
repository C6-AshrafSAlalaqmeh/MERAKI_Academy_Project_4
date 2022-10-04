import React, { useEffect, useState } from 'react'
import Login from '../Login'
import './style.css'


const Pagination = ({postsPerPage ,totalProductitem , paginate}) => {
 const pageNumbers = []
const [pageNumber, setPageNumber] = useState([])


  useEffect(()=>{
   console.log(totalProductitem);
    
    for(let i= 1; i<= Math.floor(totalProductitem / postsPerPage); i++){
      
        pageNumbers.push(i)
        console.log(i)
     }
     setPageNumber(pageNumbers)
  }, [])
console.log(pageNumber)
 
    return (
    <div >
    <div>Pagination</div>
    <div className='pagenation'>
  {pageNumber.map((number)=>{
return (

 
  <p className='count' onClick={()=>paginate(number)} href='#'>{number}</p>
  




)
    

  })}
 

 </div>



    </div>
  )
}

export default Pagination