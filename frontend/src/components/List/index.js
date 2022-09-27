import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = ({ token }) => {
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

        console.log(result);
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
              <h1 onClick={() => navigate("/product")}>{elem.typeFood}</h1>
              <p>{elem.img}</p>
            </>
          );
        })}
    </>
  );
};
export default List;
