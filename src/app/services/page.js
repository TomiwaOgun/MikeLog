import Image from "next/image";
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
		"Manpower Management",
	];

	return (
		<div className="w-full bg-white/80 backdrop-blur-sm p-8 mt-16">
			<div className="flex flex-col items-start gap-8 w-full">
				{/* Left Section for Header */}
				<div className="text-left mb-8 bg-green-700 rounded-lg">
					<h1
						style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
						className="text-6xl text-white font-bold"
					>
						What We Do...{" "}
					</h1>
				</div>

				{/* Center Section for List */}
				<div className="w-full flex  justify-center">
					<ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
						{servicesList.map((service, index) => (
							<li
								key={index}
								className="flex items-start"
							>
								<span className="text-blue-600 mr-2">✓</span>
								<span
									style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
									className="text-gray-700 text-2xl"
								>
									{service}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Grid of Images */}
			<div className="w-full grid grid-cols-5 gap-20 mb-15">
				<div className="relative w-full h-64">
					<Image
						src="/images/image1.jpg"
						alt="Image 1"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image2.jpg"
						alt="Image 2"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image3.jpg"
						alt="Image 3"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image4.jpg"
						alt="Image 4"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image5.jpg"
						alt="Image 5"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image6.jpg"
						alt="Image 6"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image7.jpg"
						alt="Image 7"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image8.jpg"
						alt="Image 8"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image9.jpg"
						alt="Image 9"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
				<div className="relative w-full h-64">
					<Image
						src="/images/image10.jpg"
						alt="Image 10"
						layout="fill"
						objectFit="cover"
						className="rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
}
