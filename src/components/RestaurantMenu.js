
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantmenu from "../Utils/useRestaurantMenu";
import RestaurantCategroy from "./RestaurantCategory";


const RestaurantMenu = () => {

  const [showIndex , setShowIndex] = useState(null);
 
  const {resId}= useParams();
  const restInfo = useRestaurantmenu(resId); 

  if (restInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  return (
    <div className=" text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category , index) => <RestaurantCategroy key={category?.card?.card.title} data={category?.card?.card}
      showItems = {index === showIndex ? true : false}
      setShowIndex ={() => setShowIndex(index)}
      /> )}
    </div>
  );
};

export default RestaurantMenu;
