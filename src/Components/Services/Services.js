import React from 'react';
import useService from '../Hook/useService';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useService();
    return (
        <div className='container'>
           loaded {(services.length)}
           <div className='w-3/4 mx-auto  grid grid-cols-1 md:grid-cols-3 md:gap-3' >
               {services.map(service=><Service key={service._id} service={service} ></Service>)}
           </div>
        </div>
    );
};

export default Services;