import React from "react";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";

const Filter = () => {
  const options = ["500", "1000", "2000", "3000", "4000", "5000", "6000"];

  const handleClick = (e) => {
    const btns = document.querySelectorAll(".btn-filter");
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div className="  bg-white text-black shadow-xl rounded-xl rounded-tl-none relative -mt-14">
      <div
        style={{ borderBottom: "1px solid #DEE1E6" }}
        className="left-0 rounded-lg rounded-b-none flex items-center bg-white absolute bottom-full "
      >
        <button
          onClick={(e) => handleClick(e)}
          className="active btn-filter rounded-md text-sm py-2 px-5 m-3 "
        >
          Buy
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className=" btn-filter rounded-md text-sm py-2 px-5 m-3 "
        >
          Sell
        </button>
        <button
          onClick={(e) => handleClick(e)}
          className=" btn-filter rounded-md text-sm py-2 px-5 m-3 "
        >
          Rent
        </button>
      </div>
      <form
        className="h-full rounded-xl rounded-tl-none grid grid-cols-1 gap-5 p-5 "
        action=""
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm mb-3">
            Search:
          </label>
          <div className="relative">
            <AiOutlineSearch className="absolute top-1/2 -translate-y-1/2 left-3 " />
            <input
              style={{ border: "1px solid #E5E7EB" }}
              type="text"
              className="p-2 pl-10 outline-green-600 w-full placeholder:text-sm"
              placeholder="Search your home : "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm mb-3">
            Select Categories:
          </label>
          <select
            name=""
            id=""
            style={{ border: "1px solid #E5E7EB" }}
            className="p-2 outline-green-600 text-sm"
          >
            <option disabled className="text-sm" value="" selected="selected">
              Houses
            </option>
            <option value="">500</option>
            <option value="">500</option>
            <option value="">500</option>
            <option value="">500</option>
            <option value="">500</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm mb-3">
            Min Price:
          </label>
          <select
            name=""
            id=""
            style={{ border: "1px solid #E5E7EB" }}
            className="p-2 outline-green-600 text-sm"
          >
            <option className="text-sm" disabled value="" selected="selected">
              Min Price
            </option>
            {options.map((option, key) => (
              <option className="text-sm" key={key}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm mb-3">
            Max Price:
          </label>
          <select
            name=""
            id=""
            style={{ border: "1px solid #E5E7EB" }}
            className="p-2 outline-green-600 text-sm"
          >
            <option className="text-sm" disabled selected="selected" value="">
              Max Price
            </option>
            {options.map((option, key) => (
              <option className="text-sm" key={key}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-green-600 text-white text-sm py-2 rounded-lg">
          Search now
        </button>
      </form>
    </div>
  );
};

export default Filter;
