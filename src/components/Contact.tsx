import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { cvData } from '../data/cvData';

const Contact: React.FC = () => {
  const { contact } = cvData;

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Contact Me
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-sm text-gray-600">{contact.location}</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {contact.email}
                </a>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-sm text-gray-600">{contact.phone}</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Connect</h3>
                <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                  I'm always interested in new opportunities and collaborations. 
                  Feel free to reach out via LinkedIn or email.
                </p>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
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
