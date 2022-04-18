import React from "react";
const Alsobooked = ({img,name}) => {
    
    return (
        <div class="card card-compact mx-auto w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>Hello people also book this services i know some good people.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Book Now</button>
            </div>
        </div>
    </div>
    );
};

export default Alsobooked;
