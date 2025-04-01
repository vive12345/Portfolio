// src/components/about-me/index.tsx
import React from 'react';

const AboutMe = () => {
  return (
    <div className="col-span-1 lg:col-span-2 mb-6">
      <div className="bg-transparent">
        <div className="p-5">
          <h5 className="text-base-content opacity-90 text-xl font-bold mb-2">ABOUT ME</h5>
          
          {/* <div className="card bg-base-100 bg-opacity-30 shadow-lg p-6"> */}
          <div className="">
            <h2 className="text-3xl font-bold mb-8">WHO AM I?</h2>
            
            <p className="mb-4 text-lg">
              <strong>Hi, I'm [Your Name]</strong> - a [Your Title] passionate about crafting innovative, 
              AI-powered solutions that drive innovation, empower teams, and delight users.
            </p>
            
            <p className="mb-4">
              With over [X] years of experience spanning the [Industry 1], [Industry 2], and [Industry 3] sectors, 
              I thrive at the intersection of strategy, technology, and user experience. I believe in the power 
              of aligning bold vision with data-driven insights – shaping scalable, intuitive products that 
              deliver tangible business results.
            </p>
            
            <p className="mb-8">
              My goal is to create meaningful, human-centric solutions that meet user needs, drive business success, 
              and shape the future of the tech industry. With a learner's mindset and adaptability at my core, 
              I execute with clarity and purpose, continuously striving to push boundaries and evolve alongside emerging trends.
            </p>
            
            {/* Company logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
              {/* Add your company logos here */}
              {/* Example: */}
              {/* <img src="/path/to/logo1.png" alt="Company 1" className="h-12" /> */}
              {/* <img src="/path/to/logo2.png" alt="Company 2" className="h-12" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;