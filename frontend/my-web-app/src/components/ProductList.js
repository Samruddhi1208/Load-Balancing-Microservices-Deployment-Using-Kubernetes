import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";  

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/products?category=${category}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, [category]);




const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };


  return (
    <div className="product-container">
      <h2>{category.toUpperCase()}</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
             <button onClick={() => handleAddToCart(product.name)} className="add-to-cart-btn">
                Add to Cart
              </button>
              

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
