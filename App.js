/**
 * todo Transitive Denpendendies: When a denpendency depends on another dependency and that dependency depends on another dependency and it goes on and on then it's called Transitive Dependency.
 * ? Component Composition: When we use a component inside a component, thus creating componet with other component
 * ? Babel is a Compiler or you can say it Transpiler as well
 * ? JSX, ES6 is not mendatory in React
 * ? React.Fragment: It's a component which is imported by React. It's like a empty tag
 * ! Reconsilation: React uses diff algorithm to find out the difference between the trees(actual DOM and virtual DOM). And it finds out what needs to be updated. OR, The algorithm React uses to diff one tree to another to determine which parts need to be changed 
 * 
 * TODO keys: It's use because React became confused to different between similar divs. That's why we have to assign an unique key to differentiat between them. unique key >>> index key >> no key
 * 
 * ! Virtual DOM: It's not an actual DOM, it's just a representation of a DOM.
 * ! React fiber is a new reconsiliation engine. It came in React 16. It's reponsible for diff
 * 
 * 
 */


import React from "react";
import ReactDOM from "react-dom/client";
import { FcLike } from "react-icons/fc";

const HeaderComponent = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?w=740&t=st=1684071501~exp=1684072101~hmac=9b6c4183d337cfb9b90f7ea78038dc1d7dcc876381e8d41f0099d19012edc6f2" height="100px" width="200px" />
                    </a>
                    <div>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

