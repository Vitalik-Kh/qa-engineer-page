import { contacts } from '../data/contacts';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding py-12">
        <div className="container-max-width">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vitalii Khymynets</h3>
              <p className="text-gray-300">
              Senior QA Engineer with nearly 5 years of experience helping teams deliver high-quality software with confidence and speed.
              </p>
            </div>

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

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <a 
                  href={contacts.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <p>{contacts.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
