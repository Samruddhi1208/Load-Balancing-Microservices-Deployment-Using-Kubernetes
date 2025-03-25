// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   // Sample Data (Replace with API fetch later)
//   const [trending] = useState([
//     { id: 1, name: "Smartphone X", price: 499, image: "https://via.placeholder.com/150" },
//     { id: 2, name: "Gaming Laptop", price: 1199, image: "https://via.placeholder.com/150" },
//     { id: 3, name: "Wireless Headphones", price: 199, image: "https://via.placeholder.com/150" },
//   ]);

//   const [deals] = useState([
//     { id: 4, name: "4K Smart TV", price: 699, discount: "20%", image: "https://via.placeholder.com/150" },
//     { id: 5, name: "Bluetooth Speaker", price: 99, discount: "15%", image: "https://via.placeholder.com/150" },
//   ]);

//   const [offers] = useState([
//     { id: 6, name: "Buy 1 Get 1 Free - Sneakers", image: "https://via.placeholder.com/150" },
//     { id: 7, name: "50% Off on Smartwatches", image: "https://via.placeholder.com/150" },
//   ]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Welcome to Our Store</h2>

//       {/* Trending Items Section */}
//       <h3>🔥 Trending Items</h3>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {trending.map((product) => (
//           <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
//             <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
//             <h4>{product.name}</h4>
//             <p>${product.price}</p>
//             <Link to={`/product/${product.id}`}>View Details</Link>
//           </div>
//         ))}
//       </div>

//       {/* Deals & Discounts Section */}
//       <h3>⚡ Deals & Discounts</h3>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {deals.map((product) => (
//           <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center", background: "#fffae5" }}>
//             <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
//             <h4>{product.name}</h4>
//             <p><b>Discount: {product.discount}</b></p>
//             <p><s>${product.price + 100}</s> <b>${product.price}</b></p>
//             <Link to={`/product/${product.id}`}>View Deal</Link>
//           </div>
//         ))}
//       </div>

//       {/* Special Offers Section */}
//       <h3>🎉 Special Offers</h3>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {offers.map((offer, index) => (
//           <div key={index} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center", background: "#e6f7ff" }}>
//             <img src={offer.image} alt={offer.name} style={{ width: "100px", height: "100px" }} />
//             <h4>{offer.name}</h4>
//             <Link to="/offers">View Offer</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

