import React from 'react';
import { skeleton } from '../../utils';

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
}

const TestimonialCard = ({
  testimonials,
  loading,
}: {
  testimonials: Testimonial[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0">
            {skeleton({
              widthCls: 'w-full',
              heightCls: 'h-24',
              className: 'mb-4'
            })}
            <div className="flex items-center">
              {skeleton({
                widthCls: 'w-32',
                heightCls: 'h-5'
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTestimonials = () => {
    return (
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="border-b pb-6 last:border-b-0"
          >
            <p className="text-base text-gray-700 mb-4 italic">
              "{testimonial.testimonial}"
            </p>
            <div className="flex items-center">
              <div>
                <h3 className="font-bold text-base">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {testimonial.role}
                  {testimonial.company && ` • ${testimonial.company}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        WHAT'S IT LIKE TO WORK WITH ME?
      </h2>

      <div className="text-base-content">
        {loading ? renderSkeleton() : renderTestimonials()}
      </div>
    </div>
  );
};

export default TestimonialCard;