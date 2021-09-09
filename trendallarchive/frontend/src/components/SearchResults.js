import React, { useEffect,useState } from "react";
import axios from 'axios';
import "./SearchResults.css";

//both search with drop down and advanced search are linked, just need to pass data through URL. 
const SearchResults = () => {
  const [Data, setData]=useState([])

  useEffect(() => {
<<<<<<< HEAD
    axios.get('http://127.0.0.1:8000/api/viewvase/')
        .then((response) => {
            console.log(response.data)
            setData(response.data)
=======
    axios.get('http://127.0.0.1:8000/api/searchresults/')
        .then((res) => {
            console.log(res.data)
            setData(res.data)
>>>>>>> 58053f2d6f575e0033e77989e390116f0a2fd3e2
        })
        .catch((err) => {
            console.log(err);
        })
  },[])
  
    return (
        <div className="wrapper">
            <ul className="card-grid">
                {Data.map((item) => (
                    <li>
                        <a href ={`http://127.0.0.1:8000/viewvase/?vaseID=${item.vaseID}`} text-decoration="none">
                        <article className="card" key={item.vaseID}>
                            <div className="card-image">

                                <img src={"https://trendallplates.blob.core.windows.net/images/image2.png"} alt={item.vaseID}/>
                            </div>

                            <div className="card-content">
                                <li>
                                    <h2 className="card-name">RVP nos. 1/{item.vaseID}</h2>
                                </li>
                                <li>
                                    [Current Collection, Inventory Number]
                                </li>
                            </div>
                        </article>
                        </a>

                    </li>
                ))}
            </ul>                
        </div>
    );
}

export default SearchResults;

