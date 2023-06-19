import { useState } from "react";
import { restaurentList } from "../Config";
import { RestaurentCard } from "./RestaurentCard";

const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) => {
        restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())
    })
}

const Body = () => {
    // To Create useState Variable
    const [searchText, setSearchText] = useState('');
    const [restaurents, setRestaurents] = useState(restaurentList);
    // const [searchClick, setSearchClick] = useState('False');
    
    return (
        <>
            <div className="search-container col-lg-6 mt-4">
                <input type="text" className="form-control" placeholder="Search" value = { searchText } onChange={(e) => setSearchText(e.target.value)} />
                <button className="btn btn-violet text-white" onClick={() => { 
                    // (searchClick === 'False') ? setSearchClick('True') : setSearchClick('False');
                    setRestaurents(filterData(searchText, restaurents));
                }}>Search</button>
            </div>
            {/* <h1>{ searchClick }</h1> */}
            <div className='container restaurent-card mt-4'>
                {
                    restaurents.map((restaurant) => {
                        return <RestaurentCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;