import Image from "next/image";
import React from "react";

import { FiArrowUpRight, FiChevronRight, FiLink } from "react-icons/fi";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    icon: <FaXTwitter cclassName="w-[18px] h-[18px]" />,
    name: "Twitter",
    url: "https://www.twitter.com/markrachapoom",
  },
  {
    icon: <FaGithub className="w-[18px] h-[18px]" />,
    name: "GitHub",
    url: "https://www.github.com/markrachapoom",
  },
  {
    icon: <FaLinkedinIn className="w-[18px] h-[18px]" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/markrachapoom",
  },
  {
    icon: <FaInstagram className="w-[18px] h-[18px]" />,
    name: "Instagram",
    url: "https://www.instagram.com/markrachapoom",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-screen items-center bg-black">
      {/* sticky header */}
      <div className="flex sticky top-0 z-50 items-center justify-between w-full p-3 border-b border-dark-divider bg-[rgb(13,13,13,0.8)] backdrop-blur-xl">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={
              "https://pbs.twimg.com/profile_images/1669924632881942529/uVVtVMaK_400x400.jpg"
            }
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
                className="opacity-50 hover:opacity-100 transition-opacity text-sm no-underline"
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
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-medium text-center font-serif">
              Mark Rachapoom
            </h1>
            <p>
              Hey there, I&apos;m Mark Rachapoom, a 21-year-old founder, college
              dropout, and former software engineer for a startup in Silicon
              Valley who can build iOS, web, and full-stack apps. I can also
              design at industry standards.
            </p>

            <ul className="list-disc list-inside">
              <li>
                Co-Founder of{" "}
                <a href="https://www.merse.co" target="_blank">
                  Merse
                </a>
              </li>

              <li>
                <a
                  href="https://vercel.com/blog/ai-accelerator-participants"
                  target="_blank"
                >
                  Vercel AI Accelerator Fellow
                </a>
                : 6 weeks. 40 participants. $850k in credits.
              </li>

              <li>
                Rebel @{" "}
                <a href="https://nonce.community/" target="_blank">
                  Nonce Community (논스)
                </a>{" "}
                in Seoul
              </li>

              <li>
                Resident @{" "}
                <a href="https://joinarcadia.org/" target="_blank">
                  Arcadia
                </a>
                , hacker house in Berkeley
              </li>

              <li>
                Creator of{" "}
                <a
                  href="https://apps.apple.com/app/diary-dingo/id1580242680?platform=iphone"
                  target="_blank"
                >
                  Diary Dingo
                </a>{" "}
                — hit top 3 in &lt;24 hours in lifestyle category after the
                first launch on App Store
              </li>

              <li>
                Founding Software Engineer at{" "}
                <a href="https://twitter.com/SerendipityPRM" target="_blank">
                  Serendipity
                </a>{" "}
                and{" "}
                <a href="https://twitter.com/0xMonument" target="_blank">
                  Monument
                </a>
              </li>

              {/* Talent House full-grant scholarships to Paris (1% acceptance) */}

              <li>
                <a
                  href="https://www.markrachapoom.com/Talent-House-full-grant-scholarships-to-Paris-1-acceptance-a5060215ce5649ebbe8a2a3b0fa241fc"
                  target="_blank"
                >
                  Talent Protocol Fellow{" "}
                </a>
                — a recipient of a full-grant Talent House scholarship to Paris
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full h-screen">
            <div className="grid grid-rows-2 gap-4 w-full h-screen">
              <div className="relative flex flex-col border-dark-divider h-full overflow-clip group hover:cursor-pointer">
                <Image
                  src={"/mark-naval.jpeg"}
                  alt={"Mark & Naval"}
                  layout="fill"
                  // layout="fill"
                  // objectFit="cover"
                  // objectPosition="center"
                  className="w-full h-full object-cover filter grayscale transition-all duration-500 ease-in-out bg-dark-background-secondary"
                />

                <div className="py-2 absolute bottom-0 bg-black text-dark-text-secondary text-sm w-full items-center">
                  Taking a walk with{" "}
                  <a href="https://www.twitter.com/naval" target="_blank">
                    {" "}
                    Naval Ravikant
                  </a>
                </div>
              </div>

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

          {/* Project/Merse */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-row items-center gap-3 w-full">
                <span className="text-2xl font-medium leading-tight">
                  Merse
                </span>

                <LinkCapsule href="https://www.merse.co" label="merse.co" />
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

                <LinkCapsule
                  href="https://twitter.com/markrachapoom/status/1706440389010616825"
                  label="Demo"
                />
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
              <div className="flex flex-row items-center gap-3 w-full max-sm:flex-col max-sm:items-start">
                <span className="text-2xl font-medium leading-tight">
                  Diary Dingo
                </span>

                <div className="flex flex-row gap-3">
                  <LinkCapsule
                    href="https://apps.apple.com/app/diary-dingo/id1580242680?platform=iphone"
                    label="App Store"
                  />
                  <LinkCapsule
                    href="https://www.notion.so/markrachapoom/iOS-App-Diary-Dingo-top-3-worldwide-1e8599967eb64eeabae46d79634234a3"
                    label="Detail"
                  />
                </div>
              </div>

              <p className="text-dark-text-secondary">
                It hit top 3 in less than 24 hours in lifestyle category after
                the first launch on the Apple App Store.
                <br />
                <br />
                Diary Dingo makes the chapter of your life private, shareable,
                and clean. While privacy is prioritized due to the fact that the
                app is secured by FaceID, TouchID, Passcode and 0% of your
                personal data is collected, shareable content comes in play. You
                can also share your diary on Twitter, Instagram, Snapchat,
                Facebook, Line, iMessages and more.
                <br />
                <br />
                Also, it&apos;s my first personal iOS project ever, and built
                for fun in the summer of 2021!
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
              <div className="flex flex-row items-center gap-3 w-full max-[500px]:flex-col max-[500px]:items-start">
                <span className="text-2xl font-medium leading-tight">
                  Emerging Innovators Podcast
                </span>

                <LinkCapsule
                  href="https://www.youtube.com/watch?v=WAUqqdBDVFQ"
                  label="YouTube"
                />
              </div>

              <p className="text-dark-text-secondary">
                &quot;Mark has taken the unconventional route multiple times by
                self-teaching his iOS development, dropping out of university
                and working for Silicon Valley startups. Currently, he is
                building his own startup called Merse - we talk about it in the
                episode - check it out. The best thing I love about Mark is his
                ability to be vulnerable more than most people I have ever met
                and his ability to put thought before speaking his words. One of
                the best conversations I have ever had, beyond just this
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

        <div className="flex flex-col items-start gap-12">
          <h1 className="text-4xl font-medium text-center font-serif underline underline-offset-8 decoration-dark-dividerContrast">
            Contact
          </h1>

          {/* grid contact */}

          <div className="grid grid-cols-2 w-full gap-3">
            {socials.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="group flex flex-row items-center justify-between p-5 max-sm:p-4 w-full bg-dark-background-secondary no-underline hover:opacity-100 border border-dark-divider hover:border-dark-dividerContrast text-dark-text-secondary hover:text-white transition-all"
                  target="_blank"
                >
                  <div className="flex flex-row gap-3 items-center">
                    <div>{social.icon}</div>
                    <span className="text-sm">{social.name}</span>
                  </div>

                  <FiArrowUpRight className="w-[18px] h-[18px]" />
                </a>
              );
            })}
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
      <Image
        src={src}
        alt={alt}
        layout="fill"
        // layout="fill"
        // objectFit="cover"
        // objectPosition="center"
        className="w-full h-full object-cover filter grayscale transition-all duration-500 ease-in-out bg-dark-background-secondary"
      />

      <span className="flex flex-row py-2 absolute bottom-0 bg-black text-dark-text-secondary text-sm w-full justify-between items-center">
        {caption}
      </span>
    </div>
  );
};

const LinkCapsule: React.FC<{
  href: string;
  label: string;
}> = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex flex-row items-center text-neutral-300 gap-1 pl-4 pr-2 py-1 rounded-full border border-dark-divider hover:border-dark-dividerContrast transition-all no-underline"
    >
      {/* <FiLink className="w-3 h-3"/> */}
      <span className="text-sm line-clamp-1">{label}</span>
      <FiArrowUpRight className="w-[14px] h-[14px] text-dark-text-secondary group-hover:text-white transition-all " />
    </a>
  );
};
