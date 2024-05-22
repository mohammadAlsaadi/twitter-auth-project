import React from "react";
import { TwitterLogin } from "react-oauth";
cd;
const TwitterLoginButton = () => {
  const onSuccess = (response) => {
    response.json().then((body) => {
      console.log(body);
      // Handle success - save user data, tokens, etc.
    });
  };

  const onFailure = (error) => {
    console.error(error);
  };

  return (
    <TwitterLogin
      loginUrl="http://localhost:3001/api/v1/auth/twitter"
      onFailure={onFailure}
      onSuccess={onSuccess}
      requestTokenUrl="http://localhost:3001/api/v1/auth/twitter/reverse"
      consumerKey="YOUR_CONSUMER_KEY"
      consumerSecret="YOUR_CONSUMER_SECRET"
    />
  );
};

export default TwitterLoginButton;
