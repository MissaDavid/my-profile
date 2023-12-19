import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import React from "react";

type CtaProps = { className: string };

function CtaButtons({ className }: CtaProps) {
  return (
    <div className={`flex flex-row gap-x-2 text-lg ${className}`}>
      <Link
        href="#contact"
        className="flex items-center bg-blue-950 text-white font-sans px-6 py-2 gap-2 shadow-md rounded-lg cta-focus"
      >
        <BsArrowRight />
        Contact Me
      </Link>
      <a
        href="/resume-mt.pdf"
        target="_blank"
        className="flex items-center bg-white text-gray-900 px-6 py-2 gap-2 shadow-md rounded-lg cta-focus"
      >
        <HiDownload />
        Download CV
      </a>
      <a
        href="https://www.linkedin.com/in/mel-david/"
        target="_blank"
        className="bg-white p-2 text-gray-800 text-[1.5rem] shadow-md rounded-lg cta-focus"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/MissaDavid"
        target="_blank"
        className="bg-white p-2 text-gray-800 text-[1.5rem] shadow-md rounded-lg cta-focus"
      >
        {" "}
        <BsGithub />{" "}
      </a>
    </div>
  );
}

export default CtaButtons;
