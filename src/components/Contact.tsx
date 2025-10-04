import { useState, useEffect, useRef } from 'react';
import { Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contacts } from '../data/contacts';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TOAST_DURATION = 5000;
const WEB3FORMS_ACCESS_KEY = '7b099ed4-0f22-49fa-826d-4b61d2153e19';

const Contact = () => {
  const cardRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setShowToast(true);
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setShowToast(true);
      setErrorMessage('Failed to send message. Please try again later.');
    }

    toastTimeoutRef.current = window.setTimeout(() => {
      setStatus('idle');
      setShowToast(false);
    }, TOAST_DURATION);
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in" role="alert" aria-live="polite">
          <div className={`flex items-center space-x-3 px-6 py-4 rounded-lg shadow-lg border ${
            status === 'success' 
              ? 'bg-green-50 text-green-800 border-green-200' 
              : 'bg-red-50 text-red-800 border-red-200'
          }`}>
            {status === 'success' ? (
              <>
                <CheckCircle size={24} className="text-green-600" />
                <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
              </>
            ) : (
              <>
                <AlertCircle size={24} className="text-red-600" />
                <span className="font-medium">{errorMessage}</span>
              </>
            )}
          </div>
        </div>
      )}

      <section id="contact" className="py-16 bg-gray-50">
        <div className="section-padding">
          <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
                  I'm always interested in new opportunities and collaborations. 
              <br />
              Send me a message or connect via{' '}
                <a
                  href={contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-gray-900 transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 mr-1" />
                LinkedIn
              </a>.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
              <div ref={cardRef} className="scroll-animate">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 lg:p-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading' || !isFormValid}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
