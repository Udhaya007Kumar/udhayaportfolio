import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import homeImg from '../assets/homeImg.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="py-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Udhaya Kumar</span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold mb-6 h-16">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "React Developer",
                    1000,
                    "BackEnd Developer",
                    1000,
                    "React Specialist",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="text-gray-800 mb-8 text-lg">
              Experienced MERN Stack Developer specializing in building scalable,
               responsive, and user-centric web applications. 
               Proficient in React, frontend, and full-stack development, following modern best practices. Passionate about problem-solving and creating seamless digital experiences.
              </p>

              {/* Buttons Section */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors duration-200"
                >
                  View Projects <FaArrowRight className="ml-2 h-5 w-5" />
                </Link>

                {/* Social Links */}
                <div className="flex space-x-4 items-center">
                  <a
                    href="https://github.com/Udhaya007Kumar"
                    target="_blank"
                    className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200 "
                  >
                    <FaGithub className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/udhaya-kumar-rajendran-834372354"
                    target="_blank"
                    className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200"
                  >
                    <FaLinkedin className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Profile Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={homeImg}
                alt="Profile"
                className="w-80 h-80 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
