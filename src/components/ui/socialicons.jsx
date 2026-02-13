import React from "react";
import "../../App.css";

const SocialIcons = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
            text-2xl
            relative
            text-text-secondary)
            transition duration-300
            hover:text-accent-gold
            hover:scale-110
            after:absolute
            after:bottom-0
            after:left-0
            after:h-[2px]
            after:w-0
            after:bg-accent-gold
            after:transition-all
            after:duration-300
            hover:after:w-full
            "
    >
      {children}
    </a>
  );
};

export default SocialIcons;
