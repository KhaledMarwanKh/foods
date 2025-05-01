import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems, setCartItems]=useState({});
    const url = "http://localhost:4000";
    const [token, setToken]=useState("")
    const [food_list, setFoodList]=useState([])
    const addToCart=async(itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1
            }))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId}, {headers:{token}});

        }
    }
    const removeFormCart=async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId}, {headers:{token}}) 
        }
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+= itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const fetchFoodList=async()=>{
        const response= await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }
    const loadCartData=async (token) => {
        const response= await axios.post(url+"/api/cart/get", {}, {headers:{token}});
        setCartItems(response.data.cartData);   
    }
    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])


    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFormCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    } 
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;






// import { createContext, useEffect, useState } from "react";
// import axios from 'axios';

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const url = "http://localhost:4000";
//   const [token, setToken] = useState("");
//   const [food_list, setFoodList] = useState([]);

//   // ✅ 1. تعديل طريقة إرسال التوكن في الهيدر إلى Authorization
//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }

//     if (token) {
//       await axios.post(url + "/api/cart/add", { itemId }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }
//   };

//   // ✅ 2. تعديل نفس الشيء هنا
//   const removeFormCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if (token) {
//       await axios.post(url + "/api/cart/remove", { itemId }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         totalAmount += itemInfo?.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     const response = await axios.get(url + "/api/food/list");
//     setFoodList(response.data.data);
//   };

//   // ✅ 3. هنا أيضًا نرسل التوكن في Authorization
//   const loadCartData = async (token) => {
//     const response = await axios.post(url + "/api/cart/get", {}, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     setCartItems(response.data.cartData);
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();

//       const localToken = localStorage.getItem("token");
//       if (localToken) {
//         setToken(localToken);
//         await loadCartData(localToken);
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFormCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;







// import { createContext, useEffect, useState } from "react";
// import axios from 'axios';

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [token, setToken] = useState("");
//   const [food_list, setFoodList] = useState([]);
//   const url = "http://localhost:4000";

//   const addToCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1
//     }));

//     if (token) {
//       try {
//         await axios.post(`${url}/api/cart/add`, { itemId }, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//       } catch (err) {
//         console.error("❌ Error adding to cart:", err.response?.data || err.message);
//       }
//     }
//   };

//   const removeFormCart = async (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] - 1
//     }));

//     if (token) {
//       try {
//         await axios.post(`${url}/api/cart/remove`, { itemId }, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//       } catch (err) {
//         console.error("❌ Error removing from cart:", err.response?.data || err.message);
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         totalAmount += itemInfo?.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`);
//       setFoodList(response.data.data);
//     } catch (err) {
//       console.error("❌ Error fetching food list:", err.response?.data || err.message);
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       const response = await axios.post(`${url}/api/cart/get`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCartItems(response.data.cartData);
//     } catch (err) {
//       console.error("❌ Failed to load cart data:", err.response?.data || err.message);
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();

//       const localToken = localStorage.getItem("token");
//       console.log("🔐 Loaded token:", localToken);

//       if (localToken) {
//         setToken(localToken);
//         await loadCartData(localToken);
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFormCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;






// // StoreContext.jsx
// import { createContext, useEffect, useState } from "react";
// import axios from 'axios';

// const StoreContext = createContext(null);

// const StoreContextProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState({});
//     const url = "http://localhost:4000";
//     const [token, setToken] = useState("");
//     const [food_list, setFoodList] = useState([]);

//     const addToCart = async (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         }
//         if (token) {
//             await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//         }
//     };

//     const removeFormCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if (token) {
//             await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//         }
//     };

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = food_list.find((product) => product._id === item);
//                 if (itemInfo) {
//                     totalAmount += itemInfo.price * cartItems[item];
//                 }
//             }
//         }
//         return totalAmount;
//     };

//     const fetchFoodList = async () => {
//         const response = await axios.get(url + "/api/food/list");
//         setFoodList(response.data.data);
//     };

//     const loadCartData = async (token) => {
//         const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
//         setCartItems(response.data.cartData);
//     };

//     useEffect(() => {
//         async function loadData() {
//             await fetchFoodList();
//             const localToken = localStorage.getItem("token");
//             if (localToken) {
//                 setToken(localToken);
//                 await loadCartData(localToken);
//             }
//         }
//         loadData();
//     }, []);

//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFormCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {children}
//         </StoreContext.Provider>
//     );
// };

// export { StoreContext, StoreContextProvider };













