import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Folder } from 'lucide-react';
import { projects } from '../projects';
import type { ProjectComponent } from '../types/project';

const ProjectsTab = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>(Object.keys(projects)[0] || '');

  const ProjectComponent = selectedProject ? projects[selectedProject] : null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className={`border-r border-slate-200 transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-80'
        }`}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between">
              {!sidebarCollapsed && (
                <h3 className="font-semibold text-slate-800 flex items-center">
                  <Folder size={20} className="mr-2" />
                  Projects
                </h3>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-1 hover:bg-slate-200 rounded transition-colors duration-200"
                title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
            </div>
          </div>

          {/* Project List */}
          <div className="overflow-y-auto h-full pb-16">
            {Object.keys(projects).length === 0 ? (
              <div className={`p-4 text-center ${sidebarCollapsed ? 'hidden' : ''}`}>
                <p className="text-slate-500 text-sm mb-4">No projects yet</p>
                <div className="text-xs text-slate-400">
                  Add projects by creating components in the projects folder
                </div>
              </div>
            ) : (
              <div className="p-2">
                {Object.entries(projects).map(([key, ProjectComp]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProject(key)}
                    className={`w-full text-left p-3 rounded-lg mb-1 transition-colors duration-200 ${
                      selectedProject === key
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                    title={sidebarCollapsed ? ProjectComp.title : ''}
                  >
                    {sidebarCollapsed ? (
                      <div className="w-8 h-8 bg-blue-500 rounded text-white text-sm font-bold flex items-center justify-center mx-auto">
                        {ProjectComp.title.charAt(0)}
                      </div>
                    ) : (
                      <div>
                        <div className="font-medium mb-1">{ProjectComp.title}</div>
                        <div className="text-xs text-slate-500 line-clamp-2">
                          {ProjectComp.description}
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Add Project Hint */}
          {/* {!sidebarCollapsed && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center text-xs text-slate-500">
                <Plus size={14} className="mr-2" />
                <div>
                  <div className="font-medium">Add New Project</div>
                  <div>Create a component in /src/projects/</div>
                </div>
              </div>
            </div>
          )} */}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          {ProjectComponent ? (
            <div className="p-8">
              <ProjectComponent />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <Folder size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No Project Selected</h3>
                <p className="text-slate-500">
                  {Object.keys(projects).length === 0 
                    ? 'Create your first project component to get started'
                    : 'Select a project from the sidebar to view details'
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;