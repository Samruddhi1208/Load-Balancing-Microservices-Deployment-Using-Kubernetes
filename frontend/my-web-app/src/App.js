// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Home from "./pages/Home";
// // import Cart from "./pages/Cart";
// // import Navbar from "./components/Navbar";

// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
        
// //         <Route path="/cart" element={<Cart />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;




// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import api from "./api";

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     api.getUser().then(setUser).catch(() => {});
//   }, []);

//   const logout = () => {
//     api.logout();
//     setUser(null);
//   };

//   return (
//     <>
//       <Navbar user={user} logout={logout} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login setUser={setUser} />} />
//         <Route path="/signup" element={<Signup setUser={setUser} />} />
//       </Routes>
//     </>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
         <Route path="/products/:category" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
