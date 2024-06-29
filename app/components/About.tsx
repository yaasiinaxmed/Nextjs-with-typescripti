import Image from "next/image";
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full h-[100vh] sm:h-[70vh] mt-8 sm:mt-0 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-3 md:gap-6"
    >
      <div className="flex flex-col gap-4 md:w-1/2 p-6 md:pl-16">
        <h2 className="text-3xl font-bold text-white text-center md:text-left">About</h2>
        <p className="font-medium text-sm md:text-lg text-center md:text-left whitespace-pre-line text-white">
          Lattobit is tired of watching everyone play hot potato with the 
          endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins.
          The Inu’s have had their day. It’s time for the most recognizable
          meme in the world to take his reign as king of the internet.
          Lattobit is tired of watching everyone play hot potato with the 
          endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins.
          The Inu’s have had their day. It’s time for the most recognizable
          meme in the world to take his reign as king of the internet.
        </p>
      </div>
      <figure className="w-[90%] md:w-auto pr-0 md:pr-12">
        <Image
          src="/About.png"
          alt="LOTTOBIT"
          width={500}
          height={200}
          layout="responsive"
          className="w-[90%] md:w-auto"
        />
      </figure>
    </section>
  );
}

export default About;
