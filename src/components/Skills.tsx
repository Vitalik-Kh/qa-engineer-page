import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Database } from 'lucide-react';
import { useMemo } from 'react';
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

const Skills = () => {
  const sectionRef = useScrollAnimation();

  const valuableSkills = useMemo(() => [
    { id: 'playwright', name: 'Playwright', icon: <img src={PlaywrightLogo} alt="Playwright logo" className="w-12 h-12" /> },
    { id: 'typescript', name: 'TypeScript', icon: <img src={TypeScriptLogo} alt="TypeScript logo" className="w-12 h-12" /> },
    { id: 'javascript', name: 'JavaScript', icon: <img src={JavaScriptLogo} alt="JavaScript logo" className="w-12 h-12" /> },
    { id: 'webdriverio', name: 'WebdriverIO', icon: <img src={WebdriverIOLogo} alt="WebdriverIO logo" className="w-12 h-12" /> },
    { id: 'sql', name: 'SQL', icon: <Database className="w-12 h-12" aria-label="SQL database icon" /> },
    { id: 'aws', name: 'AWS', icon: <img src={AWSLogo} alt="AWS logo" className="w-12 h-12 object-contain" /> },
    { id: 'postman', name: 'Postman', icon: <img src={PostmanLogo} alt="Postman logo" className="w-12 h-12" /> },
    { id: 'git', name: 'Git', icon: <img src={GitLogo} alt="Git logo" className="w-12 h-12" /> },
    { id: 'docker', name: 'Docker', icon: <img src={DockerLogo} alt="Docker logo" className="w-12 h-12" /> },
    { id: 'jira', name: 'Jira', icon: <img src={JiraLogo} alt="Jira logo" className="w-12 h-12" /> },
    { id: 'bitbucket', name: 'Bitbucket', icon: <img src={BitbucketLogo} alt="Bitbucket logo" className="w-12 h-12" /> },
    { id: 'cursor', name: 'Cursor', icon: <img src={CursorLogo} alt="Cursor logo" className="w-12 h-12" /> }
  ], []);

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
            {valuableSkills.map((skill) => (
              <div 
                key={skill.id}
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
