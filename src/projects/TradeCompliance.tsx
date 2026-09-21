import React from 'react';
import { ExternalLink, Github, CheckCircle, Server } from 'lucide-react';
import type { ProjectComponent } from '../types/project';

const TradeCompliance: ProjectComponent = () => {
  const projectData = {
    title: 'Trade Compliance',
    description: 'Assigns HS codes to products and generates landed cost and shippability verdicts for supported markets. Currently covers UK to US, with the EU next. Every quote is reproducible and cites the rule it used.',
    technologies: ['Python', 'HS Classification', 'Vector Search', 'FTS5', 'LLMs', 'scikit-learn', 'Tariff Data'],
    status: 'production' as const,
    demoUrl: '',
    githubUrl: '',
    features: [
      'Classifies products to HS6 and national tariff codes',
      'Uses 189k real US customs rulings and 6k UK rulings as precedent',
      'Scores 80.9% HS6 accuracy on retail product text',
      'Attaches a calibrated confidence score to every classification',
      'Computes duty, excise and consumption tax from dated tariff tables'
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
            projectData.status === 'production' ? 'bg-purple-100 text-purple-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {projectData.status === 'production' ? <Server size={14} className="inline mr-1" /> : <CheckCircle size={14} className="inline mr-1" />}
            {projectData.status.charAt(0).toUpperCase() + projectData.status.slice(1).replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Action Buttons (proprietary system: no demo or source available) */}
    <div className="flex gap-4">
        <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-blue-300 text-white rounded-lg cursor-not-allowed opacity-60"
        >
        <ExternalLink size={16} />
        No Demo
        </button>
        <button
        disabled
        className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-400 rounded-lg cursor-not-allowed opacity-60"
        >
        <Github size={16} />
        No Source
        </button>
    </div>

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
TradeCompliance.title = 'Trade Compliance';
TradeCompliance.description = 'HS codes and landed cost';

export default TradeCompliance;
