import { Building2, Calendar, MapPin } from 'lucide-react';
import { cvData } from '../data/cvData';

const Experience: React.FC = () => {
  const { experience } = cvData;

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <Building2 className="w-5 h-5 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-base font-semibold text-gray-900 mb-4">Responsibilities:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
