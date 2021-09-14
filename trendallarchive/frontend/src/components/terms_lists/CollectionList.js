import React, { useEffect,useState } from "react";
import axios from 'axios';
import "./SearchResults.css";

//both search with drop down and advanced search are linked, just need to pass data through URL. 
const CollectionList = () => {
    const [Data, setData]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/getcollection/')
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
                        <article key={item.collection_id}> {/*not sure if this is necessary*/}
                            <div>
                                <li>
                                    <h2>{item.collectionName}</h2>
                                </li>
                            </div>
                        </article>

                    </li>
                ))}
            </ul>                
        </div>
    );
}

export default CollectionList;

