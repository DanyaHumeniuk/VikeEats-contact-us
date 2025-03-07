import React, { useState } from "react";
import "/src/Navbar.css";
import "./first-level-filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



const App = () => {

  return (

    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6 lg:fixed">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Vike<span className="text-gray-600">Eats</span></h1>
        <ul className="nav-links hidden md:flex">
          <li><a href="#" className="text-primary-dark hover:text-primary-light transition duration-300 ease-in-out">Food Establishments</a></li>
          <li><a href="#" className="text-primary-dark hover:text-primary-light transition duration-300 ease-in-out">Amenities</a></li>
          <li><a href="#" className="text-primary-dark hover:text-primary-light transition duration-300 ease-in-out">Contact Us</a></li>
        </ul>
      </nav>


      <div className="text-primary-dark w-full flex justify-center items-center mt-7 lg:mt-7 pt-9">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
      </div>



      <div className="max-w-[100%] w-full flex flex-col lg:flex-row justify-between items-start gap-12 mt-12 px-6 lg:px-20 pb-20">
        {/* Left Section: Info */}
        <div className="text-primary-dark w-full lg:w-3/5 bg-white p-16 rounded-lg shadow-md lg:min-h-[700px] py-18">

          {/* About VikeLabs */}
          <section className="mt-2">
            <h3 className="text-xl font-bold">What is VikeLabs?</h3>

            <p className="mt-2 text-primary-dark pt-4">
              VikeLabs is a collective of students who learn to build, deploy, and test software apps. We are a community of student developers, designers, and entrepreneurs who are passionate about designing software solutions for students and the UVic campus community.
            </p>

            <div className="py-5 ">
              <button className="text-primary-dark mt-4 bg-gray-200 p-3 rounded-lg flex items-center gap-2 hover:bg-primary-light hover:text-white transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faDiscord} className="text-xl" />
                Join Our Discord!
              </button>

            </div>

          </section>

          <hr className="my-6" />

          {/* About VikeEats */}
          <section className="text-primary-dark">
            <h3 className="text-xl font-bold pt-5">What is VikeEats?</h3>
            <p className="text-primary-dark mt-2 pt-4">
              VikeEats is a University of Victoria project that offers an interactive map of campus dining options, including cafeterias and restaurants. It highlights the sorts of foods offered at each restaurant, such as gluten-free, dairy-free, vegetarian, and vegan alternatives, allowing students and guests to make more educated dining choices.
            </p>
            <div className="flex py-5 justify-start gap-4">
              <button className="text-primary-dark mt-4 bg-gray-200 p-3 flex items-center gap-2 hover:bg-primary-light hover:text-white transition duration-300 ease-in-out rounded-3xl">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />

              </button>
              <button className="text-primary-dark mt-4 bg-gray-200 p-3 rounded-3xl flex items-center gap-2 hover:bg-primary-light hover:text-white transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faGithub} className="text-xl" />

              </button>
              <button className="text-primary-dark mt-4 bg-gray-200 p-3 rounded-3xl flex items-center gap-2 hover:bg-primary-light hover:text-white transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />

              </button>
              <button className="text-primary-dark mt-4 bg-gray-200 p-3 rounded-3xl flex items-center gap-2 hover:bg-primary-light hover:text-white transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />

              </button>
              <button className="text-primary-dark mt-4 bg-gray-200 p-3 rounded-3xl flex items-center gap-2 hover:bg-primary-light hover:text-white transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faYoutube} className="text-xl" />

              </button>
            </div>

          </section>
        </div>

        {/* Right Section: Contact Form */}
        <div className="text-primary-dark w-full lg:w-2/5 bg-white p-10 lg:p-12 rounded-lg shadow-md flex flex-col justify-between lg:min-h-[700px]">
          <form className="flex flex-col flex-grow">
            <label className="block font-semibold">Name</label>
            <input type="text" className="w-full p-3 border rounded mt-1" placeholder="Enter your name" />

            <label className="block font-semibold mt-4">Surname</label>
            <input type="text" className="w-full p-3 border rounded mt-1" placeholder="Enter your surname" />

            <label className="block font-semibold mt-4">Email</label>
            <input type="email" className="w-full p-3 border rounded mt-1" placeholder="Enter your email" />

            <label className="block font-semibold mt-4">Message</label>
            <textarea className="w-full p-3 border rounded mt-1 flex-grow min-h-[200px]" placeholder="Enter your message"></textarea>

            <button className="w-full bg-gray-900 text-white p-3 mt-4 rounded hover:bg-primary-light hover:text-white transition duration-300 ease-in-out">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;



