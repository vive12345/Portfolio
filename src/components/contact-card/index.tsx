import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SanitizedSocial, SanitizedResume } from "../../interfaces/sanitized-config";
import { Profile } from "../../interfaces/profile";
import { skeleton } from "../../utils";

type Props = {
  loading?: boolean;
  social: SanitizedSocial;
  resume: SanitizedResume;
  githubUsername: string;
  profile: Profile | null;
};

const ContactCard: React.FC<Props> = ({
  loading = false,
  social,
  resume,
  githubUsername,
  profile,
}) => {
  const contactOptions = [
    social.email && {
      label: social.email,
      href: `mailto:${social.email}`,
      icon: <FaEnvelope />,
    },
    social.linkedin && {
      label: "LinkedIn",
      href: `https://www.linkedin.com/in/${social.linkedin}`,
      icon: <FaLinkedin />,
    },
    githubUsername && {
      label: "GitHub",
      href: `https://github.com/${githubUsername}`,
      icon: <FaGithub />,
    },
    resume?.fileUrl && {
      label: "Download Resume",
      href: resume.fileUrl,
      icon: <FaFileDownload />,
    },
  ].filter(Boolean) as Array<{ label: string; href: string; icon: React.ReactNode }>;

  return (
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-green-400/20 hover:to-blue-500/20 backdrop-blur-sm">
      <div className="card-body space-y-4">
        <h5 className="card-title text-base-content opacity-80">
          {loading ? skeleton({ widthCls: "w-32", heightCls: "h-6" }) : "Contact"}
        </h5>

        {profile?.location && !loading && (
          <div className="flex items-center gap-2 text-sm text-base-content/70">
            <FaMapMarkerAlt className="text-base-content/60" />
            <span>{profile.location}</span>
          </div>
        )}

        <div className="grid gap-3">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  {skeleton({ widthCls: "w-10", heightCls: "h-10", shape: "rounded-full" })}
                  {skeleton({ widthCls: "w-40", heightCls: "h-4" })}
                </div>
              ))
            : contactOptions.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="flex items-center gap-3 p-3 rounded-lg border border-base-300 border-opacity-40 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                >
                  <span className="text-primary text-lg">{icon}</span>
                  <span className="text-sm text-base-content/80">{label}</span>
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
