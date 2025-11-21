import { MapPin, Linkedin, TrendingUp } from "lucide-react";
import { contacts } from "../data/contacts";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="section-padding">
        <div className="container-max-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-base text-gray-600">Hi I'm</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {contacts.name}
                </h1>
                <h2 className="text-xl lg:text-2xl font-semibold text-primary-600">
                  Test Automation Engineer / Senior QA
                </h2>
                <p className="text-base text-gray-600">
                  I'm a passionate QA Engineer who believes quality isn't just a
                  final step in the process, but a shared mindset. I leverage
                  modern tools, including AI, to create efficient testing
                  strategies that accelerate delivery.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Linkedin size={20} className="text-primary-600" />
                  <a
                    href={contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin size={20} className="text-primary-600" />
                  <span>{contacts.location}</span>
                </div>
              </div>
            </div>

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
