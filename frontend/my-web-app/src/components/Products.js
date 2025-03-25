// import React, { useEffect, useState } from "react";
// import api from "../api"; // Import api object
// import { Link } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     api.getAllProducts() // Use api.getAllProducts instead of getAllProducts()
//       .then(setProducts)
//       .catch((err) => {
//         console.error("❌ Error fetching products:", err);
//         setError("Failed to load products. Please try again later.");
//       });
//   }, []);

//   return (
//     <div>
//       <h2>All Products</h2>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <div className="product-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className="product-card">
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//               <Link to={`/product/${product.id}`}>View</Link>
//             </div>
//           ))
//         ) : (
//           !error && <p>Loading products...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;
