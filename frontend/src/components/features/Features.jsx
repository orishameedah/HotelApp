import "./features.css"

const Features = () => {
  return (
   <div className="features">
    <div className="featuresItem">
        <img src="https://res.cloudinary.com/hameedah-images/image/upload/v1657781414/hotels-images/epa6erzcmqodbsvk7ajw.jpg" height="330"  alt="images" className="featuresImg" />
        <div className="featuresTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuresItem">
        <img src="https://res.cloudinary.com/hameedah-images/image/upload/v1657782983/hotels-images/t7jwpamoxpdpqfzpkgcv.jpg" height="330"  alt="images" className="featuresImg" />
        <div className="featuresTitles">
            <h1>Austin</h1>
            <h2>523 properties</h2>
        </div>
    </div>
    <div className="featuresItem">
        <img src="https://res.cloudinary.com/hameedah-images/image/upload/v1657783158/hotels-images/kg7fyryedgowchobvzgu.jpg" height="330" alt="images" className="featuresImg" />
        <div className="featuresTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
        </div>
    </div>
   </div>
  )
}
export default Features