import React from "react";

const Home = () => {
  return (
    <div className="h-screen">
      
      <div className="flex justify-between mx-90 mt-10 h-177  sm:flex-col sm:items-center lg:flex-row  ">
        <div className=" items-center mt-10 mr-20">
          <p className="bg-green-100 flex justify-center font-mono opacity-80 w-80 p-1 rounded-2xl text-1xl m-3 ">
            Food Waste Management System
          </p>
          <h1 className="text-6xl font-extrabold font-sans">
            Good food <span className="text-green-700 italic">deserves</span>{" "}
            <br />a second chance
          </h1>
          <p className="mt-4 font-sans font-lg text-xl">
            FoodBridge connects food donors with people in need. <br /> List
            your surplus food, find available donations nearby, <br /> and
            reduce food waste in your community.
          </p>
          <div className="flex gap-10">
            <button className="bg-green-600 mt-10 p-4 rounded-4xl w-50 text-white text-xl font-medium transition hover:translate-x-2 hover:bg-green-800 delay-200 ">
              {" "}
              🍔Donate Food
            </button>
            <button className="hover:outline-emerald-600 font-medium transition hover:translate-x-1 delay-200 hover:bg-green-50 outline-1 mt-10 text-2xl p-4 rounded-4xl w-50  ">
              Browse Listing ➡️
            </button>
          </div>
        </div>

       
        <div className=" h-114 w-120 mr-20  rounded-lg shadow-2xl animate-pulse duration-200 delay-75 ">
          <h1 className="p-7 font-serif font-extrabold">Today's Listings</h1>
          
          <div className="flex gap-3 m-6">
            <div className="bg-emerald-50 rounded-2xl w-49 h-21 border-emerald-600 transition-all hover:translate-y-0.5 ">
              <h1 className="flex justify-center text-green-800 items-center  pt-3 font-bold">42</h1>
              <p className="flex justify-center text-green-800 items-center font-mono text font-bold ">available</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl w-49 h-21 border-emerald-200 transition-all hover:translate-y-0.5 ">
              <h1 className="flex justify-center text-green-800 items-center  pt-3 font-bold">18</h1>
               <p className="flex justify-center text-green-800 items-center font-mono text font-bold ">Claimed</p>

            </div>
            <div className="bg-emerald-50 rounded-2xl w-49 h-21 border-emerald-200 transition-all hover:translate-y-0.5 ">
              <h1 className="flex justify-center text-green-800 items-center  pt-3 font-bold">9</h1>
               <p className="flex justify-center text-green-800 items-center font-mono text font-bold ">Urgent</p>

            </div>
          </div>

          <div>
            <div className="w-110 m-5 h-15 rounded bg-fuchsia-100 border transition-all hover:translate-y-0.5">1</div>
            <div className="w-110 m-5 h-15 rounded bg-fuchsia-100 border transition-all hover:translate-y-0.5">2</div>
            <div className="w-110 m-5 h-15 rounded bg-fuchsia-100 border ">3</div>
          </div>
        </div>
      </div>
      <div className="h-50 w-full bg-green-900">

        <div className="flex justify-between pt-20 mx-10 text-4xl font-medium text-green-300 font-serif">
          <h1>1200+ Donations</h1>
          <h1>840 Register donors</h1>
          <h1>3.2 tons of food saved</h1>
          <h1>98% satisfaction rate</h1>

        </div>
        <h1 className=" ">
      
        </h1>
      </div>
    </div>
  );
};

export default Home;
