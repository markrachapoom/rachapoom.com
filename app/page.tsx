import Image from "next/image";
import React from "react";

const socials = [
  {
    name: "Twitter",
    url: "https://www.twitter.com/markrachapoom",
  },
  {
    name: "Github",
    url: "https://www.github.com/markrachapoom",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/markrachapoom",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/markrachapoom",
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen items-center bg-black">
      {/* sticky header */}
      <div className="flex sticky top-0 z-50 items-center justify-between w-full p-3 border-b border-dark-divider bg-[rgb(13,13,13,0.8)] backdrop-blur-xl">
        <div className="flex flex-row items-center gap-3">
          <img
            src="https://pbs.twimg.com/profile_images/1669924632881942529/uVVtVMaK_400x400.jpg"
            alt="banner"
            className="w-7 h-7 rounded-full"
          />
          <span className="max-sm:hidden">Mark Rachapoom</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {socials.map((social) => {
            return (
              <a href={social.url} target="_blank" key={social.name}>
                <span className="max-sm:text-sm">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* content */}

      <div className="flex flex-col w-full p-4 max-w-4xl z-0 h-auto gap-24 py-12">
        <div className="flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl font-medium text-center font-serif">
              Mark Rachapoom
            </h1>
            <p>
              Hey there, I&apos;m Mark Rachapoom, a 21-year-old college dropout
              and former software engineer for a startup in Silicon Valley who
              can design and build iOS, Website, Full-Stack apps.
            </p>
          </div>

          {/* <div className="flex flex-row items-center justify-between gap-4 w-full">
              {socials.map((social) => {
                return (
                  <a href={social.url} target="_blank" key={social.name} className="flex items-center justify-center w-full rounded-full border p-2 border-dark-divider hover:border-dark-dividerContrast transition-all">
                    <span className="">{social.name}</span>
                  </a>
                );
              })}
            </div> */}

          <div className="grid grid-cols-2 gap-4 w-full h-screen">
            <div className="grid grid-rows-2 gap-4 w-full h-screen">
              <ImageCard
                src="mark-naval.jpeg"
                alt="Mark & Naval"
                caption="Taking a walk with Naval Ravikant for 2 hours"
              />
              <ImageCard
                src="/nonce-kumar-mark.jpeg"
                alt="Mark & Naval"
                caption="Seoul, South Korea"
              />
            </div>

            <div className="grid grid-rows-3 gap-4 w-full h-screen">
              <ImageCard
                src="/talent-protocol-stage.jpeg"
                alt="Mark & Naval"
                caption="Paris, France"
              />
              <ImageCard
                src="https://pbs.twimg.com/media/F_6MTEFaAAAlSLu?format=jpg&name=4096x4096"
                alt="Mark & Naval"
                caption="Stinson Beach, California"
              />
              <ImageCard
                src="/nonce.jpeg"
                alt="Mark & Naval"
                caption="Nonce Community, South Korea"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-12">
          <h1 className="text-4xl font-medium text-center font-serif underline underline-offset-8 decoration-dark-dividerContrast">
            Projects
          </h1>

          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">

              <span className="text-2xl font-medium leading-tight">Merse</span>

              <p className="text-dark-text-secondary">
                We&apos;re crafting tools that transform your everyday moments,
                stories, experiences into lasting legacies in every form —
                comics, books, films, voice recordings, autobiographies, and
                beyond.
              </p>
            </div>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RSO1GCPq8r8?si=nO3mU2n0n6rfjfiz"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              className="w-full aspect-video h-auto border border-dark-divider rounded-2xl"
            ></iframe>
          </div>

          {/* Project/Quickpitch */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <span className="text-2xl font-medium leading-tight">Quickpitch</span>

              <p className="text-dark-text-secondary">
                Demo Day In Your Pocket: Discover startups on a Tinder-style platform: founders pitch in 15 seconds, refine through feedback, and connect with VCs.
              </p>
            </div>

            <img
              src="/quickpitch.png"
              alt="quickpitch screenshots"
              className="w-full aspect-video h-auto border border-dark-divider rounded-2xl"
            />

          </div>

        </div>
      </div>
    </main>
  );
}

const ImageCard: React.FC<{
  src: string;
  alt: string;
  caption: string;
}> = ({ src, alt, caption }) => {
  return (
    <div className="relative flex flex-col border-dark-divider h-full overflow-clip group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover filter grayscale transition-all duration-500 ease-in-out"
      />

      <span className="py-2 absolute bottom-0 bg-black text-dark-text-secondary text-sm w-full">
        {caption}
      </span>
    </div>
  );
};
