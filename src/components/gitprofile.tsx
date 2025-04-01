import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { formatDistance } from "date-fns";
import { HelmetProvider } from "react-helmet-async";

// Components
import Navbar from "./navbar";
import ErrorPage from "./error-page";
import HeadTagEditor from "./head-tag-editor";
import AboutMe from "./about-me";
import ExperienceCard from "./experience-card";
import EducationCard from "./education-card";
import SkillCard from "./skill-card";
import GithubProjectCard from "./github-project-card";
import PublicationCard from "./publication-card";
import ExternalProjectCard from "./external-project-card";
import BlogCard from "./blog-card";
import Footer from "./footer";
import Starfield from "./starfield";
import TestimonialCard from "./testimonial-card";

// Constants and utils
import {
  CustomError,
  GENERIC_ERROR,
  INVALID_CONFIG_ERROR,
  INVALID_GITHUB_USERNAME_ERROR,
  setTooManyRequestError,
} from "../constants/errors";
// import { DEFAULT_THEMES } from '../constants/default-themes';
import { BG_COLOR } from "../constants";
import { getSanitizedConfig, setupHotjar } from "../utils";

// Types
import { SanitizedConfig } from "../interfaces/sanitized-config";
import { Profile } from "../interfaces/profile";
import { GithubProject } from "../interfaces/github-project";

// Styles
import "../assets/index.css";

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */
const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config)
  );
  // const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);

  const getGithubProjects = useCallback(
    async (publicRepoCount: number): Promise<GithubProject[]> => {
      if (sanitizedConfig.projects.github.mode === "automatic") {
        if (publicRepoCount === 0) {
          return [];
        }

        const excludeRepo =
          sanitizedConfig.projects.github.automatic.exclude.projects
            .map((project) => `+-repo:${project}`)
            .join("");

        const query = `user:${sanitizedConfig.github.username}+fork:${!sanitizedConfig.projects.github.automatic.exclude.forks}${excludeRepo}`;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.projects.github.automatic.sortBy}&per_page=${sanitizedConfig.projects.github.automatic.limit}&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { "Content-Type": "application/vnd.github.v3+json" },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      } else {
        if (sanitizedConfig.projects.github.manual.projects.length === 0) {
          return [];
        }
        const repos = sanitizedConfig.projects.github.manual.projects
          .map((project) => `+repo:${project}`)
          .join("");

        const url = `https://api.github.com/search/repositories?q=${repos}+fork:true&type=Repositories`;

        const repoResponse = await axios.get(url, {
          headers: { "Content-Type": "application/vnd.github.v3+json" },
        });
        const repoData = repoResponse.data;

        return repoData.items;
      }
    },
    [
      sanitizedConfig.github.username,
      sanitizedConfig.projects.github.mode,
      sanitizedConfig.projects.github.manual.projects,
      sanitizedConfig.projects.github.automatic.sortBy,
      sanitizedConfig.projects.github.automatic.limit,
      sanitizedConfig.projects.github.automatic.exclude.forks,
      sanitizedConfig.projects.github.automatic.exclude.projects,
    ]
  );

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${sanitizedConfig.github.username}`
      );
      const data = response.data;

      setProfile({
        avatar: data.avatar_url,
        name: data.name || " ",
        bio: data.bio || "",
        location: data.location || "",
        company: data.company || "",
      });

      if (!sanitizedConfig.projects.github.display) {
        return;
      }

      setGithubProjects(await getGithubProjects(data.public_repos));
    } catch (error) {
      handleError(error as AxiosError | Error);
    } finally {
      setLoading(false);
    }
  }, [
    sanitizedConfig.github.username,
    sanitizedConfig.projects.github.display,
    getGithubProjects,
  ]);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      // setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig, loadData]);

  // useEffect(() => {
  //   // theme && document.documentElement.setAttribute('data-theme', theme);
  // }, [theme]);

  const handleError = (error: AxiosError | Error): void => {
    console.error("Error:", error);

    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(
          new Date(error.response?.headers?.["x-ratelimit-reset"] * 1000),
          new Date(),
          { addSuffix: true }
        );

        if (typeof error.response?.status === "number") {
          switch (error.response.status) {
            case 403:
              setError(setTooManyRequestError(reset));
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError) {
        setError(GENERIC_ERROR);
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

  // Common styling for section cards
  const sectionClass = "mb-8"; // Consistent bottom margin for all sections

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        <Starfield />
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            {/* <HeadTagEditor
              googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
              appliedTheme={theme}
            /> */}
            <Navbar
              github={sanitizedConfig.github}
              social={sanitizedConfig.social}
              loading={loading}
            />

            <div className="p-4 lg:p-10 min-h-full bg-opacity-70 bg-base-300">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {" "}
                  {/* Consistent vertical spacing */}
                  {/* About Me Section */}
                  <div className={sectionClass} id="about">
                    <AboutMe />
                  </div>
                  {/* Experience Section */}
                  {sanitizedConfig.experiences.length !== 0 && (
                    <div className={sectionClass} id="experience">
                      <ExperienceCard
                        loading={loading}
                        experiences={sanitizedConfig.experiences}
                      />
                    </div>
                  )}
                  {/* Education Section */}
                  {sanitizedConfig.educations.length !== 0 && (
                    <div className={sectionClass} id="education">
                      <EducationCard
                        loading={loading}
                        educations={sanitizedConfig.educations}
                      />
                    </div>
                  )}
                  {/* Skills Section */}
                  {sanitizedConfig.skills.length !== 0 && (
                    <div className={sectionClass} id="skills">
                      <SkillCard
                        loading={loading}
                        skills={sanitizedConfig.skills}
                      />
                    </div>
                  )}
                  {/* GitHub Projects Section */}
                  {sanitizedConfig.projects.github.display && (
                    <div className={sectionClass} id="projects">
                      <GithubProjectCard
                        header={sanitizedConfig.projects.github.header}
                        limit={sanitizedConfig.projects.github.automatic.limit}
                        githubProjects={githubProjects}
                        loading={loading}
                        username={sanitizedConfig.github.username}
                        googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                      />
                    </div>
                  )}
                  {/* Publications Section */}
                  {sanitizedConfig.publications.length !== 0 && (
                    <div className={sectionClass} id="publications">
                      <PublicationCard
                        loading={loading}
                        publications={sanitizedConfig.publications}
                      />
                    </div>
                  )}
                  {sanitizedConfig.testimonials.length !== 0 && (
                    <div className={sectionClass} id="testimonials">
                      <TestimonialCard
                        loading={loading}
                        testimonials={sanitizedConfig.testimonials}
                      />
                    </div>
                  )}
                  {/* External Projects Section */}
                  {sanitizedConfig.projects.external.projects.length !== 0 && (
                    <div className={sectionClass} id="external-projects">
                      <ExternalProjectCard
                        loading={loading}
                        header={sanitizedConfig.projects.external.header}
                        externalProjects={
                          sanitizedConfig.projects.external.projects
                        }
                        googleAnalyticId={sanitizedConfig.googleAnalytics.id}
                      />
                    </div>
                  )}
                  {/* Blog Section */}
                  {sanitizedConfig.blog.display && (
                    <div className={sectionClass} id="blog">
                      <BlogCard
                        loading={loading}
                        googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
                        blog={sanitizedConfig.blog}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Section */}
            {sanitizedConfig.footer && (
              <footer
                className={`p-4 footer ${BG_COLOR} text-base-content footer-center`}
              >
                <div className="card compact bg-base-100 shadow-lg">
                  <Footer content={sanitizedConfig.footer} loading={loading} />
                </div>
              </footer>
            )}
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;
