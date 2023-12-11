import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Api.css"

function Api() {
  const [apiData, setApiData] = useState([]);
 

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        console.log(response);
        setApiData(response.data);
      
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      
      });
  }, []);

  function handleClick(e ,data) {
    e.preventDefault()
    
  }

  return (
    <div className="wrapper">
      
     
        {
          apiData.map((data, index) => {
             return<div className="product" key={index}>
              <h3>{data.title}</h3>
              <p>price:{data.price}</p>
              <p>catagoery:{data.category}</p>
              <div className="productImage">
                <img src={data.image} alt="" />
              </div>
              <div className="button">
              <button onClick={(e) => handleClick(e,data)}>Add to cart</button>
              </div>

            </div>
          
        })}
  
          
    
    </div>
  );
}

export default Api;
