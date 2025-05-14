import Header from "./components/header"; // Import the Header component
import "./global.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="Company Profile of Mikelog Energy Limited"
				/>
				<title>Company Profile of Mikelog Energy Limited</title>
			</head>
			<body>
				<Header />
				<main>{children}</main>{" "}
				<footer className="bg-gray-900 text-white py-8">
					<div className="text-center mt-6 text-sm text-gray-400">
						&copy; {new Date().getFullYear()} MikelOg Energy Limited. All rights
						reserved.
					</div>
				</footer>
			</body>
		</html>
	);
}
