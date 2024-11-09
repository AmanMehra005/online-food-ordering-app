// import { restaurants as mockdata } from "../utils/mockdata"; // Rename the import to avoid conflict
import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]); // Use camelCase for state setter
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(
      <h1>
        oops something went wrong please check your internet connection!
      </h1>
    );
  }

  console.log(restaurants);

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex ">
        <div className=" m-4 p-4">
          <input
          type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
         
          <button
          className=" px-4 py-2 bg-green-100 rounded-lg m-4"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = restaurants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurant);
              setRestaurants(filteredRestaurant);
              console.log(restaurants)
            }}
          >
            search
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
        <button
          className=" px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = restaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.2
            );
            setRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {restaurants.map((restaurant) => (
          <Link
          key = {restaurant.info.id}
          to={"/restaurant/"+restaurant.info.id}
          >
            
          <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
