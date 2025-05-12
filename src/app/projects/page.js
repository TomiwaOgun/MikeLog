import Link from 'next/link';
import Image from 'next/image';

// Example project data (replace with your data fetching logic)
const projects = [
  {
    id: 'project1',
    name: 'Budget Garden',
    description: 'Budget Garden is a Chrome extension designed to help users track their spending and manage their budgets effectively.',
    image: '/project1/leafIcon-128.png', // Path to the image in the public folder
  },
  {
    id: 'project2',
    name: 'Verse Finder',
    description: 'A Chrome extension designed to help users find relevant Bible verses for any situation',
    image: '/project2/bibleIcon-32.png', // Path to the image in the public folder
  },
  {
    id: 'project3',
    name: 'Soundio',
    description: 'Soundio is a full-stack music streaming platform inspired by popular services like Spotify and SoundCloud.',
    image: '/project3/Logo.png', // Path to the image in the public folder
  },
  {
    id: 'project4',
    name: 'Edge Detection and Line Detection Program',
    description: 'This C++ program is designed to perform edge detection and line detection in images using a combination of the Sobel and Laplacian operators, followed by the Hough Transform.',
    image: '/project4/building.png', // Path to the image in the public folder
  },
  {
    id: 'project5',
    name: 'Clinical Data Analysis and Visualization',
    description: 'This R project analyzes clinical trial data by performing ANOVA and post-hoc tests to compare recovery times across treatment groups, supported by visualizations and report generation.',
    image: '/project5/age_histogram.png', // Path to the image in the public folder
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`} // Link to the individual project page
              className="bg-blue-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  unoptimized 
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}