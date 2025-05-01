import React from 'react'
import './ExploreMenu.css'
import {menu_list, food_list} from '../../assets/assets.js'

const ExploreMenu = ({resturant,setResturant}) => {
  return (
    <div dir='rtl' className='explor-menu' id='explore-menu'>
        <h1>اكتشف الوجبات السريعة من عدة مطاعم</h1>
        <p className='explore-menu-text'>قم باختيار وجبتك المفضلة من مطعمكم</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setResturant(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={resturant===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu




// import React from 'react';
// import './ExploreMenu.css';
// import { menu_list, food_list  } from '../../assets/assets.js';
// const ExploreMenu = ({ resturant, setResturant }) => {
//   return (
//     <div dir="rtl" className="explor-menu" id="explore-menu">
//       <h1>اكتشف الوجبات السريعة من عدة مطاعم</h1>
//       <p className="explore-menu-text">قم باختيار وجبتك المفضلة من مطعمكم</p>

//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => (
//           <div
//             onClick={() =>
//               setResturant((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
//             }
//             key={index}
//             className="explore-menu-list-item"
//           >
//             <img
//               className={resturant === item.menu_name ? 'active' : ''}
//               src={item.menu_image}
//               alt={item.menu_name}
//             />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>

//       <hr />

//       {/* قائمة الأطعمة حسب التصنيف المختار */}
//       <div className="food-items-list">
//         {food_list
//           .filter((food) => resturant === 'All' || food.category === resturant)
//           .map((food, index) => (
//             <div key={index} className="food-item">
//               <img src={food.image} alt={food.name} />
//               <h3>{food.name}</h3>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreMenu;
