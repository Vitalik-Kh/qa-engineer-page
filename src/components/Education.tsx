import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { cvData } from '../data/cvData';

const Education: React.FC = () => {
  const { education } = cvData;

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 card-hover"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {index === 0 ? (
                      <GraduationCap className="w-6 h-6 text-primary-600" />
                    ) : (
                      <Award className="w-6 h-6 text-primary-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      {edu.institution}
                    </p>
                    {edu.year && (
                      <p className="text-sm text-gray-600">
                        {edu.year}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">Committed to staying current with industry trends and technologies</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Security</h4>
                <p className="text-sm text-gray-600">OWASP Top 10</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Cloud</h4>
                <p className="text-sm text-gray-600">AWS Technical Essentials</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Database</h4>
                <p className="text-sm text-gray-600">Complete SQL Bootcamp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
