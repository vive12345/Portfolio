
import { FaBook, FaUserAlt, FaUniversity } from 'react-icons/fa';
import { SanitizedPublication } from '../../interfaces/sanitized-config';

import { skeleton } from '../../utils';

const PublicationCard = ({
  publications,
  loading,
}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-6 h-full w-full">
            <div className="w-full">
              <h2 className="mb-2">
                {skeleton({
                  widthCls: 'w-32',
                  heightCls: 'h-8',
                  className: 'mb-2 mx-auto',
                })}
              </h2>
              <div>
                {skeleton({
                  widthCls: 'w-20',
                  heightCls: 'h-4',
                  className: 'mb-2 mx-auto',
                })}
              </div>
              <div>
                {skeleton({
                  widthCls: 'w-20',
                  heightCls: 'h-4',
                  className: 'mb-2 mx-auto',
                })}
              </div>
              <div>
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2 mx-auto',
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderPublications = () => {
    return publications.map((item, index) => (
      <a
        className="card shadow-lg compact bg-transparent border border-slate-700/30 cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-teal-600/30 backdrop-blur-sm"
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="p-6 h-full w-full">
          <div className="w-full">
            <h2 className="font-medium text-base-content opacity-70 mb-3 flex items-center">
              <FaBook className="mr-2" /> {item.title}
            </h2>
            
            {(item.conferenceName || item.journalName) && (
              <div className="mb-2 flex items-center text-base-content opacity-60 text-sm">
                <FaUniversity className="mr-2" />
                <span>
                  {item.journalName && <span>{item.journalName}</span>}
                  {item.conferenceName && <span>{item.conferenceName}</span>}
                </span>
              </div>
            )}
            
            {item.authors && (
              <div className="mb-3 flex items-center text-base-content opacity-60 text-sm">
                <FaUserAlt className="mr-2" />
                <span>{item.authors}</span>
              </div>
            )}
            
            {item.description && (
              <p className="mt-3 text-base-content text-opacity-60 text-sm">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </a>
    ));
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-transparent shadow-none">
        <div className="card-body px-0 pb-0">
          <div className="flex items-center justify-between mb-4">
            <h5 className="card-title text-base-content opacity-70 flex items-center">
              {loading ? (
                skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
              ) : (
                <>
                  <FaBook className="mr-2" />
                  <span>Publications</span>
                </>
              )}
            </h5>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading ? renderSkeleton() : renderPublications()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
