import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Coffee, Cpu } from 'lucide-react';

const MeTab = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/dmachinewhisperer',
      color: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/asogwa-emmanuel-22547319b/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:asogwaemmanuel36@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const skills = [
    'Distributed Systems', 'AI / ML / LLMs', 'Python', 'C', 
    'AWS', 'Model Runtimes', 'LORA / QLORA / RAG', 'Quantization',
    'Embedded Systems', 'Containerization'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              AE
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Asogwa Emmanuel</h2>
              <p className="text-lg text-slate-600 mb-4">Systems Engineer</p>
              <div className="flex items-center text-slate-500 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Building backend systems for intelligent applications.
              </p>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">About Me</h3>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 mb-4">
              I'm a systems engineer and like putting AI into things; small things, big things, anything really. My specialty is in backends that power intelligence. Some of the areas I have worked in include business intelligence, edtech, distributed infrastructure, and embedded systems. I develop custom AI models and build end-to-end pipelines to integrate them into applications.

            </p>
            <p className="text-slate-700 mb-4">
              Most of my free time goes into writing low-level code that does amazing things, and testing lightweight models on embedded systems. Right now, I'm building a Jupyter kernel for microcontrollers.
            </p>
{/*             <div className="flex items-center text-slate-600 mt-6">
              <Cpu size={20} className="mr-2 text-amber-600" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Contact Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Hire Me?</h3>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`flex items-center space-x-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200 ${link.color} group`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={20} />
                <span className="font-medium">{link.name}</span>
                <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Skills Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Projects Completed</span>
              <span className="font-bold text-blue-600">15+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Years of Experience</span>
              <span className="font-bold text-blue-600">4+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Academic Publications</span>
              <span className="font-bold text-amber-600">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeTab;
