import axios from "axios";
import React, { useState, useEffect } from "react";

function Calculator() {
  const [cheeses, setCheeses] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [weight, setWeight] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cheese data
  useEffect(() => {
    axios
      .get("http://localhost:5001/")
      .then((response) => {
        setCheeses(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleCheeseChange = (e) => {
    const cheeseId = e.target.value;
    const cheese = cheeses.find((c) => c.id === parseInt(cheeseId));
    setSelectedCheese(cheese);
    setTotalPrice(null); // Reset total price when a new cheese is selected
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculatePrice = () => {
    if (selectedCheese && weight) {
      const price = (selectedCheese.pricePerKilo * weight).toFixed(2);
      setTotalPrice(price);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-6">
      <h1 className="text-xl font-bold">Cheese Price Calculator</h1>

      {/* Cheese selection dropdown */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Select Cheese</span>
        </div>
        <select
          className="select select-bordered"
          onChange={handleCheeseChange}
        >
          <option value="">--Select Cheese--</option>
          {cheeses.map((cheese) => (
            <option key={cheese.id} value={cheese.id}>
              {cheese.name}
            </option>
          ))}
        </select>
      </label>

      {/* Weight input field */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Enter Weight (kg)</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs"
          type="number"
          value={weight}
          onChange={handleWeightChange}
          placeholder="Weight in kg"
        />
      </label>

      {/* Calculate button */}
      <button className="btn btn-primary mt-2" onClick={calculatePrice}>
        Calculate Price
      </button>
      {/* Display total price */}
      {totalPrice !== null && (
        <div>
          <h2 className="font-bold">Total Price: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default Calculator;
