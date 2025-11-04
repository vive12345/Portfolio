// src/components/about-me/index.tsx
import React from 'react';
import { SanitizedJourney } from '../../interfaces/sanitized-config';

const AboutMe = ({
  journey,
}: {
  journey?: SanitizedJourney;
}) => {
  return (
    <div className="col-span-1 lg:col-span-2 mb-6">
      <div className="bg-transparent">
        <div className="p-5">
          <h5 className="text-base-content opacity-90 text-xl font-bold mb-2">ABOUT ME</h5>
          
          {/* <div className="card bg-base-100 bg-opacity-30 shadow-lg p-6"> */}
          <div className="">
            <h2 className="text-3xl font-bold mb-6">WHO AM I?</h2>

            <p className="mb-4 text-lg leading-relaxed">
              <strong>Hi, I&apos;m Vipsa Kamani</strong> — an AI-first software engineer and M.S. candidate at Arizona State University who loves turning messy workflows into dependable, human-friendly products.
            </p>

            <p className="mb-4 leading-relaxed">
              I spend my days designing agentic BIM copilots, trading intelligence dashboards, and data-heavy automation so teams can audit every decision, not just the final answer. I move comfortably across TypeScript, Java, Python, and the ML stack to keep the experience cohesive from UI to inference.
            </p>

            <p className="mb-6 leading-relaxed">
              I grew up tinkering with code in Ahmedabad, now craft agentic AI with AutoBIM Route while finishing my graduate program at ASU. Past gigs at Rapidise and university labs taught me how to partner tightly with stakeholders, ship fast, and keep the humans in the loop. If there’s a workflow that feels opaque or slow, I’m probably trying to make it clearer, faster, and a little more delightful.
            </p>

            {journey && (
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-semibold">
                  {journey.title}
                </h3>
                {journey.subtitle && (
                  <p className="uppercase text-sm tracking-wide text-primary/80">
                    {journey.subtitle}
                  </p>
                )}
                {journey.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
