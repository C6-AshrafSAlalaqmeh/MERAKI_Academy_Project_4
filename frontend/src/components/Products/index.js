import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import ReactStars from 'react-rating-stars-component';
import Pagination from "../Pagination";


const Products = ({
  setTitleProduct,
  UserId,
  token,
  admin,
  setFavorite,
  titleList,
  setProductDetalis,
  productDetalis,
  listidOriginal,
  setShowCreateProduct,
  ProductItem,
  setProducts,
  setidFavorite,
  
 

}) => {

  const [updateTitle, setUpdateTitle] = useState("");
  const [avarage, setAvarage] = useState("");
  const [desc, setDesc] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(7)

 

  
 
   

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
   console.log("aaa");
    axios
      .put(`http://localhost:5000/product/${id}`, {
        nameFood: updateTitle,
        avarage: avarage,
        short_desc: desc,
      })
      .then((result) => {
       console.log("rrrr");
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ProductItem.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  



  const buttonAddFavorite = (ElemntId) => {
    
    axios
      .post(
        "http://localhost:5000/favorite",
        {
          itemid: ElemntId, //elem._id
          userid: UserId,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        console.log(result.data.userid);
        setidFavorite(result.data.userid)
      })
      .catch((err) => {
        console.log(err);
      });
  };






const [productlength, setProductlength] = useState([])


const count=[]


  return (
    <>
    <div className="backgroundproduct">
    <div className="contanirProduct">
      <div className="titleProduct">
        <h1 className="tit">{`${titleList}`}</h1>
      </div>
      <div className="products">
        {currentPosts.length &&
          currentPosts.map((elem) => {
            const stars = {
              size: 25,
              value: elem.avarage,
              edit: false
            };
            
            if (listidOriginal === elem.listId) {
             
              count.push(elem)
             
              // setProductlength(ProductItem.length)
              return (
                <div className="itemProduct">
                  <div className="imgProduct">
                    <img className="pimg" src={`${elem.img}`} />
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
                    <p className="pava"> 
                     <ReactStars {...stars} />
                     </p>    
                    {/* <p className="pava">{elem.avarage}</p> */}
                    <p className="p"> {elem.short_desc}</p>
                  </div>



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
                  
                  <div>
                    <button
                      className="favorite"
                      onClick={() => {
                        buttonAddFavorite(elem._id);
                      }} 
                    >
                      Add Favorite{" "}
                    </button>
                  </div>
                )}
                </div>
              );
            }
          })}
      </div>
    <Pagination postsPerPage={postsPerPage} totalProductitem={ProductItem.length} paginate={paginate}/>
    </div>
    </div>
    </>
  );
};
export default Products;
