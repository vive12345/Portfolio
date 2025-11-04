// src/components/about-me/index.tsx
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
          <div className="select-text">
            <h2 className="text-3xl font-bold mb-6">WHO AM I?</h2>

            <p className="mb-4 text-lg leading-relaxed">
              I’m <strong>Vipsa Kamani</strong>, a new-generation AI Software Engineer and M.S. candidate at Arizona State University.
            </p>

            <p className="mb-4 leading-relaxed">
              What sets me apart from traditional engineers is that I code with AI—using generative tools to accelerate development, automate repetitive tasks, and deliver production-ready solutions at today’s AI speed.
            </p>

            <p className="mb-4 leading-relaxed">
              I combine creativity, technical depth, and an instinct for human-focused design to turn complex workflows into simple, high-impact products.
            </p>

            <p className="mb-2 leading-relaxed">
              If a workflow feels slow, I’ll make it faster.<br />
              If a process feels opaque, I’ll make it clear.<br />
              If a product feels robotic, I’ll make it human.
            </p>

            <p className="mb-6 leading-relaxed">
              That’s the kind of impact I aim to make wherever I go.
            </p>

            {journey && (
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-semibold">
                  {journey.title}
                </h3>
                {journey.subtitle && (
                  <p className="uppercase text-sm tracking-wide text-primary/80 select-text">
                    {journey.subtitle}
                  </p>
                )}
                {journey.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed select-text">
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
