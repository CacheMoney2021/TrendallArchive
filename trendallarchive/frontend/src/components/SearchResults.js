import React, { useEffect,useState } from "react";
import axios from 'axios';
import "./SearchResults.css";


const SearchResults = () => {
    const [Data, setData]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/listvaseapi/')
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

{/*
<ol className="card-list">
<li>
    <h2 className="card-name">{item.vaseID}, {item.fabric}, {item.technique}</h2>
</li>
<li>
    population: <span>1,000</span>
</li>
<li>
    Region: <span>Italy</span>
</li>
<li>
    Capital: <span>Rome</span>
</li>
</ol>

*/}
