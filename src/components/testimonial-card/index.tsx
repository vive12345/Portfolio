// // import React from 'react';
// import { SanitizedTestimonial } from '../../interfaces/sanitized-config';
// import { skeleton } from '../../utils';

// const TestimonialCard = ({
//   testimonials,
//   loading,
// }: {
//   testimonials: SanitizedTestimonial[];
//   loading: boolean;
// }) => {
//   const renderSkeleton = () => {
//     return (
//       <div className="space-y-6">
//         {[1, 2, 3].map((_, index) => (
//           <div key={index} className="border-b pb-6 last:border-b-0">
//             {skeleton({
//               widthCls: 'w-full',
//               heightCls: 'h-24',
//               className: 'mb-4'
//             })}
//             <div className="flex items-center">
//               {skeleton({
//                 widthCls: 'w-32',
//                 heightCls: 'h-5'
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderTestimonials = () => {
//     return (
//       <div className="space-y-6">
//         {testimonials.map((testimonial, index) => (
//           <div 
//             key={index} 
//             className="border-b pb-6 last:border-b-0"
//           >
//             <p className="text-base text-gray-700 mb-4 italic">
//               "{testimonial.testimonial}"
//             </p>
//             <div className="flex items-center">
//               <div>
//                 <h3 className="font-bold text-base">
//                   {testimonial.name}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-8">
//       <h2 className="text-3xl font-bold mb-8 text-center">
//         WHAT'S IT LIKE TO WORK WITH ME?
//       </h2>

//       <div className="text-base-content">
//         {loading ? renderSkeleton() : renderTestimonials()}
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;
import React, { useState } from 'react';
import { SanitizedTestimonial } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaQuoteLeft, FaQuoteRight, FaBuilding, FaBriefcase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialCard = ({
  testimonials,
  loading,
}: {
  testimonials: SanitizedTestimonial[];
  loading: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderSkeleton = () => {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full">
          {skeleton({
            widthCls: 'w-12 mx-auto',
            heightCls: 'h-12',
            className: 'mb-6 rounded-full',
          })}
          {skeleton({
            widthCls: 'w-full',
            heightCls: 'h-24',
            className: 'mb-6',
          })}
          <div className="mt-8 flex justify-center">
            {skeleton({
              widthCls: 'w-36',
              heightCls: 'h-6',
              className: 'mb-2',
            })}
          </div>
          <div className="flex justify-center">
            {skeleton({
              widthCls: 'w-24',
              heightCls: 'h-4',
              className: 'mb-2',
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderTestimonials = () => {
    if (!testimonials || testimonials.length === 0) {
      return (
        <div className="text-center p-8 opacity-70">
          <p>No testimonials available.</p>
        </div>
      );
    }

    const testimonial = testimonials[activeIndex];

    return (
      <div className="relative">
        {/* Testimonial Content */}
        <div className="flex flex-col items-center justify-center p-8">
          <FaQuoteLeft className="text-4xl text-primary opacity-30 mb-4" />
          
          <div className="relative min-h-28">
            <p className="text-base-content text-center text-lg italic mb-6 leading-relaxed">
              {testimonial.testimonial}
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <h3 className="font-bold text-xl mb-1 text-primary">
              {testimonial.name}
            </h3>
            
            {/* <div className="flex items-center justify-center text-sm opacity-70 space-x-1">
              {testimonial.role && (
                <div className="flex items-center">
                  <FaBriefcase className="mr-1 text-xs" />
                  <span>{testimonial.role}</span>
                </div>
              )}
              
              {testimonial.company && (
                <div className="flex items-center">
                  <span>•</span>
                  <FaBuilding className="mx-1 text-xs" />
                  <span>{testimonial.company}</span>
                </div>
              )}
            </div> */}
          </div>
        </div>
        
        {/* Navigation controls - only show if more than one testimonial */}
        {testimonials.length > 1 && (
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
            <button 
              onClick={prevTestimonial} 
              className="bg-base-300 hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300 opacity-60 hover:opacity-100"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="bg-base-300 hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300 opacity-60 hover:opacity-100"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
        
        {/* Dots indicator - only show if more than one testimonial */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-4' 
                    : 'bg-base-300 opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-blue-600/30 backdrop-blur-sm overflow-hidden">
      <div className="card-body p-0">
        <div className="flex items-center mb-2 p-4 pb-0">
          <h5 className="card-title text-base-content opacity-80 m-0">
            {loading ? (
              skeleton({ widthCls: "w-40", heightCls: "h-8" })
            ) : (
              <span>What People Say</span>
            )}
          </h5>
        </div>
        
        <div className="p-4">
          {loading ? renderSkeleton() : renderTestimonials()}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;