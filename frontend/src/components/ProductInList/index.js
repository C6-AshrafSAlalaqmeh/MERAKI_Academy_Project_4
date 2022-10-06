import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import Pagination from '../Pagination';
import './style.css'


const ProductInList = () => {
 
    const [productList, setProductList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)
  
    const getProduct = () => {
        axios
          .get("http://localhost:5000/product")
          .then((result) => {
            setProductList(result.data.product);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        
        getProduct();
        
      }, []);
    

   
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost)
         const paginate = (pageNumber)=>{
           setCurrentPage(pageNumber)
         }

     
  return (
    <>
      
     
      
      <div className="productsList">
        {currentPosts.length &&
          currentPosts.map((elem) => {
          
            const stars = {
              size: 25,
              value: elem.avarage,
              edit: false
            };
              
            return (
                <>
                <div className="itemProductList">
                  <div className="imgProductlist">
                    <img className="pimglsist" src={`${elem.img}`} />
                  </div>
                  <div className="titAndAvarage">
                    <p
                      className="ptitlist" >
                      {elem.nameFood}
                    </p>
                  {/* {typeFood} */}
                  
                   <p className="ptypefood">{elem.listId.typeFood}</p>
                    <p className="pava"> 
                     <ReactStars {...stars} />
                     </p>    
                    
                  
                  </div>

                  </div>
                  </>
            )
                 
                })}
                 </div>
                
                 
       
<Pagination postsPerPage={postsPerPage} totalProduct={productList.length} paginate={paginate} />

</>

    
  )
}

export default ProductInList