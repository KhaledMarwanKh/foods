import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, food_list, removeFormCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>منتج</p>
          <p>العنوان</p>
          <p>سعر</p>
          <p>العدد</p>
          <p>الكلي</p>
          <p>حذف</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="">
                <div className="cart-items-title cart-items-item ">
                  <img src={url+"/image/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} ل.س</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} ل.س</p>
                  <p onClick={() => removeFormCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>القائمة الكلية</h2>
          <div className="">
            <div className="cart-total-details">
              <p>المجموع الجزئي</p>
              <p>{getTotalCartAmount()} ل.س</p>

            </div>
            <div className="cart-total-details">
              <p>تكلفة التوصيل</p>
              <p>{getTotalCartAmount()===0?0:2} ل.س</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>المجموع</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} ل.س</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>تابع لشراء</button>
        </div>
        <div className="cart-promocode">
          <div className="">
            <p>
              عندك كود خصم؟ دخّلو هون
            </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='كوبون الخصم' name="" id="" />
              <button>
                موافق
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart