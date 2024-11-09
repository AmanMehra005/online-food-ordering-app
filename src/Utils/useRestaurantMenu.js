import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantmenu = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        // console.log(json);
        setRestInfo(json.data);
        console.log(restInfo)
      };
      return restInfo;
}

export default useRestaurantmenu;