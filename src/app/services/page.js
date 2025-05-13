import Image from 'next/image';
import Link from "next/link";

export default function ServicesPage() {
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
        <div className="w-full bg-white/80 backdrop-blur-sm p-8 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-left w-full max-w-screen-lg">
                <div className="mb-15 bg-green-700 rounded-lg">
                    <h1 className="text-6xl text-center text-white font-bold">What We Do...</h1>
                </div>
                
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
    );
}
