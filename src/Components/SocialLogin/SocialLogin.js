import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googleIcon from "../../images/social/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png";
import fbIcon from "../../images/social/icons8-facebook-48.png";
import gitHubIcon from "../../images/social/icons8-github-48.png";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFaceook, user2, loading2, error2] = useSignInWithFacebook(auth);
  let errorElement;
  if (error || error1 || error2) {
    errorElement = (
      <div>
        <p>Error: {error?.message || error1?.message || error2.message}</p>
      </div>
    );
  }
  if (loading || loading1 || loading2) {
    return <p>Loading...</p>;
  }
  if (user || user1 || user2) {
    console.log("Im signed in");
    navigate("/home");
  }

  return (
    <div className="container">
      <div className="w-3/4 mx-auto">
        <div className="flex flex-col w-50 border-opacity-50">
          <div className="grid h-1 "></div>
          <div className="divider">OR</div>
          <div className="grid h-1 "></div>
        </div>
        <div className="grid">
            
        <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-60 my-2 mx-auto"
      >
        {" "}
        <img src={googleIcon} style={{ height: "35px", width: "35px" }} /> Sign
        in With Google
      </button>
      <button  onClick={() => signInWithFaceook()} className="btn btn-outline w-60 my-2 mx-auto" > <img src={fbIcon} style={{"height":"35px","width":"35px"}} /> Sign in With Facebook</button>
      <button onClick={()=>signInWithGithub()}   className="btn btn-outline w-60 my-2 mx-auto" > <img src={gitHubIcon} style={{"height":"35px","width":"35px"}} /> Sign in With GitHub</button>
    {errorElement}
        </div>
    </div>
      </div>
      
  );
};

export default SocialLogin;
