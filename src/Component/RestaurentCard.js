import { IMG_CDN_URL } from "../Config"

export const RestaurentCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (
        <>
            <img src={IMG_CDN_URL + cloudinaryImageId} className="card-img-top" alt="The image is not found" />
            <div className="card-body text-dark">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{cuisines.join(', ')}</p>
                <button className='btn btn-violet text-white'>{avgRating} Stars</button>
            </div>
        </>
    )
}
