// import React, { useEffect, useState } from "react";
// import api from "../api";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     api.getCartItems().then(setCartItems);
//   }, []);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map(item => (
//           <div key={item.id} className="cart-item">
//             <h3>{item.name}</h3>
//             <p>${item.price}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;



