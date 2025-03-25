// const API_URL = "http://127.0.0.1:5000"; // Flask backend URL

// const api = {
//   getPopularProducts: async () => {
//     try {
//       const response = await fetch(`${API_URL}/popular`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch popular products");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching popular products:", error);
//       return [];
//     }
//   },

//    login: async (email, password) => {
//     try {
//       const response = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!response.ok) {
//         throw new Error("Login failed");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error logging in:", error);
//       return null;
//     }
//   },

  

//   getUser: async (userId) => {
//     try {
//       const response = await fetch(`${API_URL}/user/${userId}`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch user details");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       return null;
//     }
//   },

//   getAllProducts: async () => {
//     try {
//       const response = await fetch(`${API_URL}/products`);
//       if (!response.ok) throw new Error("Failed to fetch products");
//       return await response.json();
//     } catch (error) {
//       console.error("❌ Error fetching products:", error);
//       return [];
//     }
//   },

// };

// export default api;





const API_URL = "http://127.0.0.1:5000";

const api = {
  signup: async (email, password) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.ok ? await response.json() : null;
  },

  login: async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.ok ? await response.json() : null;
  },

  getPopularProducts: async () => {
    const response = await fetch(`${API_URL}/popular`);
    return response.ok ? await response.json() : [];
  },
};

export default api;
