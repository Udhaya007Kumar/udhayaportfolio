import React from 'react';
import { motion } from "framer-motion";
import { fadeIn,staggerContainer } from "../Utills/motion";

const SkillBar = ({ name, level, color }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-gray-700 font-medium">{name}</span>
          <span className="text-gray-600">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${color}`} 
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  const SkillCard = ({ name, icon }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-3">
        <div className="text-2xl">{icon}</div>
        <span className="font-medium text-gray-800">{name}</span>
      </div>
    );
  };
  

const Skills = () => {
    const frontendSkills = [
        { name: 'HTML/CSS', level: 95, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-blue-500' },
        { name: 'React', level: 92, color: 'bg-blue-500' },
        { name: 'Redux', level: 70, color: 'bg-blue-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-blue-500' },
      ];
      const backendSkills = [
        { name: 'Node.js', level: 80, color: 'bg-green-500' },  
        { name: 'Express', level: 75, color: 'bg-green-500' },
        { name: '.Net', level: 50, color: 'bg-green-500' },
        { name: 'MongoDB', level: 70, color: 'bg-green-500' },
        { name: 'SQL', level: 65, color: 'bg-green-500' },
      ];
    
      const tools = [
        { name: 'Git', icon: '🔄' },
        { name: 'VS Code', icon: '📝' },
        { name: 'Figma', icon: '🎨' },
        { name: 'NPM', icon: '📦' },
        { name: 'Postman', icon: '📮' },
      ];
    
      const softSkills = [
        { name: 'Problem Solving', icon: '🧩' },
        { name: 'Communication', icon: '🗣️' },
        { name: 'Teamwork', icon: '👥' },
        { name: 'Time Management', icon: '⏰' },
        { name: 'Adaptability', icon: '🔄' },
        { name: 'Creativity', icon: '💡' },
      ];
    return (
        <div className="py-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">My Skills</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here's an overview of my technical skills and expertise in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frontend Development</h2>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Backend Development</h2>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>

        <motion.div 
        variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show"
         className="mb-16">
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" className="text-2xl font-bold text-gray-900 mb-6 text-center">Tools & Technologies</motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <SkillCard key={index} {...tool} />
            ))}
          </div>
        </motion.div>
        <div>
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" className="text-2xl font-bold text-gray-900 mb-6 text-center">Soft Skills</motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>


      </div>
    </div>
    );
};

export default Skills;