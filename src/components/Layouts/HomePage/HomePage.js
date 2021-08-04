import React from "react";
import AccessMode from "./AccessMode";
import ChildContent from "./ChildContent";
import DownloadMode from "./DownloadMode";
import Faq from "./Faq";
import Header from "./Header";
import "./HomePage.scss";
import Signup from "./Signup";
import TVmode from "./TVmode";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Signup />
      <TVmode />
      <DownloadMode />
      <AccessMode />
      <ChildContent />
      <Faq />
      <Footer />
    </div>
  );
};
export default HomePage;
