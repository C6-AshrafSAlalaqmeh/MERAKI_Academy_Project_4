import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductInList from "../ProductInList";
import "./style.css";

const List = ({
  token,
  setListIdOriginal,
  setShoeHome,
  setTitleList,
  UserId,
  admin,
}) => {
  setShoeHome(false);
  const [lists, setList] = useState([]);

  const navigate = useNavigate();

  const getlist = () => {
    axios
      .get("http://localhost:5000/list", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        // console.log(result.data.list[0]._id);
        setList(result.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getlist();
  }, []);

  return (
    <div className="backgroundlist">
      <div className="contanirList">
        {lists.length &&
          lists.map((elem) => {
            return (
              <div className="itemList">
                <div className="titleList">
                  <h1
                    className="titlist"
                    onClick={() => {
                      setListIdOriginal(elem._id);
                      setTitleList(elem.typeFood);
                      navigate("/product");
                     
                    }}
                  >
                    {elem.typeFood}
                  </h1>
                </div>
                <img  onClick={() => {
                      setListIdOriginal(elem._id);
                      setTitleList(elem.typeFood);
                      navigate("/product");
                     
                    }} className="imagList" src={`${elem.img}`} />
              </div>
            );
          })}
      </div>
      {/* <div className='nameUser'>
      <h1> Welcome : {`${storedName}`}</h1>
      </div> */}
    
    { UserId !== admin &&  <ProductInList />}
   
</div>
   
  );
};
export default List;
