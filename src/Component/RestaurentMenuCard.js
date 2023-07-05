import { IMG_CDN_URL } from "../Config";

const RestaurentMenuCard = ({ name, price, description, imageId }) => {
    return (
        <>
            <div className="col-lg-9 lh-sm pt-3 pb-3" >
                <h3>{ name }</h3>
                <p>
                    <i className="fa fa-inr" aria-hidden="true"></i>
                    {' ' + price / 100 + '.00'}
                </p>
                <p className="fw-lighter">{ description }</p>
            </div>
            <div className="col-lg-3 pt-3 pb-3">
                <img src={ IMG_CDN_URL + imageId } width='100%' className="rounded" alt="The image is not found" />
            </div>
        </>
    )
}

export default RestaurentMenuCard;