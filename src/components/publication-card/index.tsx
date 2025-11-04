import React from "react";
import {
  FaBook,
  FaUserAlt,
  FaUniversity,
  FaExternalLinkAlt,
  FaCodeBranch,
} from "react-icons/fa";
import { SanitizedPublication } from "../../interfaces/sanitized-config";
import { skeleton } from "../../utils";

const PublicationCard = ({
  publications,
  loading,
}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  // 🔹 Skeleton loader for horizontal layout
  const renderSkeleton = () =>
    Array.from({ length: publications.length || 3 }).map((_, i) => (
      <div
        key={i}
        className="bg-base-100 bg-opacity-20 border border-base-300 border-opacity-30 rounded-xl p-5 mb-4 flex flex-col sm:flex-row items-start justify-between"
      >
        <div className="flex-1">
          {skeleton({ widthCls: "w-3/4", heightCls: "h-5", className: "mb-3" })}
          {skeleton({ widthCls: "w-1/2", heightCls: "h-4", className: "mb-2" })}
          {skeleton({ widthCls: "w-full", heightCls: "h-3" })}
        </div>
      </div>
    ));

  // 🔹 Render publication rows
  const renderPublications = () =>
    publications.map((item, index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between bg-base-100 bg-opacity-20 border border-base-300 border-opacity-30 rounded-xl p-5 mb-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-teal-600/20"
      >
        {/* Left Side: Title + Meta */}
        <div className="flex-1 pr-4">
          <h2 className="font-semibold text-base-content opacity-90 mb-2 flex items-center text-lg">
            <FaBook className="mr-2 text-primary opacity-80" />
            {item.title}
            <FaExternalLinkAlt className="ml-2 text-xs opacity-70 group-hover:text-primary" />
          </h2>

          {/* Journal or PR Source */}
          {(item.conferenceName || item.journalName) && (
            <div className="flex items-center text-sm text-base-content/70 mb-1">
              <FaUniversity className="mr-2 text-[0.8rem] text-primary/70" />
              {item.journalName || item.conferenceName}
            </div>
          )}

          {/* Authors / Role */}
          {item.authors && (
            <div className="flex items-center text-sm text-base-content/70 mb-2">
              <FaUserAlt className="mr-2 text-[0.8rem] text-primary/70" />
              {item.authors}
            </div>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-sm text-base-content/80 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>

        {/* Right Side: Small Tag */}
        <div className="mt-3 sm:mt-0 flex items-center justify-end text-xs text-primary/70 font-medium whitespace-nowrap">
          <FaCodeBranch className="mr-1" />
          Open Source Contribution
        </div>
      </a>
    ));

  // 🔹 Main Layout
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-transparent shadow-none">
        <div className="card-body px-0 pb-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h5 className="card-title text-base-content opacity-80 flex items-center text-lg font-bold">
              {loading ? (
                skeleton({ widthCls: "w-40", heightCls: "h-8" })
              ) : (
                <>
                  <FaBook className="text-primary mr-2" />
                  <span>Industrial Projects</span>
                </>
              )}
            </h5>
          </div>

          {/* Horizontal Block Layout */}
          <div>
            {loading ? renderSkeleton() : renderPublications()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
