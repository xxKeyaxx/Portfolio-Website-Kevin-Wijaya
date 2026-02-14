import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ScrollReveal from "./ui/scrollreveal";
import "../App.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent-gold">
              Portfolio (Work In-Progress)
            </h2>
            <div className="w-24 h-0.5 bg-accent-gold mx-auto mt-4"></div>

            <p className="text-gray-300 mt-4">
              Selected projects and academic contributions
            </p>
          </div>
        </ScrollReveal>

        {/* ================= PAPERS ================= */}
        <ScrollReveal>
          <SectionTitle title="Papers" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-8">
            <PaperCard
              title="Predicting Company Valuation using Machine Learning based on Company Fundamentals and Macroeconomic Data – The Indonesian Case"
              journal="Master's Thesis - Binus University"
              year="2026"
              description="Research on predicting company valuation using machine learning models based on financial fundamentals and macroeconomic variables in the Indonesian market. Gathered data from all publicly listed companies in Indonesia from 2000-2024, created a dataset based off of it, and trained multiple machine learning models to forecast company valuation."
              paper_link="https://binusianorg-my.sharepoint.com/personal/kevin_wijaya018_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQB_cRDCVdaFQIoGVfQp6w2hAfeLXdgWkmWuco4fXo7_WTY&e=6ZaLgK"
              github="https://github.com/xxKeyaxx/Predicting-Company-Valuation-Using-ML-Based-on-Company-Fundamentals-and-Macroeconomic-Data-Indonesia"
            />

            <PaperCard
              title="Applying Transfer Learning on Various GNN Model Training in Indoor Positioning System Tasks"
              journal="Skripsi - Binus University (Accepted, awaiting publication in JADS)"
              year="2025/2026"
              description="Research focused on improving positioning accuracy by RSSI through innovative training schema using graph-based neural network modeling."
              paper_link="https://binusianorg-my.sharepoint.com/personal/kevin_wijaya018_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQCKQTQLN6TSSoZzYzhSXHIhAcVYUfO1SAW_c9BrnjHM_nU&e=HJhta7"
              github="https://github.com/xxKeyaxx/Applying-Transfer-Learning-on-Various-GNN-Model-Training-in-Indoor-Positioning-System-Tasks"
            />

            <PaperCard
              title="Tackling Clickbait with Machine Learning: A Comparative Study of Binary Classification Models for YouTube Title"
              journal="Conference Paper - ICCSCI 2023"
              year="2023"
              description="Research focused on comparing the performance of various machine learning models in classifying YouTube video titles as clickbait or non-clickbait, utilizing a dataset of 31.987 labeled titles and evaluating models based on accuracy, precision, recall, and F1-score."
              paper_link="https://doi.org/10.1016/j.procs.2023.10.526"
              github="https://github.com/Torasputr/Youtube-Clickbait-Classification-Code"
            />

            {/* Add more papers here if needed */}
          </div>
        </ScrollReveal>

        {/* ================= PROJECTS ================= */}
        <ScrollReveal>
          <SectionTitle title="Projects (For others please look at my GitHub, I'm in the process of adding them here)" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            <ProjectCard
              title="Sales Force Management System (Internship)"
              description="A Django-based internal platform built to streamline salesperson activities, integrating analytics dashboards, mapping, incentive tracking, and clinic monitoring."
              tech={["Django", "Python", "PostgreSQL", "Analytics"]}
              github="#"
              demo="#"
            />

            <ProjectCard
              title="Personal Portfolio Website"
              description="Modern React + Tailwind + DaisyUI portfolio website with animated hero, timeline resume, and scroll reveal effects."
              tech={["React", "Tailwind", "DaisyUI"]}
              github="https://github.com/xxKeyaxx"
              demo="https://xxkeyaxx.github.io/Portfolio-Website-Kevin-Wijaya"
            />
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
            <FaGithub size={18} />
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

function PaperCard({ title, journal, year, description, paper_link, github }) {
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
      <div className="flex gap-6 text-accent-gold">
        {paper_link && (
          <a
            href={paper_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FileText size={18} />
            View Publication
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaGithub size={18} />
            Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
