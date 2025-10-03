import { Download, Mail, Phone, MapPin, Linkedin, TrendingUp } from 'lucide-react';
import { cvData } from '../data/cvData';

const Hero: React.FC = () => {
  const { contact } = cvData;

  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-base text-gray-600">Hi I&apos;m</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {contact.name}
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-primary-600">
                  Senior QA Engineer
                </h2>
                <p className="text-base text-gray-600">
                  I&apos;m a passionate QA Engineer with nearly 5 years of experience in test automation, manual testing, and quality assurance. 
                  I love building robust testing solutions and fostering a culture of built-in quality.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail size={20} className="text-primary-600" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone size={20} className="text-primary-600" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin size={20} className="text-primary-600" />
                  <span>{contact.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Linkedin size={20} className="text-primary-600" />
                  <a 
                    href={contact.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                  <a
                    href="/cv/Vitalii_Khymynets_Senior_QA_Engineer_CV.md"
                    download
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  >
                  <Download size={20} className="mr-2" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Right Column - Background Icon */}
            <div className="relative hidden md:flex justify-center">
              <TrendingUp className="w-[300px] h-[300px] text-primary-600 opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
