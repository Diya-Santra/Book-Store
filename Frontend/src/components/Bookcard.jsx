import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Bookcard = ({ refProp }) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book/");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "free"));
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="max-w-screen-2xl mx-auto md:px-20 mt-10 sm:px-4 mt-2"
        ref={refProp}
      >
        <div>
          <h1 className="font-bold text-xl pb-1 hover:text-gray-700">
            Free offered Books
          </h1>
          <p className="font-semibold text-gray-700">
            Enjoy and explore totally free of cost books
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Bookcard;
