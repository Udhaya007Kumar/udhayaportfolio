import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from "framer-motion";
import { fadeIn,slideIn,scale } from "../Utills/motion";


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-700 hover:text-gray-900"
          >
            <Github className="h-4 w-4 mr-1" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Landing Page ",
      description: "A simple and responsive landing page using semantic HTML, CSS, and vanilla JavaScript.I am working on the Figma page, ensuring all pages function correctly.Designed with clean and structured code for better accessibility.The website is fully responsive and optimized for different devices.A basic yet effective web project showcasing core frontend development skills.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Lasalon Software",
      description: "I was working in a supporting role for the Lasalon software.It uses a .NET backend and Node.js for debugging and data management.I handle salon-side issues, ensuring smooth functionality.If any issues arise, I am called to check and debug them.I work on identifying, debugging, and resolving issues efficiently, including SQL-related data management.Additionally, I developed and managed two form pages using React.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      tags: ["React", "Node.js", "Sql",".net"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
        id: 3,
        title: "Recipes App",
        description: "This project features a collection of Indian recipes that use a variety of spices like turmeric, cumin, garam masala, coriander, and others.It is built using React.js to display a dynamic and user-friendly interface for browsing recipes.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tags: ["React", "Node.js", "MongoDB","Redux","Express"],
        liveUrl: "https://indianspciesrecipesfd.vercel.app/",
        githubUrl: "https://github.com/Udhaya007Kumar/indianspciesrecipes"
      },
      {
        id: 4,
        title: "Landing page in React base",
        description: "A landing page with dynamic routing, developed for Jarvice software. ",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        tags: ["React", "React Router"],
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        id: 5,
        title: "ReelRemy ",
        description: "Streaming Guider Website, ReelRemy is thestreaming guide in the India, with every TV series and movieavailable online. Browse through every TV series and movieand sort by title, release year, genre, IMDB rating, and, mostimportant see where to watch it.",
        image: "https://www.lifewire.com/thmb/YIJRSbF_OET87qP4uwAaQtNi974=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hulu-movies-ad0c0ef9cdf6413bbe73e31b1a41234e.png",
        tags: ["Node.js", "Sql", "React"],
        liveUrl: "#",
        githubUrl: "#"
      },
      {
        id: 6,
        title: "WiseAnt AI Project",
        description: "WiseAnt AI is an advanced AI-powered tool for instant personal finance insights.It provides reliable financial advice from trusted sources.Built with React and AI facial recognition for a seamless user experience.Users can get quick answers to finance-related queries effortlessly.The software ensures accuracy and efficiency in financial decision-making",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        tags: ["React", "API Integration", "CSS Modules"],
        liveUrl: "https://ai.wiseant.co/",
        githubUrl: "#"
      },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "React", "API Integration", "Node.js"];

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="py-30 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
          </p>
        </motion.div>

        <motion.div variants={slideIn('right', 0.2)} initial="hidden" whileInView="show" className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div  variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
