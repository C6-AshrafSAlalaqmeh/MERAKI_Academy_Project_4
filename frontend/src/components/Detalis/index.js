import { useEffect, useState } from "react";
import "./style.css";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

const Detalis = ({
  setidFavorite,
  token,
  UserId,
  productDetalis,
  titleProduct,
  admin,
}) => {
  console.log(productDetalis);
  const stars = {
    size: 25,
    value: productDetalis.avarage,
    edit: false,
  };

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
        setidFavorite(result.data.userid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="backgroundDetalis">
      <div>
        <h1 className="tiltleDetalis">{`${titleProduct}`}</h1>
      </div>
      <div className="contanirDetalis">
        <div className="itemDetalis">
          <div className="divimgDetalis">
            <img className="imgDetalis" src={`${productDetalis.img}`} />
          </div>
          
          <div className="titAnaavaDetalis">
          <div className="titleAndbuttondetail">
            <div>
            <p className="titledetalis">{productDetalis.nameFood}</p>
            </div>
            <p className="pfavorite">
              {UserId !== admin && (
               
                  <button
                    className="favorite"
                    onClick={() => {
                      buttonAddFavorite(productDetalis._id);
                    }}
                  >
                    Add Favorite{" "}
                  </button>
                
              )}
            </p>
            </div>
            <p className="avarageDetalis">
              <ReactStars classNames="stars" {...stars} />
            </p>
            <div className="prepAndCook">
              <p className="prep">
                <span className="generalprep">
                  Prep : <span className="cookdet">{productDetalis.Prep}</span>{" "}
                  minutes
                </span>
              </p>
              <p className="cook">
                <span className="generalprep">
                  {" "}
                  Cook :<span className="cookdet">
                    {" "}
                    {productDetalis.Cook}
                  </span>{" "}
                  minutes
                </span>
              </p>
            </div>
          </div>
          <div className="stepsAndMethod">
            <p className="steps">
              {" "}
              <span className="ingdet"> Ingredients: </span>
              <p className="Ingredients">{productDetalis.Ingredients}</p>
            </p>
            <p className="meth">
              {" "}
              <span className="ingdet">Method : </span>
              <p className="Methods">{productDetalis.Method}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalis;
