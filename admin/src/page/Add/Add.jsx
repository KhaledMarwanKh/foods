// import React, { useState } from 'react'
// import './Add.css'
// import axios from 'axios'
// import {assets} from '../../assets/assets'
// import { toast } from 'react-toastify'

// const Add = ({url}) => {
//   const [image, setImage]= useState(false);
//   const [data, setData]= useState({
//     name:"",
//     description:"",
//     price:"",
//     resturant:"مطعم1",

//   })
//   const onChangeHandler=(event)=>{
//     const name=event.target.name;
//     const value=event.target.value;
//     setData(data=>({...data, [name]:value}))
//   }
//   const onSubmitHandler=async (event)=>{
//     event.preventDefault();
//     const forData=new FormData();
//     FormData.append("الاسم ", data.name)
//     FormData.append("سعر", Number(data.price))
//     FormData.append("المطعم", Number(data.resturant))
//     FormData.append("صورة", image)
//     const response= await axios.post(`${url}/api/food/add`, forData);
//     if(response.data.success){
//       setData({
//         name:"",
//         description:"",
//         price:"",
//         resturant:"مطعم1",
//       })
//       setImage(false)
//       toast.success(response.data.message)
//     }
//     else{
//       toast.error(response.data.message)
//     }
//   }
//   return (
//     <div className='add'>
//       <form className='flex-col onSubmit={onSubmitHandler}'>
//         <div className="add-img-upload flex-col">
//           <p>رفع الصورة</p>
//           <label htmlFor="image">
//             <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
//           </label>
//           <input onClick={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>اسم المنتج</p>
//           <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='' id="" />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>وضف المنتج</p>
          
//         <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='اكتب هنا وصف المنتج' id="">
//         </textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>
//               اسم المطعم للمنتج
//             </p>
//             <select name="category" id="">
//               <option value="مطعم1">مطعم 1</option>
//               <option value="مطعم2">مطعم 2</option>
//               <option value="مطعم3">مطعم 3</option>
//               <option value="مطعم4">مطعم 4</option>
//               <option value="مطعم5">مطعم 5</option>
//               <option value="مطعم6">مطعم 6</option>
//               <option value="مطعم7">مطعم 7</option>
//               <option value="مطعم8">مطعم 8</option>
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>
//               سعر المنتج
//             </p>
//             <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='ادخل قيمة المنتج'/>
//           </div>
//         </div>
//         <button type='submit' className='add-btn'>
//           اضافة
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Add
import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    resturant: "مطعم1",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("resturant", data.resturant);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          resturant: "مطعم1",
        });
        setImage(null);
        toast.success(response.data.message);
        setTimeout(() => window.location.reload(), 1000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("فشل في إرسال البيانات");
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>رفع الصورة</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="add-product-name flex-col">
          <p>اسم المنتج</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            placeholder=""
          />
        </div>

        <div className="add-product-description flex-col">
          <p>وصف المنتج</p>
          <textarea
            name="description"
            rows="6"
            value={data.description}
            onChange={onChangeHandler}
            placeholder="اكتب هنا وصف المنتج"
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>اسم المطعم للمنتج</p>
            <select
              name="resturant"
              value={data.resturant}
              onChange={onChangeHandler}
            >
              <option value="مطعم1">مطعم 1</option>
              <option value="مطعم2">مطعم 2</option>
              <option value="مطعم3">مطعم 3</option>
              <option value="مطعم4">مطعم 4</option>
              <option value="مطعم5">مطعم 5</option>
              <option value="مطعم6">مطعم 6</option>
              <option value="مطعم7">مطعم 7</option>
              <option value="مطعم8">مطعم 8</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>سعر المنتج</p>
            <input
              type="number"
              name="price"
              value={data.price}
              onChange={onChangeHandler}
              placeholder="ادخل قيمة المنتج"
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          إضافة
        </button>
      </form>
    </div>
  );
};

export default Add;
