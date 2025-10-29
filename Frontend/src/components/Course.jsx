import React from "react";
import Card from "./Card";
import list2 from "../../public/list2.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book/");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category !== "free"));
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen mx-auto md:px-20 sm:px-4">
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold md:text-4xl">
          Your Happy Reading <span className="text-pink-500">Adventure</span>{" "}
          Awaits
        </h1>

        <p className="mt-10 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          vel quisquam, autem consectetur facilis unde itaque dignissimos
          laborum commodi nulla pariatur repellat dolor iste qui similique odio,
          sit soluta eum? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo unde accusamus, tenetur dolorum, magnam, facilis ratione
          atque delectus doloremque earum mollitia sit beatae voluptas ab itaque
          alias velit quasi nostrum?
        </p>

        <Link to="/">
          <button className="bg-pink-500 text-white rounded px-4 py-2 mt-10 hover:bg-pink-400 hover:scale-110 hover:ease-in-out hover:transition-transform hover:duration-500">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-x-10 gap-y-16  justify-items-center">
        {book.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
