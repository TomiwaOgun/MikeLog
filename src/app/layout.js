import Header from './components/header'; // Import the Header component
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Company Profile of Mikelog Energy Limited" />
        <title>Company Profile of Mikelog Energy Limited</title>
      </head>
      <body>
        <Header /> {/* Use the Header component here */}
        <main>{children}</main> {/* Ensure the children are wrapped in a <main> tag */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p>14A Lanre Olumide Street, </p>
              <p>Agungi, Lekki Lagos</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p>+2349090707700</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p>Mike@Mikelog.com</p>
            </div>
          </div>

          <div className="text-center mt-6 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MikelOg Energy Limited. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
