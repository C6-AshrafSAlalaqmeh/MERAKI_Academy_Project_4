import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = ({ token , setListIdOriginal }) => {
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

        console.log(result.data.list[0]._id);
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
    <>
      <hi>List </hi>
      {lists.length &&
        lists.map((elem) => {
            
          return (
            <>
              <h1 onClick={() =>{ navigate("/product");setListIdOriginal(elem._id) }}>{elem.typeFood}</h1>
              <p>{elem.img}</p>
            </>
          );
        })}
    </>
  );
};
export default List;
