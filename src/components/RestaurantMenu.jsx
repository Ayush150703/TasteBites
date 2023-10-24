import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  RESTAURANT_TYPE_KEY,
} from "./config";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // const [restaurant, setRestaurant] = useState();
  const restaurant=useRestaurant(resId)

 

  return (
    <>
      <h1>Restaurant id: {resId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating}</h3>
      <h3>{restaurant?.costForTwoMessage}</h3>
    </>
  );
};

export default RestaurantMenu;


