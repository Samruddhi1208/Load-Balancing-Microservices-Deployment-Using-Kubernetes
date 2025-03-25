// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     const confirmLogout = window.confirm("Are you sure you want to log out?");
//     if (confirmLogout) {
//       alert("Logged out successfully!");
//       navigate("/login"); 
//     }
//   };

//   return (
//     <div>
//       <Navbar onLogout={handleLogout} />
//       <h1>Welcome to ShopEase</h1>
//     </div>
//   );
// };

// export default Home;







import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";  // Add CSS for styling

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
   axios
      .get("http://127.0.0.1:5000/popular-products")
      .then((response) => {
        console.log("API Response:", response.data);
        setProducts(response.data);
      })
      
      .catch((error) => console.error("Error fetching products:", error));
  }, []);


  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      alert("Logged out successfully!");
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div className="content">
        <h1>Welcome to ShopEase</h1>
        <h2>Popular Products</h2>
        {/* <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image_url} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div> */}


        <div className="product-grid">
  {products.map((product) => (
    <div key={product.id} className="product-card">  {/* ✅ Use product.id as key */}
      <img src={product.image_url} alt={product.name} />  {/* ✅ Proper property names */}
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  ))}
</div>


      </div>
    </div>
  );
};

export default Home;
