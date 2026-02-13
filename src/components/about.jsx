import React from "react";
import "../App.css";
import ScrollReveal from "./ui/scrollreveal";
import { Code2, Server, ChartNetwork } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-16 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              About <span className="text-accent-gold">Me</span>
            </h2>
            <div className="w-24 h-0.5 bg-accent-gold mx-auto mt-4"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* Bio */}
          <div className="max-w-4xl mx-auto text-center text-gray-300 mb-12">
            <p>
              I'm a Master's student about to graduate from Bina Nusantara
              University majoring in Computer Science. Skilled in general
              coding, machine learning, multimedia editing/design. Able to speak
              English at a Bilingual level. Interested in technology, finance,
              and history. I like building intelligent systems that solve
              real-world problems.
            </p>
            <p className="mt-4">
              Interned as a back-end developer. Have previously taught English
              to BINUS University undergraduate students and coaching BINUS
              University's representatives in Asian English Olympics (AEO) 2023
              Spelling Bee Competition. A semifinalist in AEO 2022 Spelling Bee
              Competition.
            </p>
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Software Engineer */}
          <ScrollReveal delay={0.1}>
            <div
              className="card group bg-base-100 border border-neutral-800
                      hover:border-accent-gold
                      hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]
                      transition duration-300"
            >
              <figure className="pt-10">
                <div
                  className="w-24 h-24 rounded-full
                          border-2 border-accent-gold
                          bg-accent-gold/10
                          flex items-center justify-center
                          transition duration-300
                          group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <Code2 size={36} className="text-accent-gold" />
                </div>
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title text-accent-gold">
                  Software Engineer
                </h2>
                <p className="text-gray-300">
                  Designing and developing various pilot and deployed
                  applications with various architectures and pleasant UI/UX for
                  optimal user experience.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Backend Developer */}
          <ScrollReveal delay={0.3}>
            <div
              className="card group bg-base-100 border border-neutral-800
                      hover:border-accent-gold
                      hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]
                      transition duration-300"
            >
              <figure className="pt-10">
                <div
                  className="w-24 h-24 rounded-full
                          border-2 border-accent-gold
                          bg-accent-gold/10
                          flex items-center justify-center
                          transition duration-300
                          group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <Server size={36} className="text-accent-gold" />
                </div>
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title text-accent-gold">
                  Backend Developer
                </h2>
                <p className="text-gray-300">
                  Experience from internship making a salespoint application and
                  system focused on user needs, performance, and efficient data
                  handling.
                </p>
              </div>
            </div>
          </ScrollReveal>
          {/* Data Scientist */}
          <ScrollReveal delay={0.5}>
            <div
              className="card group bg-base-100 border border-neutral-800
                      hover:border-accent-gold
                      hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]
                      transition duration-300"
            >
              <figure className="pt-10">
                <div
                  className="w-24 h-24 rounded-full
                          border-2 border-accent-gold
                          bg-accent-gold/10
                          flex items-center justify-center
                          transition duration-300
                          group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <ChartNetwork size={36} className="text-accent-gold" />
                </div>
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title text-accent-gold">Data Scientist</h2>
                <p className="text-gray-300">
                  Gathering data, analyzing datasets, and developing ML models
                  in various projects (incl. published papers) to extract
                  insights.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
