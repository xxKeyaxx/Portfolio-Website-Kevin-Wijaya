import React, { useEffect, useState } from "react";
import "../App.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolderOpen,
} from "react-icons/fa";
import SocialIcons from "./ui/socialicons";

import formalPhoto from "../assets/Formal Photo.jpg";
import CV from "../assets/CV Kevin Wijaya.pdf";


const sections = [
  { id: "hero", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "resume", label: "Resume/CV", icon: <FaFileAlt /> },
  { id: "portfolio", label: "Portfolio", icon: <FaFolderOpen /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Header = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 h-screen w-2xs bg-black text-gray-300 flex flex-col items-center py-8">
      {/* Profile */}
      <div className="flex flex-col items-center">
        <div className="
            w-36 h-36
            rounded-full
            p-1
            bg-[var(--color-accent-gold-dark)]
            shadow-[0_0_12px_var(--color-accent-gold)]
            ">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                src={formalPhoto}
                alt="Profile"
                className="w-full h-full object-cover"
                />
            </div>
        </div>

        <h1 className="mt-4 text-xl font-semibold text-center">Kevin Wijaya</h1>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-2xl">
          <SocialIcons href="https://www.linkedin.com/in/kevin-wijaya-798ab521b">
            <FaLinkedin />
          </SocialIcons>

          <SocialIcons href="https://github.com/xxKeyaxx">
            <FaGithub />
          </SocialIcons>

          <SocialIcons href={CV}>
            <FaFileAlt />
          </SocialIcons>

          <SocialIcons href="mailto:wijayakevin2003@gmail.com">
            <FaEnvelope />
          </SocialIcons>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-10 w-full">
        <ul className="flex flex-col gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`flex items-center gap-3 px-6 py-3 transition ${
                  active === section.id
                    ? "bg-[var(--color-accent-gold-dark)] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section.icon}
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
