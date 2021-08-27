import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-700">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white sm:p-10 p-5 rounded-lg shadow-xl m-1 hover:shadow-2xl">
          <div className="sm:text-4xl text-2xl font-bold whitespace-nowrap">
            Sanjay Prajapati
          </div>
          <div className="sm:text-2xl text-lg text-center mt-3 mb-5 whitespace-nowrap">
            Software Engineer
          </div>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.github.com/sanjay270899"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2.5 rounded cursor-pointer hover:bg-black hover:text-white"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay270899"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2.5 rounded cursor-pointer hover:bg-black hover:text-white"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://www.twitter.com/sanjay270899"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black p-2.5 rounded cursor-pointer hover:bg-black hover:text-white"
            >
              <FaTwitter size={15} />
            </a>
          </div>
          <a
            href="mailto:sanjay270899@gmail.com"
            className="group flex items-center text-center bg-black text-white w-min whitespace-nowrap m-auto mt-7 px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-black border-2 border-black"
          >
            <RiSendPlaneFill size={17} className="group-hover:animate-ping" />
            <span className="ml-3 font-bold">Contact me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
