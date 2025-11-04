import React, { useMemo } from "react";
import { SanitizedEducation } from "../../interfaces/sanitized-config";
import { skeleton } from "../../utils";
import {
  FaGraduationCap,
  FaUniversity,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

type NormalizedEducation = {
  degree?: string;
  institution?: string;
  institutionLink?: string;
  from: string;
  to: string;
  location?: string;
  summary?: string;
  isGraduate: boolean;
};

const normalizeEducations = (
  educations: SanitizedEducation[],
): NormalizedEducation[] => {
  const nowYear = new Date().getFullYear();

  const valueOf = (entry: SanitizedEducation) => {
    const end = entry.to;
    if (!end) return 0;
    if (end.toLowerCase().includes("present")) {
      return nowYear + 1;
    }
    const parts = end.split(" ");
    const maybeYear = parseInt(parts[parts.length - 1], 10);
    return Number.isNaN(maybeYear) ? 0 : maybeYear;
  };

  return [...educations]
    .sort((a, b) => valueOf(b) - valueOf(a))
    .map((edu) => {
      const degree = edu.degree || "";
      const lower = degree.toLowerCase();
      const isGraduate =
        lower.includes("master") ||
        lower.includes("m.s.") ||
        lower.includes("ph.d");

      return {
        degree,
        institution: edu.institution,
        institutionLink: (edu as any).institutionLink,
        from: edu.from,
        to: edu.to,
        location: (edu as any).Ilocation || (edu as any).location,
        summary: (edu as any).summary,
        isGraduate,
      } as NormalizedEducation;
    });
};

const renderSkeleton = () => (
  <div className="space-y-6">
    {[0, 1].map((idx) => (
      <div key={idx} className="space-y-2">
        <div className="space-y-2">
          {skeleton({ widthCls: "w-2/3", heightCls: "h-5" })}
          {skeleton({ widthCls: "w-3/5", heightCls: "h-4" })}
          {skeleton({ widthCls: "w-1/2", heightCls: "h-3" })}
          {skeleton({ widthCls: "w-5/6", heightCls: "h-4" })}
        </div>
      </div>
    ))}
  </div>
);

const EducationTimelineItem: React.FC<{ node: NormalizedEducation }> = ({
  node,
}) => {
  const {
    degree,
    institution,
    institutionLink,
    from,
    to,
    location,
    summary,
    isGraduate,
  } = node;

  const Icon = isGraduate ? FaGraduationCap : FaUniversity;

  return (
    <article className="space-y-2 p-4 border border-base-300/40 rounded-lg">
      <div className="flex flex-wrap items-center gap-2">
        <Icon className="text-primary" />
        <span className="text-base font-semibold text-base-content">
          {degree || "Program"}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/70">
        {institution && (
          <span className="inline-flex items-center gap-1">
            <FaUniversity className="text-xs opacity-80" />
            {institutionLink ? (
              <a
                href={institutionLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                <span>{institution}</span>
                <FaExternalLinkAlt className="text-[0.65rem] opacity-70" />
              </a>
            ) : (
              <span>{institution}</span>
            )}
          </span>
        )}

        {location && (
          <span className="inline-flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs opacity-80" />
            <span>{location}</span>
          </span>
        )}

        <span className="inline-flex items-center gap-1">
          <FaCalendarAlt className="text-xs opacity-80" />
          <span>
            {from} – {to}
          </span>
        </span>
      </div>

      {summary && (
        <p className="text-sm leading-relaxed text-base-content/70">
          {summary}
        </p>
      )}
    </article>
  );
};

const EducationCard: React.FC<{
  loading: boolean;
  educations: SanitizedEducation[];
}> = ({ loading, educations }) => {
  const timeline = useMemo(
    () => normalizeEducations(educations),
    [educations],
  );

  return (
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/30 backdrop-blur-sm">
      <div className="card-body">
        <div className="flex items-center mb-4">
          <FaGraduationCap className="text-primary mr-2 text-xl" />
          <h5 className="card-title text-base-content opacity-80 m-0 px-2">
            {loading
              ? skeleton({ widthCls: "w-32", heightCls: "h-8" })
              : <span>Education</span>}
          </h5>
        </div>

        <div className="text-base-content">
          {loading ? (
            renderSkeleton()
          ) : timeline.length === 0 ? (
            <p className="text-sm text-base-content/60">
              Education details coming soon.
            </p>
          ) : (
            <div className="space-y-4">
              {timeline.map((node, index) => (
                <EducationTimelineItem
                  key={`${node.degree}-${index}`}
                  node={node}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
