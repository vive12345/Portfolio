import React, { useState } from 'react';
import { skeleton } from '../../utils';
import { 
  FaHandsHelping, FaUsers, FaLaptopCode, FaCalendarAlt, 
  FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaBuilding
} from 'react-icons/fa';
import { MdVolunteerActivism, MdEventAvailable } from 'react-icons/md';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiRotaryinternational } from 'react-icons/si';

// Define interface for volunteer work
export interface SanitizedVolunteerWork {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  icon: string;
  imageUrl?: string;
}

// Function to map string icon names to React components
const getIconComponent = (iconName: string): React.ReactNode => {
  const icons: { [key: string]: React.ReactNode } = {
    "MdVolunteerActivism": <span>🤝 <MdVolunteerActivism className="text-xl" /></span>,
    "MdEventAvailable": <span>📅 <MdEventAvailable className="text-xl" /></span>,
    "GiArtificialIntelligence": <span>🤖 <GiArtificialIntelligence className="text-xl" /></span>,
    "SiRotaryinternational": <span>⚙️ <SiRotaryinternational className="text-xl" /></span>,
    "FaLaptopCode": <span>💻 <FaLaptopCode className="text-xl" /></span>,
    "FaUsers": <span>👥 <FaUsers className="text-xl" /></span>,
    "FaHandsHelping": <span>🙌 <FaHandsHelping className="text-xl" /></span>
  };
  
  return icons[iconName] || <span>🌟 <MdVolunteerActivism className="text-xl" /></span>; // Default icon
};

const VolunteerWork = ({ 
  loading = false,
  volunteerWorks 
}: { 
  loading?: boolean;
  volunteerWorks: SanitizedVolunteerWork[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextWork = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === volunteerWorks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevWork = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? volunteerWorks.length - 1 : prevIndex - 1
    );
  };

  const renderSkeleton = () => {
    return (
      <div className="flex flex-col md:flex-row gap-6 p-4">
        <div className="md:w-1/3">
          {skeleton({
            widthCls: 'w-full',
            heightCls: 'h-48',
            className: 'rounded-lg',
          })}
        </div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            {skeleton({
              widthCls: 'w-40',
              heightCls: 'h-8',
              className: 'mb-4',
            })}
            {skeleton({
              widthCls: 'w-full',
              heightCls: 'h-24',
              className: 'mb-4',
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderVolunteerWorks = () => {
    if (!volunteerWorks || volunteerWorks.length === 0) {
      return (
        <div className="text-center p-8 opacity-70">
          <p>No volunteer work information available.</p>
        </div>
      );
    }

    const work = volunteerWorks[activeIndex];

    return (
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-6 p-4">
          {/* Image Section (if available) */}
          {work.imageUrl && (
            <div className="md:w-1/3 overflow-hidden rounded-lg">
              <div className="bg-base-300 h-48 rounded-lg overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${work.imageUrl})`,
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40" />
              </div>
            </div>
          )}
          
          {/* Content Section */}
          <div className={`${work.imageUrl ? 'md:w-2/3' : 'w-full'} flex flex-col justify-between`}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full text-primary">
                  {typeof work.icon === 'string' ? getIconComponent(work.icon) : work.icon}
                </div>
                <h3 className="text-xl font-bold text-base-content opacity-80">{work.title}</h3>
              </div>
              
              <div className="mb-3 flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-1 opacity-70">
                  <FaBuilding className="text-xs" />
                  <span>{work.organization}</span>
                </div>
                
                {work.location && (
                  <div className="flex items-center gap-1 opacity-70">
                    <FaMapMarkerAlt className="text-xs" />
                    <span>{work.location}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1 opacity-70">
                  <FaCalendarAlt className="text-xs" />
                  <span>{work.period}</span>
                </div>
              </div>
              
              <p className="text-base-content opacity-70 leading-relaxed">
                {work.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation controls */}
        {volunteerWorks.length > 1 && (
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2">
            <button 
              onClick={prevWork} 
              className="bg-base-300 hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300 opacity-60 hover:opacity-100"
              aria-label="Previous volunteer work"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextWork} 
              className="bg-base-300 hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300 opacity-60 hover:opacity-100"
              aria-label="Next volunteer work"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Indicator Dots */}
        {volunteerWorks.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {volunteerWorks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-4' 
                    : 'bg-base-300 opacity-50'
                }`}
                aria-label={`Go to volunteer work ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Small card for showing organization icons
  const OrganizationIcon = ({ 
    icon, 
    title, 
    onClick, 
    active 
  }: { 
    icon: React.ReactNode | string; 
    title: string; 
    onClick: () => void; 
    active: boolean;
  }) => (
    <div 
      className={`cursor-pointer flex flex-col items-center p-2 transition-all duration-300 ${
        active 
          ? 'bg-primary bg-opacity-20 text-primary rounded-lg scale-110' 
          : 'text-base-content opacity-60 hover:opacity-100'
      }`}
      onClick={onClick}
      title={title}
    >
      <div>{typeof icon === 'string' ? getIconComponent(icon) : icon}</div>
      <div className="text-xs mt-1 max-w-16 truncate text-center">{title}</div>
    </div>
  );

  return (
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-purple-600/30 backdrop-blur-sm overflow-hidden">
      <div className="card-body p-0">
        <div className="flex items-center mb-2 p-4 pb-0">
          <h5 className="card-title text-base-content opacity-80 m-0">
            {loading ? (
              skeleton({ widthCls: "w-40", heightCls: "h-8" })
            ) : (
              <span>Volunteer Work</span>
            )}
          </h5>
        </div>

        {/* Icon Bar for Quick Navigation */}
        {!loading && volunteerWorks.length > 0 && (
          <div className="px-4 overflow-x-auto">
            <div className="flex space-x-3 py-2">
              {volunteerWorks.map((work, index) => (
                <OrganizationIcon
                  key={index}
                  icon={work.icon}
                  title={work.organization}
                  onClick={() => setActiveIndex(index)}
                  active={index === activeIndex}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="p-2">
          {loading ? renderSkeleton() : renderVolunteerWorks()}
        </div>
      </div>
    </div>
  );
};

export default VolunteerWork;