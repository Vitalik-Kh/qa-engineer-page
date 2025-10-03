import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Database } from 'lucide-react';
import PlaywrightLogo from '../assets/playwright-logo.svg';
import TypeScriptLogo from '../assets/Typescript_logo.png';
import JavaScriptLogo from '../assets/JavaScript-logo.png';
import WebdriverIOLogo from '../assets/logo-webdriver-io-logo.png';
import AWSLogo from '../assets/Amazon_Web_Services_Logo.svg.png';
import PostmanLogo from '../assets/postman-sq.png';
import GitLogo from '../assets/git-icon.png';
import DockerLogo from '../assets/docker-logo.svg';
import JiraLogo from '../assets/jira-logo.svg';
import BitbucketLogo from '../assets/bitbucket-icon.svg';
import CursorLogo from '../assets/cursor-logo.png';

const Skills: React.FC = () => {
  const sectionRef = useScrollAnimation();

  // Most valuable skills to display as badges with icons
  const valuableSkills = [
    // Skills with official logos
    { name: 'Playwright', icon: <img src={PlaywrightLogo} alt="Playwright" className="w-12 h-12" /> },
    { name: 'TypeScript', icon: <img src={TypeScriptLogo} alt="TypeScript" className="w-12 h-12" /> },
    { name: 'JavaScript', icon: <img src={JavaScriptLogo} alt="JavaScript" className="w-12 h-12" /> },
    { name: 'WebdriverIO', icon: <img src={WebdriverIOLogo} alt="WebdriverIO" className="w-12 h-12" /> },
    { name: 'SQL', icon: <Database className="w-12 h-12" /> },
    { name: 'AWS', icon: <img src={AWSLogo} alt="AWS" className="w-12 h-12 object-contain" /> },
    { name: 'Postman', icon: <img src={PostmanLogo} alt="Postman" className="w-12 h-12" /> },
    { name: 'Git', icon: <img src={GitLogo} alt="Git" className="w-12 h-12" /> },
    { name: 'Docker', icon: <img src={DockerLogo} alt="Docker" className="w-12 h-12" /> },
    { name: 'Jira', icon: <img src={JiraLogo} alt="Jira" className="w-12 h-12" /> },
    { name: 'Bitbucket', icon: <img src={BitbucketLogo} alt="Bitbucket" className="w-12 h-12" /> },
    { name: 'Cursor', icon: <img src={CursorLogo} alt="Cursor" className="w-12 h-12" /> }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Tools & Technologies
            </h2>
          </div>

          <div ref={sectionRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 scroll-animate">
            {valuableSkills.map((skill, index) => (
              <div 
                key={index}
                className="text-primary-600 px-4 py-6 text-sm font-medium text-center hover:text-primary-700 transition-colors duration-200 flex flex-col items-center justify-center gap-3"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
