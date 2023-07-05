// ? useState() is hook that React gives you to create local variable inside a functional component. Never use useState() outside of a component 

import { useState, useEffect } from "react";
import { restaurentList } from "../Config";
import { RestaurentCard } from "./RestaurentCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
    let filterData = restaurants.filter((restaurant) => {
        return restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())
    });

    return filterData;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurents, setAllRestaurents] = useState('');
    const [filteredRestaurents, setFilteredRestaurents] = useState('');

    useEffect(() => {
        getRestaurents();
    }, []);

    async function getRestaurents() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();

        // todo Optional Chaining
        setAllRestaurents(json.data.cards[2].data.data.cards);
        setFilteredRestaurents(json.data.cards[2].data.data.cards);
    }

    // ! Not Rendered Component (Early Return)
    // if (!allRestaurents) return null;
    return (allRestaurents.length == 0) ? <Shimmer /> : (
        <>
            <div className="search-container col-lg-6 mt-4">
                <input type="text" className="form-control" placeholder="Search" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="btn btn-violet text-white" onClick={() => {
                    setFilteredRestaurents(filterData(searchText, allRestaurents))
                }}>Search</button>
            </div>
            <div className='container restaurent-card mt-4'>
                {
                    (filteredRestaurents.length === 0) ? <h1>No Restaurent Found</h1> :
                    filteredRestaurents.map((restaurant) => {
                        return (
                            <Link to = { '/restaurent/' + restaurant.data.id } key = { restaurant.data.id } className="card shadow-sm text-decoration-none">
                                <RestaurentCard {...restaurant.data} />
                            </Link>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Body;