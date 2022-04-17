import React, { useState } from "react";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
     
    

    const handleSignup = async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName:name})
       console.log(name, email,password);
    }
  return (
    <div className="container my-10">
      <h1 className="text-4xl text-center mb-5 font-semibold underline">Please Sign up</h1>
      <form className="w-2/4 mx-auto" onSubmit={handleSignup}>
        <div class="form-control mb-5">
          
          <label class="input-group">
            <span>Name</span>
            <input
              type="text"
              placeholder="your name here"
              class="input input-bordered w-full"
              name="name"
            />
          </label>
        </div>
        <div class="form-control mb-5">
          <label class="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="Enter you email here"
              class="input input-bordered w-full"
              name="email"
            />
          </label>
        </div>
        <div class="form-control mb-5">
          <label class="input-group">
            <span>Password</span>
            <input
              type="passwprd"
              placeholder="Enter your password here"
              class="input input-bordered w-full"
              name="password"
            />
          </label>
        </div>
        
      
        <input class="btn sm:btn-sm md:btn-md btn-wide" type="submit" value="Submit"  />
      </form>
    </div>
  );
};

export default Signup;
