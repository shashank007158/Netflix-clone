import React from "react";
import Form from "../../UI/Form";

const Signup = () => {
  return (
    <div class="signup">
      <div className="signup--heading">
        <h1>Unlimited movies, TV shows and more.</h1>
      </div>
      <div className="signup--sub__heading">
        <h3>Watch anywhere. Cancel anytime.</h3>
      </div>
      <Form className="signup--form" />
    </div>
  );
};
export default Signup;
