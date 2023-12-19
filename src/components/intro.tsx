import React from "react";
import Image from "next/image";
import CtaButtons from "@/components/ctaButtons";

export default function Intro() {
  return (
    <section
      id="home"
      className="flex justify-center gap-x-6 sm:mb-0 pt-28 sm:pt-36"
    >
      <div
        data-id="yellow-decoration-marker"
        className="absolute h-1/5 self-center w-full bg-yellow-400 bg-opacity-70"
      />
      <div className="flex gap-10">
        <div className="flex flex-col justify-center gap-y-2 relative">
          <div className="flex font-serif text-6xl text-blue-950">
            Hi, my name is
            <br />
            Melissa
          </div>
          <div className="text-xl font-sans">
            I&apos;m a Software Developer living in Ottawa, Canada
          </div>
          <CtaButtons className="absolute left-0 right-0 bottom-0" />
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/images/mel-cutout-bg.png"
            alt="profile photo"
            width={300}
            height={220}
            priority={true}
            className="flex object-cover shadow-xl splatter"
          />
        </div>
      </div>
    </section>
  );
}
