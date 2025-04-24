import { Avatar } from "@/components/avatar";
// import Bento from "@/components/bento";
import { Features } from "@/components/features";
import { FootnoteContent, FootnoteMarker } from "@/components/footnote";
import { Link } from "@/components/link";
import { LocationCard } from "@/components/location-card";
import { MailingList } from "@/components/mailing-list";
import { Section } from "@/components/section";
import { Social } from "@/components/social";
import { Stack } from "@/components/stack";
import { Video } from "@/components/video";
import { env } from "@/lib/env";
import { work } from "@/lib/live";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";
import { resend } from "@/lib/resend";
import { social } from "@/lib/social";
import { stack } from "@/lib/stack";
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";

const getSubscribers = unstable_cache(
  async () => {
    const contacts = await resend.contacts.list({
      audienceId: env.RESEND_AUDIENCE_ID,
    });

    return contacts.data?.data.length ?? 0;
  },
  ["subscribers"],
  {
    revalidate: 60, // Cache for 1 minute
    tags: ["subscribers"],
  }
);

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "I&apos;m an Italian Product Manager living in Amsterdam, Netherlands. I love creating beautiful software that delights users and reimagines the way we interact with technology.",
  ogText: "Product Manager and Startup Accelerator Manager based in 🇪🇺 Europe.",
});

const Home = async () => {
  const subscribers = await getSubscribers();

  return (
    <>
      <Section>
        <h1 className="text-6xl lg:text-7xl font-instrument tracking-tight">
          Hi, I'm Mauro
          <Avatar className="inline-block h-16 w-16 mb-5 ml-3" />
        </h1>
        <h2 className="text-xl mt-0 mb-12">
          Digital Product Manager
          <br />
          Startup Accelerator Manager
        </h2>
        <Link href="/contact" className="w-fit">
          <div
            className="p-1 bg-gray-100 items-center w-fit leading-none rounded-full flex inline-flex mb-10 transition-bg-color duration-300 hover:bg-gray-200 dark:bg-transparent dark:border dark:border-white-500"
            role="alert"
          >
            <span className="flex rounded-full bg-yellow-400 uppercase px-2 py-1 text-xs font-bold mr-3 text-white dark:text-black">
              HIRE ME
            </span>
            <span className="text-sm mr-2 text-left flex-auto dark:text-white">
              Just 2 spots free for 2025
            </span>
            <svg
              className="fill-current opacity-75 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
          </div>
        </Link>
        <p>
          I&apos;m an 🇮🇹 Italian Product Manager & Startup Accelerator Manager
          living in{" "}
          <LocationCard timezone="Europe/Amsterdam">
            🇳🇱 Amsterdam, Netherlands,
          </LocationCard>{" "}
          and I identify myself as 🇪🇺 European.{" "}
        </p>
        <p>
          I'm passionate about transforming innovative ideas into impactful
          solutions. With over 16 years of experience in product management,
          I've navigated diverse sectors including FinTech, HealthTech, and
          EdTech, helping startups and established companies achieve their
          goals. My journey has been marked by a blend of strategic vision and
          practical execution, always centered around human-centered design and
          agile methodologies.
        </p>
        {/* <Bento /> */}
        <p>
          Currently, I'm dedicated to building, developing, and managing B2B
          SaaS products. I thrive on collaborating with cross-functional teams
          to set product strategies, conduct market research, and create
          roadmaps that align with business objectives and market demands.
        </p>
        <p>
          I maintain a small mailing list where I share infrequent updates on my
          projects and what&apos;s new. Join{" "}
          {new Intl.NumberFormat().format(subscribers)} readers if you&apos;re
          interested!
        </p>
        <MailingList />
        <p>
          You can also read my <Link href="/blog">blog</Link>,{" "}
          <Link href="/contact">get in touch</Link>, contact me or follow me on
          these platforms:
        </p>
        <ul className="flex flex-wrap gap-1">
          {Object.entries(social)
            .map(([id, { follow }]) => ({ id, follow }))
            .filter(({ follow }) => follow)
            .map(({ id }) => (
              <li key={id}>
                <Social id={id as keyof typeof social} />
              </li>
            ))}
        </ul>
      </Section>
      <Section delay={0.2}>
        <h2>Work</h2>
        <Features data={[...work].sort((a, b) => b.year - a.year)} />
      </Section>
      <Section delay={0.4}>
        <h2>Projects & Impact</h2>
        <p>
          Throughout my career, I've{" "}
          <span className="font-bold">
            launched numerous products and programs,
          </span>
          always striving to make a meaningful impact. From accelerating
          startups to redesigning digital banking experiences, my work has
          consistently driven growth and innovation.
        </p>
      </Section>
      <Section delay={0.4}>
        <h2>Teaching & Mentoring</h2>
        <p>
          I've shared my expertise through teaching and mentoring, covering
          topics like entrepreneurship, design thinking, and innovation at
          institutions.
        </p>
        <ul className="list-disc pl-5">
          {projects.map((project) => (
            <li key={project.name}>
              <Link href={project.link}>{project.name}</Link> -{" "}
              {project.description}
            </li>
          ))}
        </ul>
      </Section>
      <Section delay={0.6}>
        <h2>Education & Certifications</h2>
        <p>
          I've enhanced my skills through programs from Harvard Business School,
          IBM, IDEO, and the University of Virginia, focusing on disruptive
          strategy, open innovation, and design thinking.
        </p>
      </Section>
      <Section delay={0.8}>
        <h2>Stack</h2>
        <p>Here's some tools, technology and products I use every day.</p>
        <Stack data={stack} />
      </Section>

      <div className="border-t border-dotted p-8">
        <Section delay={1.2}>
          <FootnoteContent index={1}>
            I've also worked with Advancell, Airwallex, Audience Republic,
            Baraja, Brighte, Comfort Delgro, Elevio, Faethm, Flaunter, Flirtey,
            Futrli, Grow, Inventia, Kerbly, Lightswap, Lookahead, Notiv, Perlin,
            Pursuited, Resolution Collective, Rezi, Ribit, Shippit, Siesta
            Campers, Simply Wall St, Snug, Space Machines Company, Spaceship,
            Tank Stream Ventures, Teleqo Technologies, Tyro Payments, UpGuard,
            UTS, Zibbet and Zookal.
          </FootnoteContent>
          <FootnoteContent index={2}>
            Refraction was used by Accenture, AKQA, Amazon, Bentley, Canva,
            CapGemini, Cisco, Experian, ExpressVPN, Google, H&M, Ikea, John
            Deere, Nespresso, PandaDoc, Qantas, Rakuten, Red Bull, Repl.it,
            Roblox, Softbank, Sega, Tiktok, Uber, Washington Post, Wix, Yahoo,
            Zoho and ZoomInfo.
          </FootnoteContent>
        </Section>
      </div>
      <footer className="text-foreground-lighter text-sm leading-relaxed">
        <p>
          &copy; {new Date().getFullYear()} Mauro Fontanari. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
