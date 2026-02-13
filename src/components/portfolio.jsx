import React from "react";
import { ExternalLink, Github, FileText } from "lucide-react";
import ScrollReveal from "./ui/scrollreveal";
import "../App.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent-gold">Portfolio (Work In-Progress)</h2>
            <div className="w-24 h-0.5 bg-accent-gold mx-auto mt-4"></div>

            <p className="text-gray-300 mt-4">
              Selected projects and academic contributions
            </p>
          </div>
        </ScrollReveal>


      </div>
    </section>
  );
};

/* ================= COMPONENTS ================= */

function SectionTitle({ title }) {
  return (
    <div className="mb-12 mt-10">
      <h3 className="text-2xl font-bold text-accent-gold border-b border-accent-gold pb-2 inline-block">
        {title}
      </h3>
    </div>
  );
}

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div
      className="bg-neutral-900 p-8 rounded-2xl
                    border border-accent-gold/20
                    hover:border-accent-gold
                    hover:-translate-y-2
                    transition duration-300"
    >
      <h4 className="text-xl font-semibold text-accent-gold mb-4">{title}</h4>

      <p className="text-gray-300 mb-6">{description}</p>

      <div className="flex flex-wrap gap-3 mb-6">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 border border-accent-gold
                       text-accent-gold rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-6 text-accent-gold">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Github size={18} />
            Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <ExternalLink size={18} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

function PaperCard({ title, journal, year, description, link }) {
  return (
    <div
      className="bg-neutral-900 p-8 rounded-2xl
                    border border-accent-gold/20
                    hover:border-accent-gold
                    transition duration-300"
    >
      <div className="flex justify-between items-start flex-wrap gap-4">
        <h4 className="text-xl font-semibold text-accent-gold">{title}</h4>

        <span className="text-sm text-gray-400">
          {journal} • {year}
        </span>
      </div>

      <p className="text-gray-300 mt-4 mb-6">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2
                   text-accent-gold
                   hover:underline"
      >
        <FileText size={18} />
        View Publication
      </a>
    </div>
  );
}

export default Portfolio;
