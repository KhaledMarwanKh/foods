import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify';  // تعديل هنا

const List = ({url}) => {
  const [list, setList] = useState([]);
  const fetchList = async (req, res) => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }
  const removeFood= async(foodId)=>{
    const response=await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchList();
  }, [])
  return (
    <div className='list add flex-col'>
      <p>
        All foods List
      </p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>صورة</b>
          <b>اسم</b>
          <b>مطعم</b>
          <b>سعر</b>
          <b>حدث</b>
        </div>
        {list.map((item, index)=>{
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/image/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.resturant}</p>
              <p>{item.price} ل.س</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default List
