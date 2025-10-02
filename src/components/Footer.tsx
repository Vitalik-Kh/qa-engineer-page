import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { cvData } from '../data/cvData';

const Footer: React.FC = () => {
  const { contact } = cvData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding py-12">
        <div className="container-max-width">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Vitalii Khymynets</h3>
              <p className="text-gray-300 mb-4">
                Senior QA Engineer with nearly 5 years of experience in test automation, 
                manual testing, and quality assurance.
              </p>
              <div className="flex space-x-4">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
