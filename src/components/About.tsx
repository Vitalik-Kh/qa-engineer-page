import { cvData } from '../data/cvData';
import { User, Code, Database, Shield, Zap, GitBranch, Target, CheckCircle, Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { summary } = cvData;
  const sectionRef = useScrollAnimation();
  const carouselRef = useScrollAnimation();

  // Skill categories for static display
  const skillCategories = [
    { name: 'Test Automation', icon: <Code className="w-8 h-8" /> },
    { name: 'Manual Testing', icon: <Shield className="w-8 h-8" /> },
    { name: 'API Testing', icon: <Zap className="w-8 h-8" /> },
    { name: 'Database Testing', icon: <Database className="w-8 h-8" /> },
    { name: 'CI/CD', icon: <GitBranch className="w-8 h-8" /> },
    { name: 'Shift-Left', icon: <Target className="w-8 h-8" /> },
    { name: 'Continuous Improvement', icon: <Settings className="w-8 h-8" /> },
    { name: 'Built-in Quality', icon: <CheckCircle className="w-8 h-8" /> }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="max-w-4xl mx-auto">
            <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-start scroll-animate">
              {/* Left Column - Icon */}
              <div className="hidden md:flex justify-center">
                <User className="w-60 h-60 text-primary-600 opacity-10" />
              </div>
              
              {/* Right Column - Content */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {summary}
                </p>
                

              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div ref={carouselRef} className="mt-16 scroll-animate">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skillCategories.map((skill, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-3 mx-auto">
                    <div className="text-primary-600 opacity-60">
                      {skill.icon}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
