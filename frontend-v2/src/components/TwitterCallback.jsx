import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const TwitterCallback = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleCallback = async () => {
      const query = new URLSearchParams(location.search);
      const oauthToken = query.get("oauth_token");
      const oauthVerifier = query.get("oauth_verifier");

      if (oauthToken && oauthVerifier) {
        const response = await fetch(
          "http://localhost:3001/api/v1/auth/twitter",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oauth_token: oauthToken,
              oauth_verifier: oauthVerifier,
            }),
          }
        );

        const data = await response.json();
        if (data.oauth_token) {
          // Handle successful login
          history.push("/");
        } else {
          console.error("Twitter login failed");
        }
      }
    };

    handleCallback();
  }, [location, history]);

  return <div>Loading...</div>;
};

export default TwitterCallback;
