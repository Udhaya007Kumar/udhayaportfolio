import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import homeImg from '../assets/homeImg.jpg';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utills/motion";


const About = () => {
    return (
      <div className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-gray-600">
              Hi, I'm
              <span className="font-semibold text-indigo-600">
                {" "}
                Udhayakumar
              </span>
              , a passionate
              <span className="font-semibold text-indigo-600">
                {" "}
                Full-Stack Developer
              </span>
              with 2 years of experience in MERN Stack Development. I specialize
              in building interactive and scalable web applications.
            </p>
          </motion.div>


          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            < motion.div  variants={fadeIn('Right', 0.5)}
        initial="hidden"
        whileInView="show" className="md:w-1/3">
              <img
                src={homeImg}
                alt="Udhayakumar"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"  className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who am I?
              </h2>
              <p className="text-gray-700 mb-4">
                I am a full-stack developer with expertise in React, Redux,
                Node.js, Express.js, and MongoDB. With a strong foundation in
                web development, I build efficient and scalable applications.
              </p>
              <p className="text-gray-700 mb-6">
                My journey started with a diploma in IT, and I transitioned into
                web development through continuous learning and hands-on
                projects. I have experience working on dynamic web applications
                like Landing Page, billing software, recipe Apps, Ai bot chat ,
                and streaming guider platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">Experience: 2+ years</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">Location: India</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">
                    Worked at: Jarvice, MouseBiz Pvt Ltd
                  </span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-700">
                    Bachelor of Computer Applications
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="mb-16">
            <motion.h2 variants={fadeIn('right', 0.6)} initial="hidden" whileInView="show" className="text-2xl font-bold text-gray-900 mb-6 text-center">
              My Journey
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  year: "jun- Present",
                  title: "Full Stack Developer",
                  company: "Jarvis Software Private Limited",
                  description:
                    "IMDB rating, and, mostimportant see where to watch it.",
                },
                {
                  year: "Mar 2023 to Jun 2024",
                  title: "Support Engineer",
                  company: "Mousebiz Infotech Pvt Ltd",
                  description:
                    "Lasalon: Developed and maintained web pages using Lasalon software.Handled backend errors and debugging to improve system stability.",
                },
                {
                  year: "sep 2013 to Mar 2023",
                  title: "Graphics Designer",
                  company: "Global Private Limited",
                  description:
                    "Designed numerous marketing campaigns Managed up to five projects at a time Took part in the company's rebranding Managed junior designers on projects.",
                },
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    {index < 2 && (
                      <div className="w-1 h-full bg-gray-300"></div>
                    )}
                  </div>
                  <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" className="bg-gray-50 p-6 rounded-lg shadow-md flex-1">
                    <div className="text-sm text-blue-500 font-semibold mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <div className="text-gray-600 mb-2">{item.company}</div>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
 
          {/* <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Personal Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[ 
                { name: "Coding Challenges", emoji: "💻" },
                { name: "Blogging about Tech", emoji: "✍️" },
                { name: "Exploring New Technologies", emoji: "🚀" },
                { name: "Mentoring Developers", emoji: "🎓" }
              ].map((interest, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-2">{interest.emoji}</div>
                  <div className="text-gray-900 font-medium">{interest.name}</div>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    );
};

export default About;
