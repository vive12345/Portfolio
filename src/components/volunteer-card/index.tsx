import React, { useEffect, useRef, useState } from "react";
import { skeleton } from "../../utils";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaBuilding,
  FaExternalLinkAlt,
} from "react-icons/fa";

export interface SanitizedVolunteerWork {
  title: string; // role
  organization: string;
  period: string;
  points?: string[]; // bullet points
  documentUrl?: string; // optional
  certificateUrl?: string; // optional
  organizationLink?: string; // optional
}

type Props = {
  loading?: boolean;
  volunteerWorks: SanitizedVolunteerWork[];
  autoplayMs?: number;
};

const VolunteerWork: React.FC<Props> = ({
  loading = false,
  volunteerWorks,
  autoplayMs,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = volunteerWorks?.length || 0;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const safeIndex = (i: number) => (count === 0 ? 0 : (i + count) % count);
  const next = () => setActiveIndex((i) => safeIndex(i + 1));
  const prev = () => setActiveIndex((i) => safeIndex(i - 1));

  useEffect(() => {
    if (!autoplayMs || count < 2) return;

    // clear any existing interval first
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
    }

    timerRef.current = window.setInterval(next, autoplayMs);

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoplayMs, count]);

  // keyboard nav
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  const renderSkeleton = () => (
    <div className="p-5">
      {skeleton({ widthCls: "w-40", heightCls: "h-7", className: "mb-3" })}
      {skeleton({ widthCls: "w-72", heightCls: "h-5", className: "mb-2" })}
      {skeleton({ widthCls: "w-64", heightCls: "h-4", className: "mb-4" })}
      {skeleton({ widthCls: "w-full", heightCls: "h-24" })}
    </div>
  );

  const work = volunteerWorks?.[safeIndex(activeIndex)];
  const viewDocsHref = work?.documentUrl || work?.certificateUrl || undefined;

  // top chips now show ONLY text (no icon)
  const RolePill: React.FC<{
    title: string;
    active: boolean;
    onClick: () => void;
  }> = ({ title, active, onClick }) => (
    <button
      onClick={onClick}
      className={`whitespace-nowrap px-4 py-2 rounded-xl transition-all
        ${active ? "bg-primary/10 text-primary scale-[1.02]" : "text-base-content/70 hover:text-base-content bg-base-200/40"}
      `}
      title={title}
    >
      <span className="max-w-56 truncate text-xs md:text-sm">{title}</span>
    </button>
  );

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/30 backdrop-blur-md rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      <div className="card-body">
        {/* header */}
        <div className="flex items-center justify-between px-5 pt-5">  
         
          <h5 className="card-title text-base-content opacity-80 m-0 px-2">
            {loading ? (
              skeleton({ widthCls: "w-32", heightCls: "h-8" })
            ) : (
              <span>Volunteer Work</span>
            )}
          </h5>
        </div>

        {/* role chips */}
        {!loading && count > 0 && (
          <div className="px-5 pt-3">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {volunteerWorks.map((vw, i) => (
                <RolePill
                  key={`${vw.title}-${i}`}
                  title={vw.title}
                  active={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* main content */}
       <div className="relative px-5 pb-16">
          {loading ? (
            renderSkeleton()
          ) : work ? (
            <>
              {/* Title
              <h3 className="text-xl md:text-2xl font-semibold text-base-content/90 mb-1">
                {work.title}
              </h3> */}

              {/* meta row (org • period • view docs as inline link) */}
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-base-content/70">
                <span className="inline-flex items-center gap-1">
                  <FaBuilding className="text-xs" />
                  {work.organization}
                </span>

                <span className="inline-flex items-center gap-1">
                  <FaCalendarAlt className="text-xs" />
                  {work.period}
                </span>

                {viewDocsHref && (
                  <a
                    href={viewDocsHref}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>View</span>
                  </a>
                )}
              </div>

              {/* Bullet points */}
              <ul className="mt-3 list-disc pl-6 space-y-2 text-base-content/75">
                {(work.points || []).map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
                {(!work.points || work.points.length === 0) && (
                  <li className="opacity-60">Details coming soon.</li>
                )}
              </ul>

              {/* bottom nav (arrows only, pushed to sides) */}
              {count > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                 <div className="flex items-center gap-3">
                    <button
                      className="grid place-items-center w-10 h-10 rounded-full bg-transparent text-base-content/70 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors"
                      onClick={prev}
                      aria-label="Previous volunteer work"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="grid place-items-center w-10 h-10 rounded-full bg-transparent text-base-content/70 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors"
                      onClick={next}
                      aria-label="Next volunteer work"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="p-8 text-center text-base-content/60">
              No volunteer work information available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerWork;
