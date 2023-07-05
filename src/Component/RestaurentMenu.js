import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { MENU_API } from "../Config";
import RestaurentMenuCard from "./RestaurentMenuCard";

function filterData(vegOrNotRestaurent) {
    let filterData = vegOrNotRestaurent.filter((res) => {
        return res.card.info.itemAttribute.vegClassifier == "VEG";
    });

    return filterData;
}

const RestaurentMenu = () => {
    // ? How to read Dynamic URL params 
    const { resId } = useParams();
    const [isVeg, setIsVeg] = useState(false);
    const [restaurant, setRestaurent] = useState(null);
    const [vegOrNotRestaurent, setVegOrNotRestaurent] = useState(null);

    useEffect(() => {
        getRestaurentInfo();
    }, []);

    async function getRestaurentInfo() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setRestaurent(json.data);
    }

    if (restaurant === null) return <Shimmer />

    const { name, cuisines, areaName, costForTwoMessage, avgRating, totalRatingsString, sla } = restaurant.cards[0].card.card.info;

    const { itemCards } = restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    if (vegOrNotRestaurent == null) {
        setVegOrNotRestaurent(itemCards);
    }

    if (vegOrNotRestaurent == null) return <Shimmer />

    return (
        <div className="container menu mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="row justify-content-between first-div">
                        <div className="col-lg-5">
                            <h4>{name}</h4>
                            <p>{cuisines.join(', ')}</p>
                            <p>{areaName + ', ' + sla.lastMileTravelString}</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-side">
                                <h4 className="mt-2 text-white">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    {avgRating}
                                </h4>
                                <p className="mt-4 pb-2 fs-10 fw-bold text-white">
                                    {totalRatingsString}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 pb-2">
                        <div className="col-lg-2 fw-bold">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            {'  ' + sla.deliveryTime + ' MINS'}
                        </div>
                        <div className="col-lg-3">
                            <h5 className="fw-bold">{costForTwoMessage}</h5>
                        </div>
                    </div>
                    {
                        (isVeg == true) ? <button className="btn btn-primary shadow-none" onClick={() => {
                            setIsVeg(false);
                            setVegOrNotRestaurent(itemCards);
                        }}>Veg Only</button> : <button className="btn btn-primary shadow-none" onClick={() => {
                            setIsVeg(true);
                            setVegOrNotRestaurent(filterData(vegOrNotRestaurent));
                        }}>All</button>
                    }

                    <div className="row mt-3 justify-content-between recommanded-restaurent">
                        {
                            vegOrNotRestaurent.map((itemRestaurents) => {
                                if (itemRestaurents.length == 0) {
                                    return (
                                        <h1>No Veg item found</h1>
                                    )
                                }
                                return (
                                    <RestaurentMenuCard {...itemRestaurents.card.info} key={itemRestaurents.card.info.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurentMenu;
