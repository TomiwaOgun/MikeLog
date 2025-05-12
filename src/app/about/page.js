import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Who we are</h2>
            <p className="text-gray-700 mb-4">
              MikelOg Energy Limited is an Integrated Subsurface Consultancy Company led by seasoned professionals with hands-on experience in successfully delivering oil and gas projects across West Africa, the Middle East, Europe, and the Americas.
            </p>
            <p className="text-gray-700 mb-4">
              Our expertise spans Geosciences, Petrophysics, Reservoir Engineering, Production Technology, and Economics. We also collaborate with leading Surface Engineering and Facilities professionals to deliver holistic solutions.
            </p>
            <p className="text-gray-700">
              We pride ourselves on cost-effective, value-adding services that maximize project outcomes across the entire asset life cycle.
            </p>
          </div>
        </div>

        {/* Vision and Mission */}
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="relative w-100 h-100 mb-4">
                  <Image
                    src="/mission.jpg"
                    alt="experience"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Our Mission</h3>
                <p className="text-gray-600 text-lg">To provide efficient and innovative energy solutions to our clients while ensuring the safety of our workers and the environment.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="relative w-100 h-100 mb-4">
                  <Image
                    src="/vision.jpg"
                    alt="experience"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Our Vision</h3>
                <p className="text-gray-600 text-lg">To be the go-to energy consultancy team of high repute in Nigeria.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="relative w-100 h-100 mb-4">
                  <Image
                    src="/experience.jpg"
                    alt="experience"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Our Experience</h3>
                <p className="text-gray-600 text-lg">Our team of experts are seasoned professionals with hands-on experience in the successful delivery of oil and gas projects in West Africa, Middle East, Europe, and Americas, and we have successfully completed numerous projects for major oil and gas companies in Nigeria.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="relative w-100 h-100 mb-4">
                  <Image
                    src="/approach.jpg"
                    alt="experience"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Our Approach</h3>
                <p className="text-gray-600 text-lg">We use the latest technologies and techniques to optimize exploration and production, and we work closely with our clients to ensure their specific needs are met.</p>
          </div>
        </div>
        {/* Profile Picture */}
        <div className="flex justify-center p-10 mb-12">
          <div className="relative w-100 h-100 md:w-60 md:h-60">
            <Image
              src="/mikeProfile.png"
              alt="Dr. Mike Ogunleye"
              fill
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Principle */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Principle</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              The MikelOg team is led by Dr. Michael (“Mike”) Ogunleye, a broad-based E&P professional with over 30 years of experience at organizations such as Lekoil, Shell, Oando, and Mobil across Africa, Europe, and the Middle East.
            </p>
            <p>
              At Lekoil, Mike served as General Manager, Subsurface, overseeing opportunity identification, field development, and team growth. He previously held similar roles at Oando Energy Resources and Shell Nigeria, managing exploration and asset development.
            </p>
            <p>
              Mike has worked on strategic projects at Shell Research Centre Netherlands, Petroleum Development Oman (PDO), and Mobil Producing Nigeria, holding senior positions such as Exploration Team Lead and Seismology Discipline Lead.
            </p>
            <p>
              Academically, Mike holds a Bachelor&#39;s in Geology (Ahmadu Bello University), a Master&#39;s in Petroleum Geosciences (University of London), an MBA (University of Leicester), and a PhD in Leadership & Organizational Change (Walden University).
            </p>
            <p>
              He is certified in Lean Six Sigma (Black Belt), a registered Geoscientist (COMEG Nigeria), and a member of NAPE, SPE, NMGS, and AAPG.
            </p>
          </div>
        </div>
        {/* Meet the Team */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/jd.jpg" // Replace with actual image in /public
                  alt="Jane Doe"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-gray-600 text-sm">Senior Reservoir Engineer</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/jd.jpg"
                  alt="John Smith"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p className="text-gray-600 text-sm">Petrophysicist</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src="/jd.jpg"
                  alt="Amaka Umeh"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Amaka Umeh</h3>
              <p className="text-gray-600 text-sm">Production Technologist</p>
            </div>

            {/* Add more members as needed */}
          </div>
        </div>


        {/* CTA */}
        <div className="text-center text-gray-700">
          <p>The complete CVs of senior team members are available upon request.</p>
        </div>
      </div>
    </div>
  );
}
