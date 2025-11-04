import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const handleCommitClick = (title: string, link: string) => {
    try {
      if (googleAnalyticId) {
        ga.event('Click External Project', { post: title });
      }
    } catch (error) {
      console.error(error);
    }
    window?.open(link, '_blank');
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <div
        className="card shadow-lg compact bg-transparent border border-slate-700/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500/20 hover:to-purple-600/30 backdrop-blur-sm"
        key={index}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-medium text-base-content opacity-70 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90 mb-3">
                      <div className="w-24 h-24 mask mask-squircle">
                        <LazyImage
                          src={item.imageUrl}
                          alt={'thumbnail'}
                          placeholder={skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-full',
                            shape: '',
                          })}
                        />
                      </div>
                    </div>
                  )}
                  <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => {
                        event.preventDefault();
                        handleCommitClick(item.title, item.link);
                      }}
                      className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      <span>View commit</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-transparent shadow-none">
        <div className="card-body px-0 pb-0">
          <div className="flex items-center justify-between mb-4">
            <h5 className="card-title text-base-content opacity-70">
              {loading ? (
                skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
              ) : (
                <span>{header}</span>
              )}
            </h5>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading ? renderSkeleton() : renderExternalProjects()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalProjectCard;
