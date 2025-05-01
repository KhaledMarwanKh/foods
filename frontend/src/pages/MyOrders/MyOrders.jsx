// import React, { useContext, useState } from 'react'
// import "./MyOrders.css"
// import {assets} from "../../assets/assets.js"
// const MyOrders = () => {
//     const {url, token}= useContext(StoreContext);
//     const [data, setData]= useState([]);

//     const fetchOrders= async () => {
//         const respone= await axios.post(url+"/api/order/userorders", {}, {headers:{token}});
//         setData(respone.data.data);

        
//     }

//   return (
//     <div className='my-orders'>
//         <h2>طلباتك</h2>
//         <div className="container">
//             {data.map((order, index)=>{
//                 return (
//                     <div key={index} className="my-orders-order">
//                         <img src={assets.parcel_icon} alt="" />
//                         <p>{order.items.map((item, index)=>{
//                             if(index ===order.items.lenght-1)
//                             {
//                                 return item.name+" x " +item.quantity
//                             }
//                             else{
//                                 return item.name+" x " +item.quantity+","
//                             }
//                         })}</p>
//                         <p>{order.amount} ل.س</p>
//                         <p>Item: {order.items.length}</p>
//                         <p><span>&#x25cf;</span> <b>{order.status}</b></p>

//                         <button onClick={fetchOrders}>احجز طلباتك</button>


//                     </div>
//                 )

//             })}
//         </div>
      
//     </div>
//   )
// }

// export default MyOrders








import React, { useContext, useState } from 'react';
import './MyOrders.css';
import { assets } from "../../assets/assets.js";
// import { StoreContextProvider } from '../../context/StoreContext';
import { StoreContext } from '../../context/StoreContext';


import axios from 'axios';

const MyOrders = () => {
    const { url, token } = useContext(StoreContextProvider);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        if (!token) {
            alert("يرجى تسجيل الدخول أولاً");
            return;
        }

        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);
    };

    return (
        <div className='my-orders'>
            <h2>طلباتك</h2>
            <div className="container">
                {data.map((order, index) => (
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item, index) => {
                            return index === order.items.length - 1 ? `${item.name} x ${item.quantity}` : `${item.name} x ${item.quantity}, `;
                        })}</p>
                        <p>{order.amount} ل.س</p>
                        <p>Item: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchOrders}>احجز طلباتك</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;

