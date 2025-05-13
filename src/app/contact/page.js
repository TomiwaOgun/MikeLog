import Image from "next/image";
import Link from "next/link";

export default function Contact() {
	return (
		<div className="gap-8 mb-4">
			<div className="text-center gap-8 mb-20">
				<h2 className="text-6xl font-bold mb-4">Contact Details</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				<div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
					<div className="relative w-50 h-50 mb-4">
						<Image
							src="/icons/location.png"
							alt="experience"
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<h3 className="text-lg font-semibold">
						14A Lanre Olumide Street, Agungi, Lekki Lagos
					</h3>
				</div>

				<div className="flex flex-col items-center bg-gray-50 p-6  rounded-lg shadow-md">
					<div className="relative w-50 h-50 mb-4">
						<Image
							src="/icons/phone.png"
							alt="experience"
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<h3 className="text-lg font-semibold">+2349090707700</h3>
				</div>
				<div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
					<div className="relative w-50 h-50 mb-4">
						<Image
							src="/icons/email.png"
							alt="experience"
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<h3 className="text-lg font-semibold">Mike@Mikelog.com</h3>
				</div>
			</div>
			<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
				<form
					action="https://formspree.io/f/xeoaoero"
					method="POST"
					className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6"
				>
					<div className="mb-6">
						<label
							htmlFor="name"
							className="block text-gray-700 mb-2"
						>
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-gray-700 mb-2"
						>
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-gray-700 mb-2"
						>
							Message:
						</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}
