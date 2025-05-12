import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AutoScrollCarousel from './components/autoScrollCarousel';
import '../app/global.css';




export default function Home() {
  const carouselItems = [
    {
      src: '/carousel/image1.jpg',
      alt: 'Oil field operations',
      title: 'Expert Reservoir Engineering Services'
    },
    {
      src: '/carousel/image2.jpg',
      alt: 'Oil field operations',
      title: 'Expert Reservoir Engineering Services'
    },
    {
      src: '/carousel/image3.jpg',
      alt: 'Oil field operations',
      title: 'Expert Reservoir Engineering Services'
    },
    {
      src: '/carousel/image4.jpg',
      alt: 'Oil field operations',
      title: 'Expert Reservoir Engineering Services'
    },
    // Add more items...
  ];

  const servicesList = [
    "Acquisition and Divestments",
    "Regional Studies / Prospectivity Review",
    "Pore Pressure Prediction and Monitoring",
    "Exploration and Subsurface Evaluation",
    "Integrated Asset Evaluation",
    "Field Development Studies",
    "Well and Field Optimization",
    "Project Management",
    "Operation Support",
    "Energy Consultancy",
    "Application Support",
    "Manpower Management"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-white">
           
      {/* Auto-scrolling Carousel */}
      <div className="w-full relative">
          
        <AutoScrollCarousel 
          images={carouselItems}
          interval={10000}
        />
      </div>

      {/* Main Content */} 
      {/* Section 1: Who We Are */}
      <div className="w-full bg-white/80 backdrop-blur-sm p-8 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left w-full max-w-screen-lg">
            <h1 className="text-4xl text-center font-bold mb-4">Who We Are</h1>
            <p className="text-lg mb-6">
              MikelOg Energy Limited is an Integrated Subsurface Consultancy Company that is led by a team of seasoned professionals with hands-on experience in the successful delivery of oil and gas projects in West Africa, Middle East, Europe, and Americas.
            </p>
            <div className="flex justify-center mt-6">
              <Link
                href="/about"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                aria-label="View About Us"
              >
                <span>About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: What We Do */}
      <div className="w-full bg-white/80 backdrop-blur-sm p-8 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left w-full max-w-screen-lg">
            <h1 className="text-4xl text-center font-bold mb-4">What We Do</h1>
            <p className="text-lg mb-6">Our area of expertise covers</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {servicesList.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-6">
              <Link
                href="/about"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                aria-label="View About Us"
              >
                <span>About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Services */}
      <div className="w-full bg-white/80 backdrop-blur-sm p-8 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left w-full max-w-screen-lg">
            <h1 className="text-4xl text-center font-bold mb-4">Our Services</h1>
            <p className="text-lg mb-6">
              We provide comprehensive and tailored energy consultancy services.
            </p>
            <div className="flex justify-center mt-6">
              <Link
                href="/products"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                aria-label="Completed Projects"
              >
                <span>Recently Completed Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
