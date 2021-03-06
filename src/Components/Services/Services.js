import React from "react";
import useService from "../Hook/useService";
import Service from "../Service/Service";



const Services = () => {
  const [services, setServices] = useService();
  return (
    
      <div className="container" id="home#services">
        <h1 className="my-5 md:text-5xl sm:text-4xl text-slate-600 font-bold text-center">
          Services
        </h1>
        <div className="w-3/4 mx-auto  grid grid-cols-1 md:grid-cols-3 md:gap-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
  
  );
};

export default Services;
