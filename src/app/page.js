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
        <div className="flex flex-col md:flex-row items-center justify-center mb-30 gap-10">
          <h1 className="text-6xl text-center font-bold p-8 mb-4 [text-shadow:1px_1px_3px_black]">Welcome to Mikelog Energy Limited</h1>
          <div className="relative w-70 h-50 mb-4">
              <Image
                src="/mikelogLogo.jpg"
                alt="logo"
                fill
                className=" object-cover  border-4 border-white shadow-lg"
              />
            </div>
        </div>  
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative w-150 h-100 mb-4">
            <Image
              src="/home.jpg"
              alt="experience"
              fill
              className=" object-cover  border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left w-full max-w-screen-lg">
            <p className="text-5xl mb-6">
            We provide innovative solutions for Oil and Gas Development, utilizing cutting-edge technologies to maximize efficiency and minimize environmental impact.
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
                href="/services"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                aria-label="Completed Projects"
              >
                <span>List of services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
