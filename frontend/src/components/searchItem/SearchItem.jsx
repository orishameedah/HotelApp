import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://res.cloudinary.com/hameedah-images/image/upload/v1657915017/hotels-images/b86cpyprb6mbbhvhcze1.jpg" 
        alt="" 
        className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDstance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="isSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio - 1 bathroom - 22m 1 full bed
            </span>
            <span className="siCancel0p">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See avaliability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem