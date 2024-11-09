import React from 'react';
import { DISH_URL } from '../Utils/constants';
import Body from './Body';

const RestaurantCard =(props) => {
    // console.log(props);
    return(
        <div className=" m-4 p-4 w-[200px] rounded-lg" style={{backgroundColor : "#f0f0f0"}}>
            <img
            className=" rounded-lg" alt="res-logo" src={DISH_URL+props.resData.info.cloudinaryImageId} />
            <h3 className='font-bold py-4 text-lg'>{props.resData.info.name}</h3>
            <h4 className='flex-wrap flex'>{props.resData.info.cuisines+" "}</h4>
            <h4>{props.resData.info.avgRating}</h4>
            <h4>{props.resData.info.deliveryTime}</h4>
            <h4>{props.resData.info.costForTwo}</h4>
        </div>
    );
};

export const withPromotedLabel = () => {
    return (props) => {
        return(
            <div>
                <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;