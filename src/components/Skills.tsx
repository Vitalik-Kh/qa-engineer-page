import { Code, Database, Shield, Zap, GitBranch, Users } from 'lucide-react';
import { cvData } from '../data/cvData';

const Skills: React.FC = () => {
  const { skills } = cvData;

  const skillIcons: Record<string, React.ReactNode> = {
    'Test Automation': <Code className="w-6 h-6" />,
    'Manual Testing': <Shield className="w-6 h-6" />,
    'Database Testing & Cloud': <Database className="w-6 h-6" />,
    'API Testing': <Zap className="w-6 h-6" />,
    'Performance & Security Testing': <Shield className="w-6 h-6" />,
    'CI/CD & Tools': <GitBranch className="w-6 h-6" />,
    'Methodologies': <Users className="w-6 h-6" />
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-primary-600">
                      {skillIcons[skill.category] || <Code className="w-6 h-6" />}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
