import React from 'react';
import banner from '../../images/topbanner.jpg';
const Home = () => {
    return (
        <div>
            <img className='object-contain' src={banner} alt="" />
            <h1 className='text-7xl text-slate-50 absolute top-1/3 left-52'>The best cook in your town</h1>
        </div>
    );
};

export default Home;