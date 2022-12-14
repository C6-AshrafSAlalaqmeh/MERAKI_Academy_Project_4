import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import ReactStars from 'react-rating-stars-component';



const Products = ({
  setTitleProduct,
  UserId,
  admin,
  titleList,
  setProductDetalis,
  listidOriginal,
  setShowCreateProduct,
  ProductItem,
  setProducts,
  
  
  
 

}) => {

  const [updateTitle, setUpdateTitle] = useState("");
  const [avarage, setAvarage] = useState("");
  const [desc, setDesc] = useState("");
  
 

  
 
   

  const navigate = useNavigate();

  const getProduct = () => {
    axios
      .get("http://localhost:5000/product")
      .then((result) => {
        setProducts(result.data.product);
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setShowCreateProduct(true);
  
      getProduct();
    
  }, []);

  const buttonUpdate = (id) => {
  
    axios
      .put(`http://localhost:5000/product/${id}`, {
        nameFood: updateTitle,
        avarage: avarage,
        short_desc: desc,
      })
      .then((result) => {
      
        const newProduct = ProductItem.map((elem)=>{
          if(elem._id === id){
            console.log(result.data.nameFood)
            elem.nameFood =result.data.nameFood
            elem.avarage =result.data.avarage
            elem.short_desc = result.data.short_desc
          }
          return elem
        })
        setProducts(newProduct)
        
      })
      
      .catch((err) => {
        console.log(err);
      });
  };

  const buttonDelete = (id) => {
   console.log("delete");
    axios.delete(`http://localhost:5000/product/${id}`)  
   .then((result) => {
      console.log(result);
      const deleteitem = ProductItem.filter((elem)=>{
        return id != elem._id
      })
       setProducts(deleteitem)
    })
    .catch((err) => {
      console.log(err);
    });
  };







const [productlength, setProductlength] = useState([])






  return (
    <>
    <div className="backgroundproduct">
    <div className="contanirProduct">
      <div className="titleProduct">
        <h1 className="tit">{`${titleList}`}</h1>
      </div>
      <div className="products">
        {ProductItem.length &&
          ProductItem.map((elem) => {
           
            const stars = {
              size: 25,
              value: elem.avarage,
              edit: false
            };
           
            if (listidOriginal === elem.listId._id || listidOriginal === elem.listId) {
          
              return (
                <div className="itemProduct">
                  <div className="imgProduct">
                    <img  onClick={() => {
                        navigate("/detalis");
                        setTitleProduct(elem.nameFood);
                        setShowCreateProduct(false);
                        setProductDetalis(elem);
                      }} className="pimg" src={`${elem.img}`} />
                  </div>
                  <div className="titAndAvarageAnddesc">
                    <p
                      className="ptit"
                      onClick={() => {
                        navigate("/detalis");
                        setTitleProduct(elem.nameFood);
                        setShowCreateProduct(false);
                        setProductDetalis(elem);
                      }}
                    >
                      {elem.nameFood}
                    </p>

                    {UserId === admin && (
                 
                 <>
                 <div className="inputUpdate">
                   <input
                     placeholder="Title"
                     onChange={(e) => {
                       setUpdateTitle(e.target.value);
                     }}
                   />
                   <input
                     placeholder="avarege" type='number'
                     onChange={(e) => {
                       setAvarage(e.target.value);
                     }}
                   />
                   <input
                     placeholder="Description"
                     onChange={(e) => {
                       setDesc(e.target.value);
                     }}
                   />
                 </div>
                
                 <div className="buttonUpdateAndDelete">
                   <button
                     className="update"
                     onClick={() => buttonUpdate(elem._id)}
                   >
                     {" "}
                     Update{" "}
                   </button>
                   <button
                     className="delete"
                     onClick={() => {
                       buttonDelete(elem._id);
                     }}
                   >
                     {" "}
                     Delete
                   </button>
                 </div>
           
                 </>
               )}












                    {UserId !== admin && (
                    <p className="pava"> 
                     <ReactStars {...stars} />
                     </p> 
                    )}
                     </div>   
                    {/* <p className="pava">{elem.avarage}</p> */}
                   <div>
                    <p className="p"> {elem.short_desc}</p>
                    </div>
                </div>
              );
            }
          })}
      </div>
    
    </div>
    </div>
    </>
  );
};
export default Products;
