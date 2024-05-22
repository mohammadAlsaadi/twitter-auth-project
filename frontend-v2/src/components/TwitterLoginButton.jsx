import React from "react";
import { TwitterLoginButton as TwitterLoginButtonComponent } from "react-twitter-auth";

const TwitterLoginButton = () => {
  const onSuccess = (response) => {
    console.log("Login success:", response);
    // Handle successful login
  };

  const onFailure = (error) => {
    console.error("Login failure:", error);
    // Handle login failure
  };

  return (
    <TwitterLoginButtonComponent
      consumerKey="YOUR_TWITTER_CONSUMER_KEY"
      consumerSecret="YOUR_TWITTER_CONSUMER_SECRET"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default TwitterLoginButton;
