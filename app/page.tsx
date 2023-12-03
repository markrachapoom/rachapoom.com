import Image from "next/image";
import React from "react";

import { FiArrowUpRight, FiChevronRight, FiLink } from "react-icons/fi";

const socials = [
  {
    name: "Twitter",
    url: "https://www.twitter.com/markrachapoom",
  },
  {
    name: "GitHub",
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

          <Image
            src={"https://pbs.twimg.com/profile_images/1669924632881942529/uVVtVMaK_400x400.jpg"}
            alt="banner"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full bg-dark-background-secondary"
          />

          <span className="max-sm:hidden text-sm">Mark Rachapoom</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          {socials.map((social) => {
            return (
              <a
                href={social.url}
                target="_blank"
                key={social.name}
                className="opacity-50 hover:opacity-100 transition-opacity text-sm"
              >
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
                src="/mark-naval.jpeg"
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
              <div className="flex flex-row items-center gap-3 w-full">
                <span className="text-2xl font-medium leading-tight">
                  Merse
                </span>

                <a
                  href="https://www.merse.co"
                  target="_blank"
                  className="flex flex-row items-center text-neutral-300 gap-1 pl-4 pr-2 py-1 rounded-full border border-dark-divider hover:border-dark-dividerContrast transition-all"
                >
                  {/* <FiLink className="w-3 h-3"/> */}
                  <span className="text-sm">merse.co</span>
                  <FiArrowUpRight className="w-4 h-4 text-dark-text-secondary" />
                </a>
              </div>

              <p className="text-dark-text-secondary">
                We&apos;re crafting tools that transform your everyday moments,
                stories, experiences into lasting legacies in every form —
                comics, books, films, voice recordings, autobiographies, and
                beyond.
              </p>
            </div>

            <iframe
              width="560"
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
              <div className="flex flex-row items-center gap-3 w-full">

              <span className="text-2xl font-medium leading-tight">
                Quickpitch
              </span>

                <a
                  href="https://twitter.com/markrachapoom/status/1706440389010616825"
                  target="_blank"
                  className="flex flex-row items-center text-neutral-300 gap-1 pl-4 pr-2 py-1 rounded-full border border-dark-divider hover:border-dark-dividerContrast transition-all"
                >
                  {/* <FiLink className="w-3 h-3"/> */}
                  <span className="text-sm">Demo on Twitter</span>
                  <FiArrowUpRight className="w-4 h-4 text-dark-text-secondary" />
                </a>
              </div>

              <p className="text-dark-text-secondary">
                Demo Day In Your Pocket: Discover startups on a Tinder-style
                platform: founders pitch in 15 seconds, refine through feedback,
                and connect with VCs.
              </p>
            </div>

            <Image
              src={"/quickpitch.png"}
              alt="quickpitch screenshots"
              width={1280}
              height={720}
              className="w-full aspect-video h-auto border border-dark-divider rounded-2xl object-cover bg-dark-background-secondary"
            />
            
          </div>

          {/* Project/Diary Dingo */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <span className="text-2xl font-medium leading-tight">
                Diary Dingo
              </span>

              <p className="text-dark-text-secondary">
                My first personal iOS project ever, and built for fun in the
                summer of 2021 :P
                <br />
                🌐 App Store: 
                <a
                  href="https://apps.apple.com/app/diary-dingo/id1580242680?platform=iphone"
                  target="_blank"
                  className="underline text-neutral-300"
                >
                  https://apps.apple.com/app/diary-dingo/id1580242680?platform=iphone
                </a>
                <br />
                📖 More Detail:
                <a
                  href="https://www.notion.so/markrachapoom/iOS-App-Diary-Dingo-top-3-worldwide-1e8599967eb64eeabae46d79634234a3"
                  target="_blank"
                  className="underline text-neutral-300"
                >
                  https://www.notion.so/markrachapoom/iOS-App-Diary-Dingo-top-3-worldwide-1e8599967eb64eeabae46d79634234a3
                </a>
              </p>
            </div>

            <Image
              src={"/diary-dingo.png"}
              alt="diary dingo screenshots"
              width={1280}
              height={720}
              className="w-full aspect-video h-auto border border-dark-divider rounded-2xl object-cover bg-dark-background-secondary"
            />

          </div>
        </div>

        <div className="flex flex-col items-start gap-12">
          <h1 className="text-4xl font-medium text-center font-serif underline underline-offset-8 decoration-dark-dividerContrast">
            Appeared On
          </h1>

          {/* Press/Hardeep */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <span className="text-2xl font-medium leading-tight">
                Emerging Innovators Podcast
              </span>

              <p className="text-dark-text-secondary">
                &quot;Mark has taken the unconventional route multiple times by
                self-teaching his iOS development, dropping out of university
                and working for Silicon Valley startups. Currently, he is
                building his own startup called Merce.co - we talk about it in
                the episode - check it out. The best thing I love about Mark is
                his ability to be vulnerable more than most people I have ever
                met and his ability to put thought before speaking his words.
                One of the best conversations I have ever had, beyond just this
                podcast.&quot; — Hardeep
              </p>
            </div>

            <Image
              src={"/podcast.png"}
              alt="podcast screenshots"
              width={1280}
              height={720}
              className="w-full aspect-video h-auto border border-dark-divider rounded-2xl object-cover bg-dark-background-secondary"
            />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WAUqqdBDVFQ?si=FxF5JyGdRh03ZAuJ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full aspect-video h-auto border border-dark-divider rounded-2xl"
            ></iframe>
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
    <div className="relative flex flex-col border-dark-divider h-full overflow-clip group hover:cursor-pointer">
      {/* <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover filter grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
      /> */}

      <Image
        src={src}
        alt={alt}
        layout="fill"
        // layout="fill"
        // objectFit="cover"
        // objectPosition="center"
        className="w-full h-full object-cover filter grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 bg-dark-background-secondary"
      />

      <span className="flex flex-row py-2 absolute bottom-0 bg-black text-dark-text-secondary text-sm w-full justify-between items-center">
        {caption}

        <div className="text-white opacity-30 group-hover:flex group-hover:opacity-100 transition-opacity">
          <FiArrowUpRight />
        </div>
      </span>
    </div>
  );
};
