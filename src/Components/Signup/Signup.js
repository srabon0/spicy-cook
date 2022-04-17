import React from "react";

const Signup = () => {
  return (
    <div className="container my-10">
      <h1 className="text-4xl text-center mb-5 font-semibold underline">Please Sign up</h1>
      <form className="w-2/4 mx-auto">
        <div class="form-control mb-5">
          
          <label class="input-group">
            <span>Name</span>
            <input
              type="text"
              placeholder="your name here"
              class="input input-bordered w-full"
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
            />
          </label>
        </div>

        <button class="btn sm:btn-sm md:btn-md btn-wide">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
