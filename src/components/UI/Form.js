import React from "react";
import Button from "./Button";
import "./Form.scss";
const Form = (props) => {
  return (
    <form className={`signup--form ${props.className}`}>
      <div className="signup--form__label">
        <label htmlFor="signup--form__input">
          Ready to watch? Enter your email to create or restart your membership.
        </label>
      </div>

      <div className="signup--form__input--box">
        <input
          type="email"
          id="signup--form__input"
          className="signup--form__input"
        />
        <span className="placeholder">Email address</span>

        <Button className="signup--form__button">
          Get Started{" "}
          <span>
            <i class="fas fa-chevron-right icon"></i>
          </span>
        </Button>
        <span className="warning">Email is required</span>
      </div>
    </form>
  );
};
export default Form;
