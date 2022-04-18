import React from "react";
import banner from "../../images/topbanner.jpg";

import PeopleAlsoBooked from "../PeopleAlsoBooked/PeopleAlsoBooked";
import Services from "../Services/Services";
import Stat from "../Stat/Stat";
const Home = () => {
  return (
    <>
      <div>
        <img className="object-contain " src={banner} alt="" />
        <h1 className="font-bold leading-tight absolute top-28 md:top-96  md:absolute md:text-7xl text-white text-4xl md:left-36 text-center mt-0 mb-2 text-white-600">
          The best cook in your town
        </h1>
      </div>
      <Services></Services>
      <Stat></Stat>
      <PeopleAlsoBooked></PeopleAlsoBooked>
    </>
  );
};

export default Home;
