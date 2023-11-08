import { useState } from "react";

import { BiLogoLinkedin, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="w-full fixed top-0 left-0 flex justify-center items-center  h-24 bg-white font-mono shadow-xl text-[#8F5D46] px-5">
        <div className="w-[980px] flex justify-between">
          <div>
            <img src="#" alt="Logo" />
          </div>
          <div className="hidden md:flex gap-10">
            <ul className="flex gap-10">
              <Link to="/">
                <li>Sobre</li>
              </Link>
              <Link to="video">
                <li>Videos</li>
              </Link>
              <Link to="texto">
                <li>Textos</li>
              </Link>
              <a
                href="https://www.linkedin.com/in/danielagentil/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/DanielaGentil1"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/danielagentill"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoInstagram size={20} />
              </a>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>☰</button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="mobile-menu">
            <Link to="/">
              <li>Sobre</li>
            </Link>
            <Link to="video">
              <li>Videos</li>
            </Link>
            <Link to="texto">
              <li>Textos</li>
            </Link>
          </ul>
        )}
      </nav>

      <Outlet />
    </>
  );
};
export default Navbar;
