import {React,useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext.jsx'
import FoodItem from "../FoodItem/FoodItem.jsx";


const FoodDisplay = ({resturant}) => {
    const {food_list}=useContext(StoreContext)
    console.log("المطعم المحدد:", resturant);

  return (
    <div className='food-display' id='food-display'>
        <h2>اختر طعامك المفضل</h2>
        <div className="food-display-list">
   {food_list.map((item, index)=>{
                {console.log(resturant,item.resturant);}
                if(resturant==="All" || resturant===item.resturant){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                } 
         })}



        </div>
    </div>
  )
}

export default FoodDisplay;



// import { React, useContext } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../context/StoreContext.jsx';
// import FoodItem from "../FoodItem/FoodItem.jsx";

// const FoodDisplay = ({ resturant }) => {
//   const { food_list } = useContext(StoreContext);
//   console.log("المطعم المحدد:", resturant);

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>اختر طعامك المفضل</h2>
//       <div className="food-display-list">
//         {food_list
//           .filter(item => resturant === "All" || item.resturant === resturant)
//           .map((item, index) => (
//             <FoodItem
//               key={index}
//               id={item._id}
//               name={item.name}
//               description={item.description}
//               price={item.price}
//               image={item.image}
//             />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;
