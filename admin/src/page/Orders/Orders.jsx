// import React from 'react'
// import './Orders.css'
// import { useState } from 'react'
// import { toast } from 'react-toastify'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { assets } from '../../assets/assets.js'

// const Orders = ({ url }) => {
//   const [Orders, setOrders] = useState([]);
//   const fetchAllOrders = async () => {
//     const response = await axios.get(url + "/api/order/list");
//     if (response.data.success) {
//       setOrders(response.data.data);
//       console.log(response.data.data);
//     }
//     else {
//       toast.error("error")
//     }
//   }
//   const statusHandler = async (event, orderId) => {
// const response= await axios.post(url+"/api/order/status",{
//   orderId,
//   status:event.target.value,
// })
//   if (response.data.success) {
//     await fetchAllOrders();
    
//   }
    
//   }

//   useEffect(() => {
//     fetchAllOrders();
//     log
//   }, [])
//   return (
//     <div className='order add'>
//       <h3>
//         صفحة الطلب
//       </h3>
//       <div className="order-list">
//         {Orders.map((order, index) => (
//           <div key={index} className="order-item">
//             <img src={assets.parcel_icon} alt="" />
//             <div className="">
//               <p className='order-item-food'>
//                 {order.items.map((item, index) => {
//                   if (index === order.items.length - 1) {
//                     return item.name + " x " + item.quantity
//                   }
//                   else {
//                     return item.name + " x " + item.quantity + ", "
//                   }
//                 })}
//               </p>
//               <p className='order-item-name'>
//                 {order.address.firstName + " " + order.address.lastName}
//               </p>
//               <div className="order-item-address">
//                 <p>
//                   {order.address.street}
//                 </p>
//                 <p>
//                   {order.address.city + ", " + order.address.state + ", " + order.address.country + ", "}
//                 </p>
//                 {/* + order.address.zipcode} */}
//               </div>
//               <p className='order-item-phone'> {order.address.phone}

//               </p>

//             </div>
//             <p>منتجات: {order.items.length}</p>
//             <p>{order.amount} ل.س</p>
//             <select onChange={(event) => {
//               statusHandler(event, order._id)
//             }} value={order.status}>
//               <option value="Food Processing">جارٍ تجهيز الطعام</option>
//               <option value="Out for delivery">في طريق التوصيل</option>
//               <option value="Delivered">تم التوصيل</option>
//             </select>

//           </div>
//         ))}
//       </div>
//     </div >
//   );
// }


// export default Orders;


import React from 'react'
import './Orders.css'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets.js'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("فشل في جلب الطلبات");
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء جلب الطلبات");
      console.error(error);
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء تحديث الحالة");
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>صفحة الطلب</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, i) =>
                  i === order.items.length - 1
                    ? item.name + " x " + item.quantity
                    : item.name + " x " + item.quantity + ", "
                )}
              </p>
              <p className='order-item-name'>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>منتجات: {order.items.length}</p>
            <p>{order.amount} ل.س</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="Food Processing">جارٍ تجهيز الطعام</option>
              <option value="Out for delivery">في طريق التوصيل</option>
              <option value="Delivered">تم التوصيل</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
