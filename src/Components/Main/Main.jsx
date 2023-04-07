import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    desciption:
      "The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    desciption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quae doloribus consequatur, aperiam voluptas consectetur eaque illum perferendis sint facere.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Greet Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    desciption: 'The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$400',
    desciption: 'The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    desciption: 'The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    desciption: 'The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$650',
    desciption: 'The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    desciption: 'The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    desciption: 'The opitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxorious stays and adventurous activities.'
  },
];

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])




  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, desciption }) => {
            return (
              <div data-aos='fade-up' key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small> +1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{desciption}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
