import React from "react";
import "../App.css";
import { Download, ExternalLink } from "lucide-react";
import ScrollReveal from "./ui/scrollreveal";
import { FaFileAlt } from "react-icons/fa";
import CV from "../assets/CV Kevin Wijaya.pdf";

const Resume = () => {
  return (
    <section id="resume" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">
              Resume /<span className="text-accent-gold"> CV</span>
            </h2>
            <div className="w-24 h-0.5 bg-accent-gold mx-auto mt-4"></div>
            <a
              href={CV}
              className="btn mt-6 border-accent-gold text-accent-gold bg-transparent
                       hover:bg-accent-gold hover:text-black transition duration-300"
            >
              <FaFileAlt />
              Download CV
            </a>
          </div>
        </ScrollReveal>

        {/* ================= WORK EXPERIENCE ================= */}
        <ScrollReveal>
          <SectionTitle title="Work Experience" />
        </ScrollReveal>

        <ScrollReveal>
          <ul className="timeline timeline-snap-icon timeline-vertical">
            {/* PT Pharos */}
            <li>
              <div className="timeline-middle text-accent-gold">●</div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-gray-400">
                  Feb 2024 – Jul 2024
                </time>
                <div className="text-lg font-bold text-accent-gold">
                  Back-End Developer – PT Pharos Indonesia
                </div>
                <ul
                  className="mt-3 list-disc pr-4 text-right text-gray-300 space-y-2"
                  dir="rtl"
                >
                  <li>
                    Built a Django-based application from ground-up serving 80+
                    sales personnel
                  </li>
                  <li>
                    Integrated analytics dashboards, incentives tracking,
                    mapping, and client monitoring
                  </li>
                  <li>
                    Led backend development and mentored transitioning
                    developers
                  </li>
                </ul>
              </div>
              <hr className="bg-accent-gold" />
            </li>

            {/* IBuddy */}
            <li>
              <hr className="bg-accent-gold" />
              <div className="timeline-middle text-accent-gold">●</div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-gray-400">
                  Feb 2023 – Jun 2023
                </time>
                <div className="text-lg font-bold text-accent-gold">
                  IBuddy – BINUS University
                </div>
                <ul className="mt-3 list-disc pl-4 text-gray-300 space-y-2">
                  <li>
                    Guiding international students from various countries to
                    acclimate to their life in Jakarta
                  </li>
                  <li>
                    Master of Ceremonies - Welcoming New International Students
                  </li>
                </ul>
              </div>
              <hr className="bg-accent-gold" />
            </li>

            {/* English Tutor */}
            <li>
              <hr className="bg-accent-gold" />
              <div className="timeline-middle text-accent-gold">●</div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-gray-400">
                  Nov 2022 – Feb 2023
                </time>
                <div className="text-lg font-bold text-accent-gold">
                  Spelling Bee Coach for Asian English Olympics 2023 – BINUS
                  University
                </div>
                <ul
                  className="mt-3 list-disc pr-4 text-right text-gray-300 space-y-2"
                  dir="rtl"
                >
                  <li>
                    Coaching the Bina Nusantara University representatives for
                    Asian English Olympics 2023 Spelling Bee competition
                  </li>
                </ul>
              </div>
              <hr className="bg-accent-gold" />
            </li>

            {/* English Tutor */}
            <li>
              <hr className="bg-accent-gold" />
              <div className="timeline-middle text-accent-gold">●</div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-gray-400">
                  Sep 2022 – Jan 2023
                </time>
                <div className="text-lg font-bold text-accent-gold">
                  English Tutor – BINUS University
                </div>
                <ul className="mt-3 list-disc pl-4 text-gray-300 space-y-2">
                  <li>
                    Taught freshman-level English via structured lectures and
                    projects.
                  </li>
                  <li>
                    Improved academic communication and presentation skills.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </ScrollReveal>

        {/* ================= EDUCATION ================= */}
        <ScrollReveal>
          <SectionTitle title="Education" />
        </ScrollReveal>

        <ScrollReveal>
          <ul className="timeline timeline-snap-icon timeline-vertical">
            {/* Master */}
            <li>
              <div className="timeline-middle text-accent-gold">●</div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-gray-400">
                  2024 – Ongoing
                </time>
                <div className="text-lg font-bold text-accent-gold">
                  Master of Computer Science – BINUS University
                </div>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
                  <p>Current GPA: 3.93</p>
                  <p>Minor: Cybersecurity and AI Research</p>
                  <div className="flex flex-col md:flex-row gap-4 mt-3 justify-end-safe">
                    <a
                      href="https://www.linkedin.com/in/kevin-wijaya-798ab521b/details/education/1771913265945/single-media-viewer/?profileId=ACoAADeDiSQBNiVAqVvWAJ1e7tQTt_SEN8Q0KYw"
                      className="btn border-accent-gold text-accent-gold bg-transparent
                       hover:bg-accent-gold hover:text-black transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Score Transcript
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </ul>
              </div>
              <hr className="bg-accent-gold" />
            </li>

            {/* Bachelor */}
            <li>
              <hr className="bg-accent-gold" />
              <div className="timeline-middle text-accent-gold">●</div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-gray-400">
                  2021 – 2024
                </time>
                <div className="text-lg font-bold text-accent-gold">
                  Bachelor of Computer Science – BINUS University
                </div>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
                  <p>GPA: 3.90</p>
                  <p>
                    Learned general Computer Science and many related skills
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 mt-3">
                    <a
                      href="https://www.linkedin.com/in/kevin-wijaya-798ab521b/overlay/education/746105872/multiple-media-viewer/?profileId=ACoAADeDiSQBNiVAqVvWAJ1e7tQTt_SEN8Q0KYw&treasuryMediaId=1748241762111"
                      className="btn border-accent-gold text-accent-gold bg-transparent
                       hover:bg-accent-gold hover:text-black transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Score Transcript
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kevin-wijaya-798ab521b/overlay/education/746105872/multiple-media-viewer/?profileId=ACoAADeDiSQBNiVAqVvWAJ1e7tQTt_SEN8Q0KYw&treasuryMediaId=1748241762112"
                      className="btn border-accent-gold text-accent-gold bg-transparent
                       hover:bg-accent-gold hover:text-black transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Graduation Certificate
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </ul>
              </div>
              <hr className="bg-accent-gold" />
            </li>
            {/* Highschool */}
            <li>
              <hr className="bg-accent-gold" />
              <div className="timeline-middle text-accent-gold">●</div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-gray-400">
                  2019 – 2021
                </time>
                <div className="text-lg font-bold text-accent-gold">
                  MIPA – SMA Kolese Loyola
                </div>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
                  <p>
                    Activities and societies: Member of Computer and Taekwondo
                    Club
                  </p>
                  <p>
                    Volunteer in Fundraising Activities, Data processing, and
                    Logistics Management
                  </p>
                </ul>
              </div>
            </li>
          </ul>
        </ScrollReveal>

        {/* ================= SKILLS ================= */}
        <ScrollReveal>
          <SectionTitle title="Skills" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <SkillGroup
              title="Programming & Frameworks"
              skills={[
                "C",
                "C++",
                "Java",
                "Python",
                "R",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "SQL",
                "PHP",
                "Go",
              ]}
            />

            <SkillGroup
              title="Frameworks and Tools"
              skills={[
                "Django",
                "Laravel",
                "React",
                "Tailwind",
                "GitHub",
                "AWS",
                "Oracle Cloud",
                "Wireshark",
                "Burp Suite",
                "Nmap",
              ]}
            />

            <SkillGroup
              title="Competencies"
              skills={[
                "Full-Stack Development",
                "Machine Learning",
                "Cybersecurity",
                "OOP",
                "Cloud Computing",
                "Teaching English",
                "Graphic Design",
                "Multimedia Editing",
                "Writing",
              ]}
            />
          </div>
          <div className="grid md:grid gap-10 mb-16">
            <SkillGroup
              title="Languages"
              skills={[
                "Indonesian (Native/Bilingual Proficiency)",
                "English (TOEFL ITP: 644) (Native/Bilingual Proficiency)",
                "Mandarin Chinese (Beginner Proficiency)",
                "Japanese (Beginner Proficiency)",
              ]}
            />
          </div>
        </ScrollReveal>

        {/* ================= CERTIFICATIONS & AWARDS ================= */}
        <ScrollReveal>
          <SectionTitle title="Certificates & Awards" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6 mb-16">
            <div
              className="p-6 border border-accent-gold/30 rounded-xl
                    hover:border-accent-gold transition duration-300
                    bg-neutral-900"
            >
              <h4 className="text-lg font-semibold text-accent-gold">
                Oracle Cloud Infrastructure 2023 Certified Foundations Associate
              </h4>
              <p className="text-gray-300 mt-2">
                Issued June 2023 | Expired June 2025
              </p>
              <p className="text-gray-300 mt-2">Credential ID OC4212197</p>
            </div>
            <div
              className="p-6 border border-accent-gold/30 rounded-xl
                    hover:border-accent-gold transition duration-300
                    bg-neutral-900"
            >
              <h4 className="text-lg font-semibold text-accent-gold">
                AWS Academy Graduate – Cloud Foundations
              </h4>
              <p className="text-gray-300 mt-2">Issued October 2024</p>
              <a
                href="https://www.credly.com/badges/a2475865-3459-4edc-a950-c45c068fa2c1"
                className="btn mt-6 border-accent-gold text-accent-gold bg-transparent
                       hover:bg-accent-gold hover:text-black transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Show Credential
                <ExternalLink size={18} />
              </a>
            </div>
            <SimpleCard
              title="Semifinalist – Asian English Olympics 2022"
              subtitle="February 2022 | Spelling Bee"
            />
          </div>
        </ScrollReveal>

        {/* ================= ORGANIZATION ================= */}
        <ScrollReveal>
          <SectionTitle title="Organization Experience" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6">
            <div
              className="p-6 border border-accent-gold/30 rounded-xl
                    hover:border-accent-gold transition duration-300
                    bg-neutral-900"
            >
              <h4 className="text-lg font-semibold text-accent-gold">
                Binus Square Student Committee
              </h4>
              <p className="text-gray-300 mt-2">
                Feb 2023 - Dec 2023 | Creative Media Staff
              </p>
              <p className="text-gray-300 mt-2">
                Making events for BINUS dormitory students and BINUS students at
                large.
              </p>
              <p className="text-gray-300 mt-2">
                Acted as staff and/or coordinators in various events such as
                BSSC WONDER 2023, BSSC Seminar 2023, and BSSC Squarelympic 2023.
              </p>
            </div>
            <SimpleCard
              title="Fast Response Community"
              subtitle="Dec 2022 – Dec 2023 | First Aid Team"
            />
            <SimpleCard
              title="Bina Nusantara Computer Club"
              subtitle="Sep 2021 – Aug 2022 – Member"
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
    <div className="mb-10 mt-10">
      <h3 className="text-2xl font-bold text-accent-gold border-b border-accent-gold pb-2 inline-block">
        {title}
      </h3>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-accent-gold mb-4">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 border border-accent-gold
                       text-accent-gold rounded-full text-sm
                       hover:bg-accent-gold hover:text-black
                       transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SimpleCard({ title, subtitle }) {
  return (
    <div
      className="p-6 border border-accent-gold/30 rounded-xl
                    hover:border-accent-gold transition duration-300
                    bg-neutral-900"
    >
      <h4 className="text-lg font-semibold text-accent-gold">{title}</h4>
      <p className="text-gray-300 mt-2">{subtitle}</p>
    </div>
  );
}

export default Resume;
