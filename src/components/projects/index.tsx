import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
  FaLayerGroup,
  FaIndustry,
  FaUserGraduate,
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

const filterOptions = [
  {
    value: "all" as const,
    label: "All Projects",
    description: "Browse the complete set of projects.",
    Icon: FaLayerGroup,
  },
  {
    value: "industrial" as const,
    label: "Industrial Projects",
    description: "Focus on client and organizational collaborations.",
    Icon: FaIndustry,
  },
  {
    value: "academic-personal" as const,
    label: "Academic/Personal Projects",
    description: "Highlight learning journeys and passion work.",
    Icon: FaUserGraduate,
  },
];

const Projects: React.FC<Props> = ({ loading = false, header, projects }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const hasProjects = projects?.length > 0;
  const selectedFilterOption =
    filterOptions.find((option) => option.value === selectedFilter) ?? filterOptions[0];
  const SelectedFilterIcon = selectedFilterOption.Icon;

  useEffect(() => {
    if (!isFilterMenuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target as Node)
      ) {
        setIsFilterMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFilterMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFilterMenuOpen]);

  const filteredProjects = useMemo(() => {
    if (!hasProjects) {
      return [];
    }

    const normalizeCategory = (category?: string) =>
      category?.toLowerCase().trim() ?? "";

    if (selectedFilter === "industrial") {
      return projects.filter(
        (project) => normalizeCategory(project.category) === "industrial"
      );
    }

    if (selectedFilter === "academic-personal") {
      return projects.filter((project) => {
        const category = normalizeCategory(project.category);
        return (
          category === "academic" ||
          category === "personal" ||
          category === "academic/personal" ||
          category === "industrial/personal"
        );
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
              <div className="relative" ref={filterMenuRef}>
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-full border border-primary/50 bg-gradient-to-r from-cyan-500/40 via-primary/25 to-purple-500/40 px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors duration-200 hover:from-cyan-500/45 hover:to-purple-500/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  onClick={() => setIsFilterMenuOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isFilterMenuOpen}
                  aria-label="Filter projects"
                >
                  <SelectedFilterIcon className="text-lg" />
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[0.65rem] uppercase tracking-wide text-primary/70">
                      Filter
                    </span>
                    <span className="text-sm font-semibold text-base-content/90">
                      {selectedFilterOption.label}
                    </span>
                  </span>
                  <span className="ml-auto text-primary">
                    {isFilterMenuOpen ? (
                      <FaChevronUp className="text-xs" />
                    ) : (
                      <FaChevronDown className="text-xs" />
                    )}
                  </span>
                </button>
                {isFilterMenuOpen && (
                  <div
                    role="listbox"
                    aria-label="Project categories"
                    className="absolute right-0 z-20 mt-2 w-72 space-y-1 rounded-2xl border border-base-300/70 bg-base-100 p-3 shadow-2xl"
                  >
                    {filterOptions.map((option) => {
                      const isActive = option.value === selectedFilter;
                      const OptionIcon = option.Icon;

                      return (
                        <button
                          type="button"
                          key={option.value}
                          role="option"
                          aria-selected={isActive}
                          onClick={() => {
                            setSelectedFilter(option.value);
                            setIsFilterMenuOpen(false);
                          }}
                          className={`flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-200 ${
                            isActive
                              ? "bg-primary/20 text-primary shadow-inner"
                              : "text-base-content/80 hover:bg-base-300/60 hover:text-base-content"
                          }`}
                        >
                          <OptionIcon
                            className={`mt-0.5 text-lg ${
                              isActive ? "text-primary" : "text-base-content/60"
                            }`}
                          />
                          <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold">
                              {option.label}
                            </span>
                            <span className="text-xs text-base-content/60">
                              {option.description}
                            </span>
                          </span>
                          {isActive && (
                            <span className="ml-auto text-[0.65rem] uppercase tracking-wide text-primary">
                              Active
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
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
