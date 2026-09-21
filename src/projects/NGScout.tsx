import React from 'react';
import { ExternalLink, Github, Calendar, CheckCircle } from 'lucide-react';
import type { ProjectComponent } from '../types/project';

const NGScout: ProjectComponent = () => {
  const projectData = {
    title: 'NGScout',
    description: 'AI Agent that uses a web crawler to scan Nigerian job boards, filters listings with AI, and delivers personalized job alerts to users based on their preferences. Available as a telegram bot and web app',
    technologies: ['Automation', 'Transformers', 'Web Crawling/Scraping', 'Bot Development', 'Telegram', 'Vector Search'],
    status: 'completed' as const,
    demoUrl: 'http://ngscout.tooling.com.ng',
    githubUrl: 'https://github.com/dmachinewhisperer/ngjobscout',
    images: [
      `${import.meta.env.BASE_URL}assets/project_imgs/ngjobscout_1.png`,
      `${import.meta.env.BASE_URL}assets/project_imgs/ngjobscout_2.png`,
    ],
    features: [
      'Linear post stream, filtered using user supplied prompt',
      'Supports hybrid search and reranking using cross encoder.',
      'User can customize the type of job alerts delivered to them ',
      'Supports search across the multiple job boards it crawls',
      'Can deliver notifications asynchronously via webhooks'
    ],
    challenges: [
    ],
    learnings: [
    ],
    startDate: '',
    endDate: ''
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
  {/* Live Demo Button */}
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
  {projectData.githubUrl ? (
    <a
      href={projectData.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
    >
      <Github size={16} />
      Source Code
    </a>
  ) : (
    <button
      disabled
      className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-slate-700 rounded-lg cursor-not-allowed opacity-60"
    >
      <Github size={16} />
      Closed Source
    </button>
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
NGScout.title = 'NGScout';
NGScout.description = 'AI that works for you';

export default NGScout;