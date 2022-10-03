import React, { useEffect, useState } from 'react'

const Pagination = ({postsPerPage ,totalProductitem , paginate}) => {
 const pageNumbers = []
const [pageNumber, setPageNumber] = useState([])


//  useEffect(()=>{
    console.log(totalProductitem / postsPerPage);
    console.log(totalProductitem);
    
    for(let i= 1; i<= Math.floor(totalProductitem / postsPerPage); i++){
      console.log(i);
        pageNumbers.push(i)
     }

//  }, [])

 
    return (
    <nav>
    <div>Pagination</div>
    
  {pageNumbers.map((number)=>{
return (
<div>
 
  <a onClick={()=>paginate(number)} href='#'>{number}</a>
  




</div>)
    

  })}
 





    </nav>
  )
}

export default Pagination