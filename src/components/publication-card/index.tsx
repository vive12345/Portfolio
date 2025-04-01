// import { Fragment } from 'react';
// import { SanitizedPublication } from '../../interfaces/sanitized-config';
// import { skeleton } from '../../utils';

// const PublicationCard = ({
//   publications,
//   loading,
// }: {
//   publications: SanitizedPublication[];
//   loading: boolean;
// }) => {
//   const renderSkeleton = () => {
//     const array = [];
//     for (let index = 0; index < publications.length; index++) {
//       array.push(
//         <div className="card shadow-lg compact bg-base-100" key={index}>
//           <div className="p-8 h-full w-full">
//             <div className="flex items-center flex-col">
//               <div className="w-full">
//                 <div className="px-4">
//                   <div className="text-center w-full">
//                     <h2 className="mb-2">
//                       {skeleton({
//                         widthCls: 'w-32',
//                         heightCls: 'h-8',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </h2>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-20',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-20',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>,
//       );
//     }

//     return array;
//   };

//   const renderPublications = () => {
//     return publications.map((item, index) => (
//       <a
//         className="card shadow-lg compact bg-transparent border border-slate-700/30 cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-teal-600/30 backdrop-blur-sm"
//         key={index}
//         href={item.link}
//         target="_blank"
//         rel="noreferrer"
//       >
//         <div className="p-8 h-full w-full">
//           <div className="flex items-center flex-col">
//             <div className="w-full">
//               <div className="px-4">
//                 <div className="text-center w-full">
//                   <h2 className="font-medium opacity-60 mb-2">{item.title}</h2>
//                   {item.conferenceName && (
//                     <p className="text-base-content opacity-50 text-sm">
//                       {item.conferenceName}
//                     </p>
//                   )}
//                   {item.journalName && (
//                     <p className="text-base-content opacity-50 text-sm">
//                       {item.journalName}
//                     </p>
//                   )}
//                   {item.authors && (
//                     <p className="text-base-content opacity-50 text-sm">
//                       Author: {item.authors}
//                     </p>
//                   )}
//                   {item.description && (
//                     <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
//                       {item.description}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </a>
//     ));
//   };

//   return (
//     <Fragment>
//       <div className="col-span-1 lg:col-span-2">
//         <div className="grid grid-cols-2 gap-6">
//           <div className="col-span-2">
//             {/* <div className="card compact bg-base-100 shadow bg-opacity-40"> */}
//             <div className="bg-transparent">
//               <div className="card-body">
//                 <div className="mx-3 flex items-center justify-between mb-2">
//                   <h5 className="card-title">
//                     {loading ? (
//                       skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
//                     ) : (
//                       <span className="text-base-content opacity-70">
//                         Publications
//                       </span>
//                     )}
//                   </h5>
//                 </div>
//                 <div className="col-span-2">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {loading ? renderSkeleton() : renderPublications()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default PublicationCard;
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
