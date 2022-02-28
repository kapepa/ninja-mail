import React from "react";
import Header from "../component/header.section";
import ReachSection from "../component/reach.section";
import SourseSection from "../component/sourse.section";
import LearnSection from "../component/learn.section";
import BrandsSection from "../component/brands.section";
import StartedSection from "../component/started.section";
import FooterSection from "../component/footer.section";

const Home = function () {
  return (
    <>
      <Header/>
      <ReachSection/>
      <SourseSection/>
      <LearnSection/>
      <BrandsSection/>
      <StartedSection/>
      <FooterSection/>
    </>
  )
}

export default Home;