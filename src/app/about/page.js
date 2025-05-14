import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-8">
				{/* Page Title */}
				<h1
					style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
					className="text-6xl font-bold text-center mb-15"
				>
					About Us
				</h1>

				{/* Introduction */}
				<div className="flex flex-col md:flex-row items-center gap-8 mb-12">
					<div className="text-center md:text-left">
						<h2 className="text-3xl font-semibold mb-4">Who we are</h2>
						<p
							style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
							className="text-gray-700 text-2xl mb-4"
						>
							MikelOg Energy Limited is an Integrated Subsurface Consultancy
							Company led by seasoned professionals with hands-on experience in
							successfully delivering oil and gas projects across West Africa,
							the Middle East, Europe, and the Americas.
						</p>
						<p
							style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
							className="text-gray-700 text-2xl mb-4"
						>
							Our expertise spans Geosciences, Petrophysics, Reservoir
							Engineering, Production Technology, and Economics. We also
							collaborate with leading Surface Engineering and Facilities
							professionals to deliver holistic solutions.
						</p>
						<p
							style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
							className="text-gray-700 text-2xl"
						>
							We pride ourselves on cost-effective, value-adding services that
							maximize project outcomes across the entire asset life cycle.
						</p>
					</div>
				</div>

				{/* Vision and Mission */}

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
						<p
							style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
							className="text-gray-600 text-lg"
						>
							To be the go-to energy consultancy team of high repute in Nigeria.
						</p>
					</div>
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
						<p
							style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
							className="text-gray-600 text-lg"
						>
							To provide efficient and innovative energy solutions to our
							clients while ensuring the safety of our workers and the
							environment.
						</p>
					</div>

					<div className="flex flex-col items-center bg-gray-50 p-6  rounded-lg shadow-md">
						<div className="relative w-100 h-100 mb-4">
							<Image
								src="/experience.jpg"
								alt="experience"
								fill
								className="rounded-full object-cover"
							/>
						</div>
						<h3 className="text-lg font-semibold">Our Experience</h3>
						<p
							style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
							className="text-gray-600 text-lg"
						>
							Our team of experts are seasoned professionals with hands-on
							experience in the successful delivery of oil and gas projects in
							West Africa, Middle East, Europe, and Americas, and we have
							successfully completed numerous projects for major oil and gas
							companies in Nigeria.
						</p>
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
						<p className="text-gray-600 text-lg">
							We use the latest technologies and techniques to optimize
							exploration and production, and we work closely with our clients
							to ensure their specific needs are met.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
