import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
Create Header Component:

In the components/layout directory, create a file named Header.tsx.

import Link from "next/link"
import Button from "../commons/Button"

const Header: React.FC = () => {
  return (
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl md:text-4xl font-semibold">Cine<span className="text-[#E2D609]">Seek</span></h2>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Home</Link>
          <Link href="/movies" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Movies</Link>
          <Link href="/contact" className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold">Contact</Link>
        </nav>
        <div className="flex md:hidden">
          <Button title="Sign in" />
        </div>
        <div className="hidden md:flex">
          <Button title="Sign in" />
        </div>
      </div>
    </header>

  )
}

export default Header
Create Footer Component:

In the components/layout directory, create a file named Footer.tsx.

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D22] text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Footer Logo */}
        <h2 className="text-xl md:text-4xl font-semibold mb-4 md:mb-0">
          Cine<span className="text-[#E2D609]">Seek</span>
        </h2>

        <nav className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Home</Link>
          <Link href="/movies" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Movies</Link>
          <Link href="/contact" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Contact</Link>
          <Link href="/privacy" className="hover:text-[#E2D609] text-lg transition-colors duration-300">Privacy Policy</Link>
        </nav>

        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2D609]">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 CineSeek. All rights reserved.</p>
      </div>
    </footer>

  );
};

export default Footer;