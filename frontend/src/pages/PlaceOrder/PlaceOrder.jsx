// // import React, { use, useContext, useEffect, useState } from 'react'
// // import './PlaceOrder.css'
// // import { StoreContext } from '../../context/StoreContext'

// // const PlaceOrder = () => {
// //   const {getTotalCartAmount, token, food_list, cartItems, url}=useContext(StoreContext)
// //   const {data, setData}= useState({
// //     firstName:"",
// //     lastName:"",
// //     email:"",
// //     street:"",
// //     city:"",
// //     state:"",
// //     zipcode:"",
// //     countrty:"",
// //     phone:"",

// //   })
// // const onChangeHandler=(event)=>{
// //   const name=event.target.name;
// //   const value=event.target.value;
// //   setData(data=>({...data, [name]:value}))
// // }

// // useEffect(()=>{
// //   console.log(data);
// // },[data])
// // const placeOrder= async(event)=>{event.preventDefault(); let orderItems[]; food_list.map((item)=>{if(cartItems[item._id]>0){let itemInfo=item; itemInfo["quantity"]=cartItems[item._id];
// // orderItems.push(itemInfo);}})
// // let orderData={
// //   address:data,
// // items:orderItems,
// // amount:getTotalCartAmount()+2;
// // let respose= await axios.post(url+"/api/order/place", orderData , {headers:{token}});
// // if(response.data.success){
// //   const {session_url}= response.data;
// //   window.location.replace(session_url);
// // else{
// //   alert("error");
// // }

// // }
// // const navigate=useNavigate();
// // // }
// //  }
// //   return (
// //     <form onSubmit={placeOrder} className='place-order'>
      
// //       <div className="place-order-right">
// //         <div className="cart-total">
// //           <h2>القائمة الكلية</h2>
// //           <div className="cart-total-details">
// //               <p>المجموع الجزئي</p>
// //               <p>{getTotalCartAmount()} ل.س</p>

// //             </div>
// //             <div className="cart-total-details">
// //               <p>تكلفة التوصيل</p>
// //               <p>{getTotalCartAmount()===0?0:2} ل.س</p>
// //             </div>
// //             <hr />
// //             <div className="cart-total-details">
// //               <b>المجموع</b>
// //               <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} ل.س</b>
// //             </div>
// //           <button>تابع دفع</button>
// //         </div>
// //       </div>


// //       <div className="place-order-left">
// //         <p className="title">
// //           معلومات عن التوصيل
// //         </p>
// //         <div className="multi-fields">
// //           <input required  name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='الاسم ' />
// //           <inputrequired  name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='الكنية' />
// //         </div>
// //         <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='البريد الإلكتروني' />
// //         <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='شارع' />


// //       <div className="multi-fields">
// //         <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='المدينة  ' />
// //         <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='المنطقة' />
// //       </div>
// //       <div className="multi-fields">
// //         <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='رمز' />
// //         <inputrequired  name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='الوقت الذي ترغب بها بالحصول على وجبتك' />
// //       </div>
// //       <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text"  id="" placeholder='رقم الهاتف' />
// //       </div>

// //     </form>
// //   )
// // }

// // export default PlaceOrder

















// import React, { useEffect, useState } from 'react';
// import './PlaceOrder.css';

// const PlaceOrder = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     phone: "",
//     day: "",
//     time: "",
//   });

//   // قائمة المدن والمناطق
//   const cityStateMap = {
//     حمص: ["القصور", "المهندسين", "دير بعلبة"], 
//   };

//   // تكلفة التوصيل بناءً على المنطقة
//   const deliveryCostMap = {
//     "القصور": 5,
//     "المهندسين": 5,
//     "دير بعلبة": 5,
//     // يمكنك إضافة المزيد من المناطق هنا
//   };

//   // تعيين المدينة المختارة وتحديث المناطق بناءً عليها
//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     if (name === 'city') {
//       // إذا تم تغيير المدينة، يتم مسح المنطقة الحالية
//       setData({ ...data, [name]: value, state: "" });
//     } else {
//       setData({ ...data, [name]: value });
//     }
//   };

//   // حساب تكلفة التوصيل بناءً على المنطقة
//   const getDeliveryCost = () => {
//     return deliveryCostMap[data.state] || 0;
//   };

//   return (
//     <form className='place-order'>
//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>القائمة الكلية</h2>
//           <div className="cart-total-details">
//             <p>المجموع الجزئي</p>
//             <p>0 ل.س</p>
//           </div>
//           <div className="cart-total-details">
//             <p>تكلفة التوصيل</p>
//             <p>{getDeliveryCost()} ل.س</p>
//           </div>
//           <hr />
//           <div className="cart-total-details">
//             <b>المجموع</b>
//             <b>{getDeliveryCost()} ل.س</b>
//           </div>
//           <button>تابع دفع</button>
//         </div>
//       </div>

//       <div className="place-order-left">
//         <p className="title">معلومات عن التوصيل</p>
//         <div className="multi-fields">
//           <input required   name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='الاسم ' />
//           <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='الكنية' />
//         </div>
//         <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='البريد الإلكتروني' />
//         <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='شارع' />

