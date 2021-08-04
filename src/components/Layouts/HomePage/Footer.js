import React from "react";
import LanguagePicker from "../../UI/LanguagePicker";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer--questions">
        <p>Questions? Call +91-868-090-4530</p>
      </div>
      <div className="footer--links">
        <a href="#!">FAQ</a>
        <a href="#!">Help Centre</a>
        <a href="#!">Account</a>
        <a href="#!">Media Centre</a>
        <a href="#!">Investor Relations</a>
        <a href="#!">Jobs</a>
        <a href="#!">Ways to Watch</a>
        <a href="#!">Terms of Use</a>

        <a href="#!">Privacy</a>
        <a href="#!">Cookie Preference</a>
        <a href="#!">Corporate Information</a>
        <a href="#!">Contact Us</a>
        <a href="#!">Speed Test</a>
        <a href="#!">Legal Notices</a>
        <a href="#!">Only on Netflix</a>
      </div>
      <div className="footer--language">
        <LanguagePicker
          className="footer--language--picker"
          selectClass="footer--language--picker__select"
          iconClass="footer--language--picker__icon"
        />
      </div>
      <div className="footer--copyright">
        <p>Netflix India</p>
      </div>
    </section>
  );
};
export default Footer;
