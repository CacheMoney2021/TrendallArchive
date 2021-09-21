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
        <div className="wrapper">
            <ul>
                {Data.map((item) => (
                    <li>
                        <article key={item.shape_id}> {/*not sure if this is necessary*/}
                            <div>
                                <li>
                                    <h2>{item.shapeName}</h2>
                                </li>
                            </div>
                        </article>

                    </li>
                ))}
            </ul>                
        </div>
    );
}

export default ShapeList;

