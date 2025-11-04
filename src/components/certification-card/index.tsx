import React, { useState } from "react";
import { SanitizedCertification } from "../../interfaces/sanitized-config";
import { skeleton } from "../../utils";
import {
  FaCertificate,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaBuilding,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";

interface EnhancedCertification extends SanitizedCertification {}

const CertificationItem: React.FC<{
  cert: EnhancedCertification;
  expanded: boolean;
  toggleExpand: () => void;
}> = ({ cert, expanded, toggleExpand }) => {
  const { name, organization, year, link, body, image } = cert;

  return (
    <div className="flex flex-col sm:flex-row  bg-opacity-30 rounded-lg border border-base-300 border-opacity-30 transition-all duration-300 hover:shadow-md hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/30 overflow-hidden">
      {/* Left side: Large image */}
      {image && (
        <div className="flex-shrink-0 w-full sm:w-52  bg-opacity-30 flex items-center justify-center p-4">
          <img
            src={image}
            alt={`${name} badge`}
            className="w-full h-auto max-h-48 object-contain rounded-md"
          />
        </div>
      )}

      {/* Middle section: Certification info */}
      <div className="flex-1 p-4 flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-base-300 border-opacity-30">
        <h3 className="text-lg font-semibold text-primary mb-1">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:underline inline-flex items-center gap-1"
            >
              {name}
              <FaExternalLinkAlt className="text-xs opacity-70" />
            </a>
          ) : (
            name
          )}
        </h3>

        {organization && (
          <div className="flex items-center mt-1 text-sm opacity-80">
            <FaBuilding className="mr-2 text-xs text-base-content/60" />
            {organization}
          </div>
        )}

        {year && (
          <div className="flex items-center mt-1 text-xs opacity-60">
            <FaCalendarAlt className="mr-2 text-[0.7rem]" />
            {year}
          </div>
        )}
      </div>

      {/* Right side: What I Learned section */}
      <div
        className="sm:w-60 w-full bg-base-200 bg-opacity-40 border-t sm:border-t-0 sm:border-l border-base-300 border-opacity-30 flex flex-col justify-center items-center p-4 cursor-pointer hover:bg-base-200/70 transition"
        onClick={toggleExpand}
      >
        <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm">
          <FaBookOpen className="text-base" />
          <span>What I Learned</span>
          {expanded ? (
            <FaChevronUp className="text-xs opacity-70" />
          ) : (
            <FaChevronDown className="text-xs opacity-70" />
          )}
        </div>

        {expanded && body && (
          <div className="mt-3 text-xs text-base-content/80 leading-relaxed text-center">
            {body}
          </div>
        )}
      </div>
    </div>
  );
};

const CertificationCard: React.FC<{
  certifications: SanitizedCertification[];
  loading: boolean;
}> = ({ certifications, loading }) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const toggleExpand = (i: number) =>
    setExpandedItems((prev) => ({ ...prev, [i]: !prev[i] }));

  const renderSkeleton = () => (
    <div className="space-y-4">
      {[1, 2].map((_, i) => (
        <div
          key={i}
          className="bg-base-200 bg-opacity-30 rounded-lg p-4 border border-base-300 border-opacity-30 flex items-center"
        >
          {skeleton({
            widthCls: "w-20",
            heightCls: "h-20",
            className: "mr-4 rounded-md",
          })}
          <div className="flex-1">
            {skeleton({ widthCls: "w-3/4", heightCls: "h-5", className: "mb-2" })}
            {skeleton({ widthCls: "w-1/2", heightCls: "h-3", className: "mb-1" })}
            {skeleton({ widthCls: "w-1/3", heightCls: "h-3" })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/30 backdrop-blur-sm">
      <div className="card-body">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaCertificate className="text-primary mr-2 text-xl" />
            <h5 className="card-title text-base-content opacity-80 m-0 px-2">
              {loading
                ? skeleton({ widthCls: "w-32", heightCls: "h-8" })
                : "Certifications"}
            </h5>
          </div>
        </div>

        {loading ? (
          renderSkeleton()
        ) : (
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <CertificationItem
                key={i}
                cert={cert}
                expanded={!!expandedItems[i]}
                toggleExpand={() => toggleExpand(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
