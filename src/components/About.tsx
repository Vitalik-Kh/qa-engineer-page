import { cvData } from '../data/cvData';

const About: React.FC = () => {
  const { summary } = cvData;

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {summary}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">5+</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Years Experience</h3>
                  <p className="text-xs text-gray-600">In QA Engineering</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-600">100%</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Quality Focus</h3>
                  <p className="text-xs text-gray-600">Built-in Quality Culture</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-600">AI</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-xs text-gray-600">AI-Powered Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
