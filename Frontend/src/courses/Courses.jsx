import React from "react";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Courses() {
  return (
    <>
      <Header />
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
