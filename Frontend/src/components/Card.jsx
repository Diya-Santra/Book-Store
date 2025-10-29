import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="mt-10">
        <div
          className="card bg-base-100 w-96 shadow-sm 
             transform transition-all duration-500 ease-in-out 
             hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
        >
          <figure>
            <img src={props.item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.item.name}
              <div className="badge badge-secondary">{props.item.category}</div>
            </h2>
            <p>{props.item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline font-semibold cursor-pointer hover:bg-pink-500 hover:text-white">
                {props.item.price}
              </div>
              <div className="badge badge-outline font-semibold cursor-pointer hover:bg-pink-500 hover:text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
