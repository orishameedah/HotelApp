import "./hotel.css"
import Navbar from "../../components/navbar/Navbar.jsx"
import Header from "../../components/header/Header.jsx"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "https://res.cloudinary.com/hameedah-images/image/upload/v1657971267/hotels-images/gqyeirm383uwzkheu85v.jpg"
    },
    {
      src: "https://res.cloudinary.com/hameedah-images/image/upload/v1657971326/hotels-images/c0oetm2z314zqsuheimv.jpg"
    },
    {
      src: "https://res.cloudinary.com/hameedah-images/image/upload/v1657971378/hotels-images/dy3yy84hyvdts0vajrz9.jpg"
    },
    {
      src: "https://res.cloudinary.com/hameedah-images/image/upload/v1657971433/hotels-images/irwq4pmbsn88rntbioqy.jpg"
    },
    {
      src: "https://res.cloudinary.com/hameedah-images/image/upload/v1657971494/hotels-images/rbh6dflz29ethkqnqaru.jpg"
    },
    {
      src: "https://res.cloudinary.com/hameedah-images/image/upload/v1657971538/hotels-images/sflbjostxuasvekz0chz.jpg"
    }
  ]

  const handleOption = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber= slideNumber === 0 ? 6 : slideNumber-1
    }
    else{
      newSlideNumber= slideNumber === 6 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>5 Bastowa,Old Town, 33-332 Krakow, Poland</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOption(i)} src={photo.src} alt=""  className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stays in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minutes walk from St. Florian's Gate in Krakow, Tower Street Apartments has accomodation 
                with air conditioning and free Wifi. The units come with hardwood floors and feature a fully equipped
                kitchenette with a microwave, a flat-scren TV, and a private bathroom with shower and a hairdrer. A 
                fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest 
                near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is 
                John Paul II International Krakow-Balice, 16.1 km from Tower Street Apartments, and the property offers 
                a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelPricesTexts">
              <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, the property has an excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel