import React from 'react';

const CompletedProjects = () => {
  const projects = [
    {
      sn: 1,
      project: 'Barracuda-5 Well Proposal',
      location: 'Niger Delta',
      role: 'Operation Readiness',
      client: 'Eastlake E&P'
    },
    {
      sn: 2,
      project: 'Barracuda Field Appraisal – Exploration Predrill Pore Pressure / Fracture Gradient Modeling & Safe Execution Analysis',
      location: 'Niger Delta',
      role: 'Pore Pressure Prediction',
      client: 'Halliburton, Eastlake E&P'
    },
    {
      sn: 3,
      project: 'Omerelu Field Appraisal – Exploration Predrill Pore Pressure / Fracture Gradient Modeling & Safe Execution Analysis',
      location: 'Niger Delta',
      role: 'Pore Pressure Prediction',
      client: 'H-PTP, Aradel Energy'
    },
    {
      sn: 4,
      project: 'Ruta Field Appraisal – Exploration Predrill Pore Pressure / Fracture Gradient Modeling & Safe Execution Analysis',
      location: 'Niger Delta',
      role: 'Pore Pressure Prediction',
      client: 'H-PTP, Ruta Oil and Gas Ltd'
    },
    {
      sn: 5,
      project: 'OML-144NW (Barracuda Field) Development',
      location: 'Niger Delta',
      role: 'Project Feasibility, Field Development Planning, Appraisal Well Proposals',
      client: 'Eastlake E&P Limited'
    },
    {
      sn: 6,
      project: 'OML-96 (Ovia Field)',
      location: 'Niger Delta',
      role: 'Project Feasibility, Field Development Planning, Appraisal Well Proposals',
      client: 'Eastlake E&P Limited'
    },
    {
      sn: 7,
      project: 'Kugbo West Field Development',
      location: 'Niger Delta, Nigeria',
      role: 'Data repositioning and subsurface evaluation',
      client: 'Trewan Oil Limited'
    },
    {
      sn: 8,
      project: 'Kugbo North Prospectivity Review',
      location: 'Niger Delta, Nigeria',
      role: 'Prospectivity Review',
      client: 'Trewan Oil Limited'
    },
    {
      sn: 9,
      project: 'Ogo Field Development',
      location: 'Dahomey Basin, Nigeria',
      role: 'Project Feasibility Study',
      client: 'Derotech Limited'
    },
    {
      sn: 10,
      project: 'Kudo Field Feasibility',
      location: 'Niger Delta, Nigeria',
      role: 'Technical and Financial Proposal',
      client: 'First Tribute Resource Limited'
    },
    {
      sn: 11,
      project: 'Atala Field Study',
      location: 'Niger Delta, Nigeria',
      role: 'Technical and Economic Feasibility',
      client: 'Impart Oil and Gas Limited'
    },
    {
      sn: 12,
      project: 'Regional evaluation and portfolio analysis of Eastern Niger Delta Shallow offshore',
      location: 'Niger Delta, Nigeria',
      role: 'Evaluation and Reporting',
      client: 'RMJ Energy'
    },
    {
      sn: 13,
      project: 'Evaluation of Nkuku-Ikong fields',
      location: 'Niger Delta, Nigeria',
      role: 'Subsurface, surface and economics studies',
      client: 'Pennton Energy Limited'
    },
    {
      sn: 14,
      project: 'Regional evaluation and portfolio analysis of Eastern Niger Delta Shallow offshore and Western Swamp',
      location: 'Niger Delta, Nigeria',
      role: 'Play and Prospectivity Review',
      client: 'Pennton Energy Limited'
    },
    {
      sn: 15,
      project: 'Evaluation of Ede and Usoro fields',
      location: 'Niger Delta, Nigeria',
      role: 'Subsurface, surface and economics studies',
      client: 'Pennton Energy Limited'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Recently Completed Projects</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">S/N</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Project</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Location</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Role</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Client</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((proj) => (
                <tr key={proj.sn}>
                  <td className="px-4 py-2 text-sm">{proj.sn}</td>
                  <td className="px-4 py-2 text-sm">{proj.project}</td>
                  <td className="px-4 py-2 text-sm">{proj.location}</td>
                  <td className="px-4 py-2 text-sm">{proj.role}</td>
                  <td className="px-4 py-2 text-sm">{proj.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
