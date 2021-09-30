import React, { useEffect,useState } from "react";
import axios from 'axios';
import "../page_elements/SearchResults.css";

//both search with drop down and advanced search are linked, just need to pass data through URL. 
const ShapeList = () => {
    const [Data, setData]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/getshape/')
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
  },[])

    return (
        <div>
                {item.shapeName}           
        </div>
    );
}

export default ShapeList;

