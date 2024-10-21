import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [listOfCheese, setListOfCheese] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001")
      .then((response) => {
        setListOfCheese(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="App">
      <Calculator />
      {listOfCheese.map((value) => {
        console.log(value);
        return (
          <div className="card bg-base-100 w-96 shadow-xl mt-6">
            <figure>
              <img src={`http://localhost:5001/${value.imageUrl}`} alt="Name" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{value.name}</h2>
              <p>Price per Kilo: {value.pricePerKilo}</p>
              <p>Color(s): {value.color}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
