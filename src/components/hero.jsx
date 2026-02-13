import React from "react";
import "../App.css";
import { Typewriter } from "react-simple-typewriter";
import CV from "../assets/CV Kevin Wijaya.pdf";
import { FaFileAlt } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {
  //     setVisible(true);
  //   }, []);
  return (
    <section id="hero" className="hero min-h-screen bg-stone-950 text-white">
      <div className="hero-content text-center">
        <div className="max-w-3xl space-y-6">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-accent-gold">Kevin Wijaya</span>
          </h1>

          {/* Typewriter */}
          <h2 className="text-xl md:text-2xl">
            <span className="text-[#D4AF37]">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Backend Developer",
                  "Data Scientist",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300">
            I like to build things that makes a difference. I'm passionate about
            creating software that solves real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href={CV}
              className="btn bg-accent-gold text-black border-none
                         hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            >
              <FaFileAlt /> Download CV
            </a>
          </div>
        </div>
      </div>

      {/* === Learn More Scroll Indicator === */}
      <a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center text-gray-300 hover:text-accent-gold transition duration-300"
      >
        <span className="text-sm tracking-wide mb-2">Learn More About Me</span>

        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
