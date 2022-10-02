import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'


const List = ({ storedName,token , setListIdOriginal,setShoeHome,setTitleList }) => {
  setShoeHome(false)
  const [lists, setList] = useState([]);
  const navigate = useNavigate();

  const getlist = () => {
    axios
      .get("http://localhost:5000/list", {
        headers: {
          authorization: "Bearer " + token
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
       <div className='nameUser'>
      <h1> Welcome : {`${storedName}`}</h1>
      </div>
    <div className="contanirList">
      
      {lists.length &&
        lists.map((elem) => {
            
          return (
            <div className="itemList">
              <div className="titleList">
              <h1 onClick={() =>{ navigate("/product");setListIdOriginal(elem._id);setTitleList(elem.typeFood) }}>{elem.typeFood}</h1>
              </div>
              <img className="imagList" src={`${elem.img}`} />
            </div>
          );
        })}
    </div>
    </div>
  );
};
export default List;
