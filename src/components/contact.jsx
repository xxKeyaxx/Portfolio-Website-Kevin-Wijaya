import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import ScrollReveal from "./ui/scrollreveal";
import "../App.css";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-accent-gold">Get In Touch</h2>
            <p className="text-gray-400 mt-4">
              Always looking for new opportunities, don't hesitate to reach out!
            </p>
          </div>
        </ScrollReveal>

        {/* CONTACT CARDS */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              value="wijayakevin2003@gmail.com"
              link="mailto:wijayakevin2003@gmail.com"
            />

            <ContactCard
              icon={<FaLinkedin size={28} />}
              title="LinkedIn"
              value="https://www.linkedin.com/in/kevin-wijaya-798ab521b"
              link="https://linkedin.com/in/kevin-wijaya-798ab521b"
            />

            <ContactCard
              icon={<FaGithub size={28} />}
              title="GitHub"
              value="github.com/xxKeyaxx"
              link="https://github.com/xxKeyaxx"
            />

            <ContactCard
              icon={<Phone size={28} />}
              title="Phone"
              value="+6282316788889"
              link="tel:+6282316788889"
            />

            <ContactCard
              icon={<MapPin size={28} />}
              title="Location"
              value="Binus Square Hall of Residence, Jakarta Barat, Indonesia (Alternative location: Semarang, Indonesia)"
              link="https://maps.app.goo.gl/4Rcf2sBGh4vRNa1K8"
            />

            <ContactCard
              icon={<FaInstagram size={28} />}
              title="Instagram"
              value="kw_kevinwijaya"
              link="https://www.instagram.com/kw_kevinwijaya"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* ================= COMPONENT ================= */

function ContactCard({ icon, title, value, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral-900 p-8 rounded-2xl
                 border border-accent-gold/10
                 hover:border-accent-gold
                 hover:-translate-y-2
                 transition duration-300
                 flex flex-col items-center text-center"
    >
      <div className="text-accent-gold mb-4">{icon}</div>
      <h4 className="text-lg font-semibold text-accent-gold">{title}</h4>
      <p className="text-gray-400 mt-2 text-sm break-all">{value}</p>
    </a>
  );
}

export default Contact;
