import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";

const Course = () => {
  const [book, setBook] = useState([]);
  const [fantasy,setFantasy] = useState([]);
  const [horror,setHorror] = useState([]);
  const [mystery,setMystery] = useState([]);
  const [thriller,setThriller] = useState([]);
  const [classic,setClassic] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4004/book");
        const data = res.data.filter((data) => data.category === "science fiction");
        const data2 = res.data.filter((data) => data.category === "fantasy");
        const data3 = res.data.filter((data) => data.category === "horror");
        const data4 = res.data.filter((data) => data.category === "mystery");
        const data5 = res.data.filter((data) => data.category === "thriller");
        const data6 = res.data.filter((data) => data.category === "classic");
        setBook(data);
        setFantasy(data2);
        setHorror(data3);
        setMystery(data4);
        setThriller(data5);
        setClassic(data6);
      } catch (error) {
        console.log(error);
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
    <div className="mt-[65px]">
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="md:mt-[68px]">
          <h1 className="text-center font-semibold text-4xl pb-2">Science Fiction</h1>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <div className="mt-6">
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-center font-semibold text-4xl pb-2">Fantasy</h1>
        </div>

        <div>
          <Slider {...settings}>
            {fantasy.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <div className="mt-6">
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-center font-semibold text-4xl pb-2">Horror</h1>
        </div>

        <div>
          <Slider {...settings}>
            {horror.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <div className="mt-6">
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-center font-semibold text-4xl pb-2">Mystery</h1>
        </div>
        <div>
          <Slider {...settings}>
            {mystery.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <div className="mt-6">
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-center font-semibold text-4xl pb-2">Thriller</h1>
        </div>
        <div>
          <Slider {...settings}>
            {thriller.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    <div className="mt-6">
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-center font-semibold text-4xl pb-2">Classic</h1>
        </div>
        <div>
          <Slider {...settings}>
            {classic.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Course
