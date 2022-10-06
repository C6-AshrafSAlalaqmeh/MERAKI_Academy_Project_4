import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const Favorite = ({
  setProductDetalis,
  setShowCreateProduct,
  setTitleProduct,
  UserId,
  token,
  
}) => {
  const [favoriteItem, setFavoriteItem] = useState([]);
  // console.log(UserId);

  const navigate = useNavigate();

  const getFavorite = () => {
    // if(idFavorite === UserId)
    axios
      .get(`http://localhost:5000/favorite/${UserId}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })

      .then((result) => {
        setFavoriteItem(result.data.result);
        // console.log(result.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (!favoriteItem.length) getFavorite();
  }, []);

  //  onClick={() => {
  //   navigate("/detalis");
  //   setTitleProduct(elem.nameFood);
  //   setShowCreateProduct(false);
  //   setProductDetalis(elem);
  // }}

  const deleteItem = (id) => {
    console.log("ddd");
    axios
      .delete(`http://localhost:5000/favorite/${id}`)
      .then((result) => {
        console.log("zzz");
        const deleteItem = favoriteItem.filter((elemnt) => {
          // console.log(elemnt._id)
          return id != elemnt._id;
        });
        console.log(deleteItem);
        setFavoriteItem(deleteItem);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="backgroundfavorite">
      <div className="contanirfavorite">
        {favoriteItem &&
          favoriteItem.map((elem) => {
            const stars = {
              size: 25,
              value: elem.itemid.avarage,
              edit: false,
            };
            return (
              <div className="itemFavorite">
                <div>
                  <img className="imgFavorite" src={`${elem.itemid.img}`} />
                </div>
                <div className="titAndAvarageAnddesc">
                  <p
                    className="ptitfavorite"
                    onClick={() => {
                      setTitleProduct(elem.itemid.nameFood);
                      setShowCreateProduct(false);
                      setProductDetalis(elem.itemid);
                      navigate("/detalis");
                    }}
                  >
                    {" "}
                    {elem.itemid.nameFood}
                  </p>

                  {/* <p className="pava"> {elem.itemid.avarage}</p> */}
                  <ReactStars {...stars} />
                  <p className="pfavorite"> {elem.itemid.short_desc}</p>
                </div>

                <div className="divbuttonFavorite">
                  <button
                    className="buttondeleteFavorite"
                    onClick={() => {
                      deleteItem(elem._id);
                    }}
                  >
                    {" "}
                    Delete Favorite{" "}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favorite;
