import React from 'react';
import { ExternalLink, Github, Calendar, CheckCircle } from 'lucide-react';
import type { ProjectComponent } from '../types/project';

const dubStack: ProjectComponent = () => {
  const projectData = {
    title: 'DubStack',
    description: 'Dubstack is a browser-based web app for dubbing gameplay videos (or any video, for that matter). All models and the FFmpeg runtime run in the browser via WebAssembly',
    technologies: ['Python', 'TTS', 'ASR', 'Hugging face', 'WebAssembly'],
    status: 'completed' as const,
    demoUrl: 'https://dubstack.tooling.com.ng/',
    githubUrl: 'https://github.com/dmachinewhisperer/dubstack',
    images: [
      `${import.meta.env.BASE_URL}assets/project_imgs/dubstack_1.png`,
      `${import.meta.env.BASE_URL}assets/project_imgs/dubstack_2.png`,
    ],
    features: [
      'Uses only local TTS models',
      'Supports voice cloning and subtitle styling',
      'Lightweight and very fast even on CPUs',
      'Models supported includes: supertonic 66m, kokoro 82m, chatterbox 500m'
    ],
    challenges: [
    ],
    learnings: [
    ],
    startDate: 'January 2024',
    endDate: 'inf'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">{projectData.title}</h1>
          <p className="text-lg text-slate-600">{projectData.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            projectData.status === 'completed' ? 'bg-green-100 text-green-800' :
            projectData.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            <CheckCircle size={14} className="inline mr-1" />
            {projectData.status.charAt(0).toUpperCase() + projectData.status.slice(1).replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
    <div className="flex gap-4">
    {projectData.demoUrl ? (
        <a
        href={projectData.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
        <ExternalLink size={16} />
        Live Demo
        </a>
    ) : (
        <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-blue-300 text-white rounded-lg cursor-not-allowed opacity-60"
        >
        <ExternalLink size={16} />
        No Demo
        </button>
    )}

    {/* Source Code Button */}
    {projectData.githubUrl && (
        <a
        href={projectData.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
        >
        <Github size={16} />
        Source Code
        </a>
    )}
    </div>


      {/* Project Images */}
      {projectData.images && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectData.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-slate-200">
              <img 
                src={image} 
                alt={`${projectData.title} screenshot ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Features */}
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Features</h3>
            <ul className="space-y-2">
              {projectData.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Technologies */}
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {projectData.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline */}
{/*           {projectData.startDate && (
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Timeline</h3>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar size={16} />
                <span>{projectData.startDate} - {projectData.endDate}</span>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

// Add required static properties
dubStack.title = 'DubStack';
dubStack.description = 'Local dubbing';

export default dubStack;