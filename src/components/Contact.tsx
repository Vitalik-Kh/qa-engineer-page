import { Linkedin } from 'lucide-react';
import { cvData } from '../data/cvData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { contact } = cvData;
  const cardRef = useScrollAnimation(0.1, 300);

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Let&apos;s Connect
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Call to Action */}
            <div className="text-center mb-16">
              <div ref={cardRef} className="scroll-animate">
                <p className="text-sm text-gray-500 mb-6 max-w-2xl mx-auto">
                  I&apos;m always interested in new opportunities and collaborations. 
                  Feel free to reach out via LinkedIn or email.
                </p>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
