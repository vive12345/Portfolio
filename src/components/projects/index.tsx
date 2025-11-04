import React, { useMemo, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsFileEarmarkText } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { skeleton } from "../../utils";
import { SanitizedCustomProject } from "../../interfaces/sanitized-config";

type Props = {
  loading?: boolean;
  header: string;
  projects: SanitizedCustomProject[];
};

const linkConfig = [
  {
    key: "githubUrl" as const,
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    key: "companyUrl" as const,
    label: "Company",
    Icon: HiOutlineOfficeBuilding,
  },
  {
    key: "documentationUrl" as const,
    label: "Docs",
    Icon: BsFileEarmarkText,
  },
  {
    key: "articleUrl" as const,
    label: "Article",
    Icon: MdOutlineArticle,
  },
  {
    key: "youtubeUrl" as const,
    label: "YouTube",
    Icon: FaYoutube,
  },
];

const Projects: React.FC<Props> = ({ loading = false, header, projects }) => {
  const [selectedFilter, setSelectedFilter] = useState("industrial");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const hasProjects = projects?.length > 0;

  const filteredProjects = useMemo(() => {
    if (!hasProjects) {
      return [];
    }

    if (selectedFilter === "industrial") {
      return projects.filter(
        (project) => project.category?.toLowerCase() === "industrial"
      );
    }

    if (selectedFilter === "academic-personal") {
      return projects.filter((project) => {
        const category = project.category?.toLowerCase();
        return category === "academic" || category === "personal" || category === "academic/personal";
      });
    }

    return projects;
  }, [projects, selectedFilter, hasProjects]);

  const toggleProjectDetails = (name: string) => {
    setExpandedProject((prev) => (prev === name ? null : name));
  };

  const renderSkeletonCards = () =>
    Array.from({ length: Math.max(1, projects.length) || 2 }).map((_, index) => (
      <div
        className="card shadow-lg compact bg-transparent border border-slate-700/30"
        key={`project-skeleton-${index}`}
      >
        <div className="card-body space-y-4">
          {skeleton({ widthCls: "w-40", heightCls: "h-6" })}
          {skeleton({ widthCls: "w-24", heightCls: "h-5" })}
          <div className="space-y-2">
            {skeleton({ widthCls: "w-full", heightCls: "h-4" })}
            {skeleton({ widthCls: "w-5/6", heightCls: "h-4" })}
          </div>
          <div className="space-y-1">
            {skeleton({ widthCls: "w-32", heightCls: "h-4" })}
            {skeleton({ widthCls: "w-64", heightCls: "h-4" })}
          </div>
        </div>
      </div>
    ));

  const renderProjects = () =>
    filteredProjects.map((project) => {
      const projectLinks = linkConfig
        .map(({ key, label, Icon }) => {
          const url = project[key];
          return url
            ? {
                label,
                Icon,
                url,
              }
            : null;
        })
        .filter(Boolean) as Array<{
        label: string;
        Icon: React.ComponentType<{ className?: string }>;
        url: string;
      }>;

      const isExpanded = expandedProject === project.name;

      return (
        <div
          className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-600/30 backdrop-blur-sm"
          key={project.name}
        >
          <div className="card-body space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-start gap-2 justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-base-content/90">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {project.domain && (
                    <span className="badge badge-outline badge-sm uppercase tracking-wide">
                      {project.domain}
                    </span>
                  )}
                  {(project.whatIDid?.length || project.achievements?.length || project.improvements) && (
                    <button
                      onClick={() => toggleProjectDetails(project.name)}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
                      aria-expanded={isExpanded}
                      aria-controls={`${project.name}-details`}
                    >
                      <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                      {isExpanded ? (
                        <FaChevronUp className="text-xs" />
                      ) : (
                        <FaChevronDown className="text-xs" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              {project.about && (
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {project.about}
                </p>
              )}
              {project.timeline && (
                <p className="text-xs uppercase tracking-wide text-base-content/60">
                  {project.timeline}
                </p>
              )}
            </div>

            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {/* Keep the tech stack visually grouped */}
                {project.techStack.map((tech, index) => (
                  <span
                    key={`${project.name}-tech-${index}`}
                    className="badge badge-sm bg-base-200/60 text-base-content/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.contributors && project.contributors.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 text-sm text-base-content/70">
                <span className="font-medium text-base-content/80">
                  Contributors:
                </span>
                <span>{project.contributors.join(", ")}</span>
              </div>
            )}

            {isExpanded &&
              (project.whatIDid?.length ||
                project.achievements?.length ||
                project.improvements) && (
                <div
                  id={`${project.name}-details`}
                  className="mt-3 border-t border-base-300/40 pt-3"
                >
                  <ul className="list-disc pl-5 space-y-1 text-sm text-base-content/70">
                    {[
                      ...(project.whatIDid ?? []),
                      ...(project.achievements ?? []),
                      ...(project.improvements ? [project.improvements] : []),
                    ].map((line, index) => (
                      <li key={`${project.name}-detail-${index}`}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}

            {projectLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 text-sm text-primary/80">
                {projectLinks.map(({ label, Icon, url }) => (
                  <a
                    key={`${project.name}-${label}`}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary"
                  >
                    <Icon className="text-base" />
                    <span>{label}</span>
                    <FaExternalLinkAlt className="text-xs opacity-70" />
                  </a>
                ))}
              </div>
            )} 
          </div>
        </div>
      );
    });

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-transparent shadow-none">
        <div className="card-body px-0 pb-0">
          <div className="flex items-center justify-between mb-4">
            <h5 className="card-title text-base-content opacity-70">
              {loading ? (
                skeleton({ widthCls: "w-40", heightCls: "h-8" })
              ) : (
                <span>{header}</span>
              )}
            </h5>
            {!loading && hasProjects && (
              <select
                className="select select-sm bg-base-200/60 text-base-content/80"
                value={selectedFilter}
                onChange={(event) => setSelectedFilter(event.target.value)}
              >
                <option value="all">All Projects</option>
                <option value="industrial">Industrial Projects</option>
                <option value="academic-personal">Academic/Personal Projects</option>
              </select>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6">
            {loading
              ? renderSkeletonCards()
              : hasProjects
              ? filteredProjects.length > 0
                ? renderProjects()
                : (
                  <div className="text-sm text-base-content/60">
                    No projects found for this filter.
                  </div>
                )
              : (
                <div className="text-sm text-base-content/60">
                  Projects coming soon.
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
