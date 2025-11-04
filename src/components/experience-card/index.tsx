import React, { useState } from "react";
import { SanitizedExperience } from "../../interfaces/sanitized-config";
import { skeleton } from "../../utils";
import {
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaBuilding,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


// Extended experience interface with additional fields
interface EnhancedExperience extends SanitizedExperience {
  description?: string[];
  technologies?: string[];
  location?: string;
}

const ExperienceItem: React.FC<{
  experience: EnhancedExperience;
  expanded: boolean;
  toggleExpand: () => void;
}> = ({ experience, expanded, toggleExpand }) => {
  const {
    from,
    to,
    position,
    company,
    companyLink,
    description,
    technologies,
    location,
  } = experience;

  return (
    <div className="mb-6 bg-base-100 bg-opacity-30 rounded-lg p-4 border border-base-300 border-opacity-30 transition-all duration-300 hover:shadow-md">
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex-1">
          <div className="flex items-center">
            <FaBriefcase className="text-primary opacity-70 mr-2 mt-1" />
            <h3 className="font-bold text-base">{position}</h3>
          </div>
         
          <div className="flex items-center mt-2">
            <FaBuilding className="text-base-content opacity-50 mr-2 text-sm" />
            <div className="text-sm font-medium">
              {companyLink ? (
                <a
                  href={companyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors flex items-center space-x-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{company}</span>
                  <FaExternalLinkAlt className="text-xs opacity-70" />
                </a>
              ) : (
                <span>{company}</span>
              )}
            </div>
          </div>
          <div className="flex items-center mt-1">
            <FaCalendarAlt className="text-base-content opacity-50 mr-2 text-xs" />
            <div className="text-xs opacity-60">
              {from} - {to}
            </div>
          </div>
          {location && (
            <div className="flex items-center mt-1">
              <FaMapMarkerAlt className="text-base-content opacity-50 mr-2 text-xs" />
              <div className="text-xs opacity-60">{location}</div>
            </div>
          )}
        </div>

        <div className="pt-1">
          {expanded ? (
            <FaChevronUp className="text-primary opacity-70" />
          ) : (
            <FaChevronDown className="text-primary opacity-70" />
          )}
        </div>
      </div>

      {expanded && (
        <div className="mt-4 pt-3 border-t border-base-300 border-opacity-30">
          {/* Description section - existing */}
          {description && description.length > 0 && (
            <div className="mb-3 space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-base-content/80 mb-1">
                  Project Overview
                </h4>
                <p className="text-sm leading-relaxed text-base-content/80">
                  {description[0]}
                </p>
              </div>
              {description.length > 1 && (
                <div>
                  <h4 className="text-sm font-semibold text-base-content/80 mb-1">
                    Contributions & Outcomes
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm opacity-80">
                    {description.slice(1).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Technologies section - existing */}
          {technologies && technologies.length > 0 && (
            <div className="mt-3">
              <h4 className="text-sm font-semibold mb-2">
                Technologies & Skills:
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary bg-opacity-10 text-primary text-opacity-80 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

// Group experiences by category: Current, Previous, Side Projects
const categorizeExperiences = (experiences: EnhancedExperience[]) => {
  const categories = {
    current: [] as EnhancedExperience[],
    previous: [] as EnhancedExperience[],
    sideProjects: [] as EnhancedExperience[],
  };

  // Sort experiences by date (assuming "to" could be a year or "Present")
  const sortedExperiences = [...experiences].sort((a, b) => {
    const yearA =
      a.to === "Present"
        ? new Date().getFullYear() + 1
        : parseInt(a.to.split(" ").pop() || "0");
    const yearB =
      b.to === "Present"
        ? new Date().getFullYear() + 1
        : parseInt(b.to.split(" ").pop() || "0");
    return yearB - yearA;
  });

  sortedExperiences.forEach((exp) => {
    // Check if this is a current position
    if (exp.to === "Present") {
      categories.current.push(exp);
    }
    // Check if this is a side project or development role (can be customized based on specific keywords)
    else if (
      exp.position?.toLowerCase().includes("side") ||
      exp.position?.toLowerCase().includes("freelance") ||
      exp.position?.toLowerCase().includes("development") ||
      (exp as any).type === "sideProject"
    ) {
      categories.sideProjects.push(exp);
    }
    // Otherwise, it's a previous position
    else {
      categories.previous.push(exp);
    }
  });

  return categories;
};

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  // Convert to enhanced experiences (if some data is missing, it will be undefined)
  const enhancedExperiences: EnhancedExperience[] = experiences.map((exp) => ({
    ...exp,
    description: (exp as any).description || [],
    technologies: (exp as any).technologies || [],
    location: (exp as any).location,
  }));

  // Track expanded state for each experience item
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Categorize experiences
  const categorizedExperiences = categorizeExperiences(enhancedExperiences);

  // Calculate total years of experience
  const calculateExperienceYears = () => {
    if (experiences.length === 0) return 0;

    let totalMonths = 0;
    experiences.forEach((exp) => {
      // Skip side projects in total experience calculation if needed
      if ((exp as any).type === "sideProject") return;

      const fromDate = new Date(exp.from);
      const toDate = exp.to === "Present" ? new Date() : new Date(exp.to);

      const monthDiff =
        (toDate.getFullYear() - fromDate.getFullYear()) * 12 +
        (toDate.getMonth() - fromDate.getMonth());

      totalMonths += monthDiff > 0 ? monthDiff : 0;
    });

    return Math.round((totalMonths / 12) * 10) / 10; // Round to 1 decimal place
  };

  const experienceYears = calculateExperienceYears();

  const renderSkeleton = () => {
    return (
      <div className="space-y-5">
        {[1, 2].map((_, index) => (
          <div key={index} className="bg-base-100 bg-opacity-30 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {skeleton({
                  widthCls: "w-3/4",
                  heightCls: "h-5",
                  className: "mb-3",
                })}
                {skeleton({
                  widthCls: "w-1/2",
                  heightCls: "h-4",
                  className: "mb-2",
                })}
                {skeleton({
                  widthCls: "w-2/5",
                  heightCls: "h-3",
                  className: "mb-1",
                })}
                {skeleton({ widthCls: "w-1/3", heightCls: "h-3" })}
              </div>
              <div>
                {skeleton({
                  widthCls: "w-4",
                  heightCls: "h-4",
                  shape: "rounded",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/30 backdrop-blur-sm">
      <div className="card-body">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaBriefcase className="text-primary mr-2 text-xl" />
            <h5 className="card-title text-base-content opacity-80 m-0 px-2">
              {loading ? (
                skeleton({ widthCls: "w-32", heightCls: "h-8" })
              ) : (
                <span>Experience</span>
              )}
            </h5>
          </div>

          {!loading && experienceYears > 0 && (
            <div className="bg-primary bg-opacity-10 px-3  py-1 rounded-full text-xs text-primary text-opacity-80">
              {experienceYears} {experienceYears === 1 ? "year" : "years"}
            </div>
          )}
        </div>

        <div className="text-base-content">
          {loading ? (
            renderSkeleton()
          ) : (
            <div className="space-y-6">
              {/* Current positions */}
              {categorizedExperiences.current.length > 0 && (
                <div className="mb-6">
                  {/* <h3 className="text-base-content opacity-80 font-bold mb-3 pl-2 border-l-4 border-primary">
                    Current
                  </h3> */}
                  <div className="space-y-3">
                    {categorizedExperiences.current.map((exp, index) => (
                      <ExperienceItem
                        key={`current-${index}`}
                        experience={exp}
                        expanded={!!expandedItems[index]}
                        toggleExpand={() => toggleExpand(index)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Previous experience */}
              {categorizedExperiences.previous.length > 0 && (
                <div className="mb-6">
                  {/* <h3 className="text-base-content opacity-80 font-bold mb-3 pl-2 border-l-4 border-primary">
                    Previous Experience
                  </h3> */}
                  <div className="space-y-3">
                    {categorizedExperiences.previous.map((exp, index) => (
                      <ExperienceItem
                        key={`previous-${index}`}
                        experience={exp}
                        expanded={!!expandedItems[100 + index]}
                        toggleExpand={() => toggleExpand(100 + index)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Side Projects */}
              {categorizedExperiences.sideProjects.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-base-content opacity-80 font-bold mb-3 pl-2 border-l-4 border-purple-500">
                    Side Projects / Development
                  </h3>
                  <div className="space-y-3">
                    {categorizedExperiences.sideProjects.map((exp, index) => (
                      <ExperienceItem
                        key={`side-${index}`}
                        experience={exp}
                        expanded={!!expandedItems[200 + index]}
                        toggleExpand={() => toggleExpand(200 + index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
