import React,{ useEffect } from 'react'
import './main.css'
import img from '../../Assets/i7.jpeg'
import img2 from '../../Assets/i1.avif'
import img3 from '../../Assets/i9.jpeg'
import img4 from '../../Assets/i2.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id: 1,
    imgSrc:img4,
    destTitle:"Bran Castle",
    location: 'Transylvania',
    grade: 'CULTURAL RELAX',
    fees:'$700',
    description: 'Bran Castle, perched on a hill in Romania, is a medieval fortress associated with Dracula lore.'
  },
  {
    id: 2,
    imgSrc:img3,
    destTitle:"Maldives",
    location: 'Maldives',
    grade: 'CULTURAL RELAX',
    fees:'$600',
    description: 'The Maldives is a tropical paradise comprising 26 atolls in the Indian Ocean, known for its stunning coral reefs, crystal-clear turquoise waters, and luxurious overwater bungalows.'
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle:"Pyramids of Giza",
    location: 'Egypt',
    grade: 'CULTURAL RELAX',
    fees:'$900',
    description: 'The Pyramids of Giza, standing tall on Egypt\'s desert plains, are enduring symbols of ancient marvel and mystery. Built as grand tombs for pharaohs, these monumental structures have for millennia captivated imaginations with their scale and precision.'
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous destinations. '
  },

]


function Main() {
  useEffect(() => {
    Aos.init({duration:2000})
}, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main