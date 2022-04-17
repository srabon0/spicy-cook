import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceContext } from "../../App";

const ServiceDetails = () => {
    const navigate = useNavigate();
    const handleNavigateChekout =()=>{
        navigate('/checkout');
    }
  let params = useParams();

  const [services, setServices] = useContext(ServiceContext);
  console.log(services);
  const service = services.find((service) => service.id == params.serviceId);
  console.log(service);
  return (
    <div className="container mx-auto my-5">
      <div className="card lg:card-side bg-base-100 shadow-xl m-5">
        <figure>
          <img
            src={service.img}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{service?.serviceName}</h2>
          <p className="text-5xl "> $ {service?.price}</p>
          <p className="text-2xl ">  {service?.description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleNavigateChekout} className="btn btn-primary">Proceed chekout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
