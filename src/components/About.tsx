import { User, Code, Database, Shield, GitBranch, CheckCircle, RefreshCw, ChevronsLeft, Cog } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useMemo } from 'react';

const About = () => {
  const sectionRef = useScrollAnimation();
  const carouselRef = useScrollAnimation();

  const skillCategories = useMemo(() => [
    { id: 'test-automation', name: 'Test Automation', icon: <Code className="w-8 h-8" /> },
    { id: 'manual-testing', name: 'Manual Testing', icon: <Shield className="w-8 h-8" /> },
    { id: 'api-testing', name: 'API Testing', icon: <Cog className="w-8 h-8" /> },
    { id: 'database-testing', name: 'Database Testing', icon: <Database className="w-8 h-8" /> },
    { id: 'ci-cd', name: 'CI/CD', icon: <GitBranch className="w-8 h-8" /> },
    { id: 'shift-left', name: 'Shift-Left', icon: <ChevronsLeft className="w-8 h-8" /> },
    { id: 'continuous-improvement', name: 'Continuous Improvement', icon: <RefreshCw className="w-8 h-8" /> },
    { id: 'built-in-quality', name: 'Built-in Quality', icon: <CheckCircle className="w-8 h-8" /> }
  ], []);

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="max-w-4xl mx-auto">
            <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-start scroll-animate">
              <div className="hidden md:flex justify-center">
                <User className="w-60 h-60 text-primary-600 opacity-10" />
              </div>

              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                I'm a Senior QA Engineer with nearly 5 years of experience, specialising in a wide range of testing disciplines. I combine a customer-centric mindset with deep skills in manual, API, and database testing to develop and maintain robust automated test suites with Playwright and TypeScript.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                As a passionate advocate for built-in quality, I actively find innovative ways to boost team efficiency, including the use of AI-powered tools to accelerate development cycles. I use my experience in process improvement to deliver secure and scalable solutions that meet business goals at speed.
                </p>
              </div>
            </div>
          </div>

          <div ref={carouselRef} className="mt-16 scroll-animate">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skillCategories.map((skill) => (
                <div 
                  key={skill.id}
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
