import React from "react";
import Alsobooked from "../Alsobooked/Alsobooked";
const PeopleAlsoBooked = () => {
    return (
        <div className="p-4 mx-auto">
            <h1 className="my-5 md:text-4xl sm:text-4xl text-slate-600 font-bold text-center" > People Also Booked </h1>
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
               <Alsobooked key={2} 
               img={"https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} 
               name={"Cleansing Assistant for home"} >

               </Alsobooked>
               <Alsobooked key={5} 
               img={"https://images.unsplash.com/photo-1516788875874-c5912cae7b43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"} 
               name={"Waiters for party"}></Alsobooked>
               <Alsobooked key={8} 
               img={"https://images.unsplash.com/photo-1595751866979-de6e9d606220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFydGVuZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} 
               name={"Bartenders for party"}></Alsobooked>

            </div>
        </div>
    );
};

export default PeopleAlsoBooked;