const restaurentList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "642747",
            "name": "Foo Brigade Road",
            "uuid": "8d108529-abe5-421f-a5b1-0f20b4443958",
            "city": "1",
            "area": "PRESTIGE FORUM REX",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "f10ae4046bd7de2c06df880324b67a58",
            "cuisines": [
                "Asian",
                "Chinese",
                "Sushi"
            ],
            "tags": [

            ],
            "costForTwo": 100000,
            "costForTwoString": "₹1000 FOR TWO",
            "deliveryTime": 45,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 45,
            "slaString": "45 MINS",
            "lastMileTravel": 2.799999952316284,
            "slugs": {
                "restaurant": "foo-brigade-road-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "PLOT NO 169, PRESTIGE FORUM REX WALK REX THEATRE, BRIGADE ROAD SHANTALE NAGAR, ASHOK NAGAR BENGALURU, KARNATAKA 560001",
            "locality": "BRIGADE ROAD",
            "parentId": 393646,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6676210~p=1~eid=00000188-2d86-0351-5918-2a72004a0126",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "642747",
                "deliveryTime": 45,
                "minDeliveryTime": 45,
                "maxDeliveryTime": 45,
                "lastMileTravel": 2.799999952316284,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 20,
            "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "3241",
            "name": "Meghana Foods",
            "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
            "city": "1",
            "area": "Ashok Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian",
                "Chinese",
                "Seafood"
            ],
            "tags": [

            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 2.4000000953674316,
            "slugs": {
                "restaurant": "meghana-foods-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
            "locality": "Residency Road",
            "parentId": 635,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "2.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "3241",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 2.4000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.5",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "704354",
            "name": "The Baker's Dozen",
            "uuid": "c7a0c1a8-9ced-4971-9bca-b63c8d3e4ed3",
            "city": "1",
            "area": "AUSTIN TOWN",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "4564707d4f5a8a7feff0188b183a7916",
            "cuisines": [
                "Indian"
            ],
            "tags": [

            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 41,
            "minDeliveryTime": 41,
            "maxDeliveryTime": 41,
            "slaString": "41 MINS",
            "lastMileTravel": 2.200000047683716,
            "slugs": {
                "restaurant": "the-baker's-dozen-austin-town-austin-town",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "FIRST FLOOR, OPP NANDINI BOOTH  SRIPRASTH COMPLEX PEACE RESTARUNAT  LANGFORD RD, BHEEMANNA GARDEN  LANGFORD GARDENS, BENGALURU,  Shanthinagara , B.B.M.P East,  Karnataka-560027",
            "locality": "Opp Nandini Booth Sriprasth Complex",
            "parentId": 946,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6667376~p=4~eid=00000188-2d86-0351-5918-2a73004a044b",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "704354",
                "deliveryTime": 41,
                "minDeliveryTime": 41,
                "maxDeliveryTime": 41,
                "lastMileTravel": 2.200000047683716,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "--",
            "totalRatings": 0,
            "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "684427",
            "name": "Cafe Amudham",
            "uuid": "e56f2694-6e06-4135-9c08-eb87c2496398",
            "city": "1",
            "area": "Jayanagar",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "0bcdca61f3cd1e9135b98328593d044f",
            "cuisines": [
                "South Indian",
                "Snacks"
            ],
            "tags": [

            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 4,
            "slugs": {
                "restaurant": "cafe-amudham-jayanagar-jayanagar",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "No. 192, , Lalbhagh  Siddapura, Jayanagar 1st Block, Ward No. 144,  Bangalore, B.B.M.P South, Karnataka-560011",
            "locality": "Lalbhagh  Siddapura",
            "parentId": 396620,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6806004~p=7~eid=00000188-2d86-0351-5918-2a74004a0774",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "684427",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 4,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.6",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "30531",
            "name": "Hotel Empire",
            "uuid": "134dd05e-561e-449a-9ba5-b1f6a3c5cb8b",
            "city": "1",
            "area": "Hotel Empire International",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "tags": [

            ],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 2.0999999046325684,
            "slugs": {
                "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
            "locality": "Brigade Road",
            "parentId": 475,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "30531",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "lastMileTravel": 2.0999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "533773",
            "name": "Third Wave Coffee",
            "uuid": "19dff2cd-d21d-4cac-9c26-4580e0c61346",
            "city": "1",
            "area": "Ashok Nagar",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
            "cuisines": [
                "Beverages",
                "Bakery",
                "Continental"
            ],
            "tags": [

            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0.5,
            "slugs": {
                "restaurant": "third-wave-coffee-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "hird Wave Coffee, Corporation No.13, Old No.4/1, Ground Floor, Lavelle Road Junction, Walton Road, Bangalore, Shanthinagara , B.B.M.P East, Karnataka-560001",
            "locality": "Lavelle Road",
            "parentId": 274773,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6790144~p=22~eid=00000188-2d86-0351-5918-2a79004a164e",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "533773",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 0.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "210945",
            "name": "Royal Restaurant",
            "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
            "city": "1",
            "area": "Shivajinagar",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
            "cuisines": [
                "Chinese",
                "North Indian",
                "Tandoor"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
            "locality": "Sulthangunta",
            "parentId": 2896,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "35% OFF",
                "subHeader": "",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "210945",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "56428",
            "name": "Puliyogare Point",
            "uuid": "49970568-119d-436c-9dad-042d9c07c7ff",
            "city": "1",
            "area": "Basavanagudi",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
            "cuisines": [
                "South Indian"
            ],
            "tags": [

            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 4.900000095367432,
            "slugs": {
                "restaurant": "puliyogare-point-basavanagudi-basavanagudi",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi",
            "locality": "N.R Colony",
            "parentId": 8409,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.9 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "56428",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 4.900000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.5",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "5938",
            "name": "Burger King",
            "uuid": "15bfac38-f648-4d1f-8a91-7bbd6f9a4c1e",
            "city": "1",
            "area": "Shivaji Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "tags": [

            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "slaString": "32 MINS",
            "lastMileTravel": 2.5,
            "slugs": {
                "restaurant": "burger-king-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "Unit no 111/4, and 8/2, Asha Gallary, Opposite to west side , Commercial Street, Bangalore-  5600001",
            "locality": "Tasker Town",
            "parentId": 166,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹129",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "5938",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "lastMileTravel": 2.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "10094",
            "name": "Delicacy",
            "uuid": "1cb31584-853f-4edb-8b45-b8f3a110eee8",
            "city": "1",
            "area": "Frazer Town",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "qzclco3le2bujjf7q9ko",
            "cuisines": [
                "Chinese",
                "Thai"
            ],
            "tags": [

            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "slaString": "42 MINS",
            "lastMileTravel": 5,
            "slugs": {
                "restaurant": "delicacy-cox-town-frazer-town",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "#36,Kenchappa Road, Frazer Town, ops Cafe Idly, Bangalore 05",
            "locality": "Pulakeshinagar",
            "parentId": 317,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6758828~p=16~eid=00000188-2d86-0351-5918-2a77004a1052",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹100",
                "discountTag": "",
                "headerTypeV2": 0
            },
            "sla": {
                "restaurantId": "10094",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "lastMileTravel": 5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "3369",
            "name": "Truffles",
            "uuid": "992d9ef3-bef1-4d1a-8a96-3ced9e363d43",
            "city": "1",
            "area": "St Marks Road",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "cuisines": [
                "American",
                "Desserts",
                "Continental",
                "Italian"
            ],
            "tags": [

            ],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0.800000011920929,
            "slugs": {
                "restaurant": "truffles-ice-spice-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "22, St. Marks Road, Bangalore",
            "locality": "Ashok Nagar",
            "parentId": 218065,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "3369",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 0.800000011920929,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "290351",
            "name": "Ebony",
            "uuid": "60be0c02-8a86-43f7-9eb9-89c43717a44d",
            "city": "1",
            "area": "Ashok Nagar",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "kxnm64beltrkaixqpqhk",
            "cuisines": [
                "North Indian",
                "Tandoor",
                "Indian"
            ],
            "tags": [

            ],
            "costForTwo": 100000,
            "costForTwoString": "₹1000 FOR TWO",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "slaString": "34 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
                "restaurant": "ebony-central-bangalore-central-bangalore",
                "city": "bangalore"
            },
            "cityState": "1",
            "address": "13th Floor, Barton Centre, no.84 MG Road",
            "locality": "Barton Centre",
            "parentId": 76406,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6573511~p=19~eid=00000188-2d86-0351-5918-2a78004a1304",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "290351",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "lastMileTravel": 1.600000023841858,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.5",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
]

const RestaurentCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString, avgRating }) => {
    return (
        <>
            <div className="card m-2">
                <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } className="card-img-top" alt="The image is not found" />
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p className="card-text">{ cuisines.join(', ') }</p>
                    <p className="card-text">{ lastMileTravelString } minutes</p>
                    <span className="star-icon"><FcLike /> { avgRating }</span>
                </div>
            </div>
        </>
    );
}



const Body = () => {
    return (
        <>
            <div className="container">
                <div className="restaurent-list">
                    {
                        restaurentList.map((restaurant) => {
                            return <RestaurentCard { ...restaurant.data } key = { restaurant.data.id } />
                        })
                    }
                </div>
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);