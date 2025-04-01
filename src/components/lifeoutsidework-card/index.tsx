import React, { useState } from 'react';
import { skeleton } from '../../utils';
import { 
  FaRunning, FaBrain, FaGuitar, FaPlane, FaBookOpen, FaCode, 
  FaMapMarkedAlt, FaChevronLeft, FaChevronRight, FaChess
} from 'react-icons/fa';
import { MdFoodBank, MdVolunteerActivism } from 'react-icons/md';
import { GiMountainClimbing } from 'react-icons/gi';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { SanitizedLifeArea } from '../../interfaces/sanitized-config';

// Define a function to map string icon names to React components
const getIconComponent = (iconName: string): React.ReactNode => {
  const icons: { [key: string]: React.ReactNode } = {
    "FaRunning": <FaRunning className="text-xl" />,
    "FaBrain": <FaBrain className="text-xl" />,
    "FaGuitar": <FaGuitar className="text-xl" />,
    "FaPlane": <FaPlane className="text-xl" />,
    "FaBookOpen": <FaBookOpen className="text-xl" />,
    "FaCode": <FaCode className="text-xl" />,
    "FaMapMarkedAlt": <FaMapMarkedAlt className="text-xl" />,
    "GiMountainClimbing": <GiMountainClimbing className="text-xl" />,
    "MdFoodBank": <MdFoodBank className="text-xl" />,
    "MdVolunteerActivism": <MdVolunteerActivism className="text-xl" />,
    "BiSolidCameraMovie": <BiSolidCameraMovie className="text-xl" />,
    "FaChess": <FaChess className="text-xl" />
  };
  
  return icons[iconName] || <FaChess className="text-xl" />; // Default icon
};

const LifeOutsideWork = ({ 
  loading = false,
  lifeAreas = [] 
}: { 
  loading?: boolean;
  lifeAreas: SanitizedLifeArea[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextArea = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === lifeAreas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevArea = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? lifeAreas.length - 1 : prevIndex - 1
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

  const renderLifeAreas = () => {
    if (!lifeAreas || lifeAreas.length === 0) {
      return (
        <div className="text-center p-8 opacity-70">
          <p>No information available.</p>
        </div>
      );
    }

    const area = lifeAreas[activeIndex];

    return (
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-6 p-4">
          {/* Image Section (if available) */}
          {area.imageUrl && (
            <div className="md:w-1/3 overflow-hidden rounded-lg">
              <div className="bg-base-300 h-48 rounded-lg overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-700 hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${area.imageUrl})`,
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40" />
              </div>
            </div>
          )}
          
          {/* Content Section */}
          <div className={`${area.imageUrl ? 'md:w-2/3' : 'w-full'} flex flex-col justify-between`}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full text-primary">
                  {typeof area.icon === 'string' ? getIconComponent(area.icon) : area.icon}
                </div>
                <h3 className="text-xl font-bold text-base-content opacity-80">{area.title}</h3>
              </div>
              <p className="text-base-content opacity-70 leading-relaxed">
                {area.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation controls */}
        {lifeAreas.length > 1 && (
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2">
            <button 
              onClick={prevArea} 
              className="bg-base-300 hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300 opacity-60 hover:opacity-100"
              aria-label="Previous area"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextArea} 
              className="bg-base-300 hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300 opacity-60 hover:opacity-100"
              aria-label="Next area"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Indicator Dots */}
        {lifeAreas.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {lifeAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-4' 
                    : 'bg-base-300 opacity-50'
                }`}
                aria-label={`Go to area ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Small card for showing category icons
  const HobbyIcon = ({ 
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
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/30 backdrop-blur-sm overflow-hidden">
      <div className="card-body p-0">
        <div className="flex items-center mb-2 p-4 pb-0">
          <h5 className="card-title text-base-content opacity-80 m-0">
            {loading ? (
              skeleton({ widthCls: "w-40", heightCls: "h-8" })
            ) : (
              <span>Life Outside Work</span>
            )}
          </h5>
        </div>

        {/* Icon Bar for Quick Navigation */}
        {!loading && lifeAreas.length > 0 && (
          <div className="px-4 overflow-x-auto">
            <div className="flex space-x-3 py-2">
              {lifeAreas.map((area, index) => (
                <HobbyIcon
                  key={index}
                  icon={area.icon}
                  title={area.title}
                  onClick={() => setActiveIndex(index)}
                  active={index === activeIndex}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="p-2">
          {loading ? renderSkeleton() : renderLifeAreas()}
        </div>
      </div>
    </div>
  );
};

export default LifeOutsideWork;