//         <div className="multi-fields">
//           <select required name='city' onChange={onChangeHandler} value={data.city}>
//             <option value="">اختر المدينة</option>
//             <option value="حمص">حمص</option> 
//           </select>

//           {/* عرض قائمة المناطق بناءً على المدينة المختارة */}
//           <select required name='state' onChange={onChangeHandler} value={data.state}>
//             <option value="">اختر المنطقة</option>
//             {data.city && cityStateMap[data.city]?.map((state, index) => (
//               <option key={index} value={state}>{state}</option>
//             ))}
//           </select>
//         </div>

//         <div className="multi-fields">
//           <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='رمز' />
//           <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='رقم الهاتف' />
//         </div>

//         <div className="multi-fields">
//           <select  required name="day" onChange={onChangeHandler} value={data.day}>
//             <option value="">اختر اليوم</option>
//             <option value="الاحد">الاحد</option>
//             <option value="الإثنين">الإثنين</option>
//             <option value="الثلاثاء">الثلاثاء</option>
//             <option value="الأربعاء">الأربعاء</option>
//             <option value="الخميس">الخميس</option>
//             <option value="الجمعة">الجمعة</option>
//             <option value="السبت">السبت</option>
//             {/* أضف المزيد من الأيام هنا */}
//           </select>
//           <input required  name="time" onChange={onChangeHandler} value={data.time} type="time" />
//         </div>

//         <button type="button">إرسال عبر WhatsApp</button>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


import React, { useState } from 'react';
import './PlaceOrder.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = ({ userId, cartItems, totalAmount, url }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    day: "",
    time: "",
  });

  const cityStateMap = {
    حمص: ["القصور", "المهندسين", "دير بعلبة"],
  };

  const deliveryCostMap = {
    "القصور": 5,
    "المهندسين": 5,
    "دير بعلبة": 5,
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'city') {
      setData({ ...data, city: value, state: "" });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const getDeliveryCost = () => {
    return deliveryCostMap[data.state] || 0;
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        userId,
        items: cartItems,
        amount: totalAmount + getDeliveryCost(),
        address: data,
      };

      // إرسال الطلب للسيرفر
      const res = await axios.post(`${url}/api/order/place`, orderData);

      if (res.data.success) {
        toast.success("تم إرسال الطلب بنجاح ✅");

        const message = `
🚀 طلب جديد:

👤 الاسم: ${data.firstName} ${data.lastName}
📧 البريد: ${data.email}
📞 الهاتف: ${data.phone}

📍 العنوان: ${data.street}, ${data.city}, ${data.state}, ${data.zipcode}
🕓 الوقت: ${data.day} - ${data.time}

🛒 الطلبات:
${cartItems.map(item => `- ${item.name} × ${item.quantity}`).join("\n")}

💰 السعر: ${totalAmount} ل.س
🚚 التوصيل: ${getDeliveryCost()} ل.س
📦 الإجمالي: ${totalAmount + getDeliveryCost()} ل.س
        `;

        const whatsappNumber = "0938337165"; // ← ضع رقم الواتساب هنا بدون +
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      } else {
        toast.error("فشل إرسال الطلب 😥");
      }
    } catch (error) {
      console.error(error);
      toast.error("حدث خطأ أثناء الإرسال");
    }
  };

  return (
    <form className='place-order'>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>القائمة الكلية</h2>
          <div className="cart-total-details">
            <p>المجموع الجزئي</p>
            <p>{totalAmount} ل.س</p>
          </div>
          <div className="cart-total-details">
            <p>تكلفة التوصيل</p>
            <p>{getDeliveryCost()} ل.س</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>المجموع</b>
            <b>{totalAmount + getDeliveryCost()} ل.س</b>
          </div>
          <button type="button" onClick={handlePlaceOrder}>إرسال عبر تطبيق واتساب
          </button>
          
        </div>
      </div>

      <div className="place-order-left">
        <p className="title">معلومات عن التوصيل</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='الاسم' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='الكنية' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='البريد الإلكتروني' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='الشارع' />

        <div className="multi-fields">
          <select required name='city' onChange={onChangeHandler} value={data.city}>
            <option value="">اختر المدينة</option>
            <option value="حمص">حمص</option>
          </select>

          <select required name='state' onChange={onChangeHandler} value={data.state}>
            <option value="">اختر المنطقة</option>
            {data.city && cityStateMap[data.city]?.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="multi-fields">
          {/* <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='الرمز البريدي' /> */}
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='رقم الهاتف' />
        </div>

        <div className="multi-fields">
          <select required name="day" onChange={onChangeHandler} value={data.day}>
            <option value="" >اختر اليوم</option>
            <option value="الأحد">الأحد</option>
            <option value="الإثنين">الإثنين</option>
            <option value="الثلاثاء">الثلاثاء</option>
            <option value="الأربعاء">الأربعاء</option>
            <option value="الخميس">الخميس</option>
            <option value="الجمعة">الجمعة</option>
            <option value="السبت">السبت</option>
          </select>
          <input required name="time" onChange={onChangeHandler} value={data.time} type="time" />
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;