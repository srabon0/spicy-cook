import React from "react";
import auth from "../../firebase.init";
import {
  
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
const Login = () => {
  

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
if (user){
    console.log(user);
}
  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  return (
    <div className="container my-10">
      <h1 className="text-4xl text-center mb-5 font-semibold underline">
        Please Sign up
      </h1>
      <form className="w-2/4 mx-auto" onSubmit={handleLogin}>
        <div className="form-control mb-5">
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="Enter you email here"
              className="input input-bordered w-full"
              name="email"
            />
          </label>
        </div>
        <div className="form-control mb-5">
          <label className="input-group">
            <span>Password</span>
            <input
              type="passwprd"
              placeholder="Enter your password here"
              className="input input-bordered w-full"
              name="password"
            />
          </label>
        </div>

        <input
          className="btn sm:btn-sm md:btn-md btn-wide"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Login;
