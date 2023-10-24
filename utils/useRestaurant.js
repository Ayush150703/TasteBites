import { useState,useEffect } from "react";
import { swiggy_menu_api_URL } from "../src/components/config";
const userRestaurant=(resId)=>{
const [restaurant,setRestaurant]=useState(null);

    
    // Get data from API
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
    
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
    
        setRestaurant(restaurantData);
      }
    //return restaurant Data
    return restaurant;

};

export default userRestaurant;