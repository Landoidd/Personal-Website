"use client";

import type React from "react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../app/hooks/use-theme";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SectionHeader } from "@/components/Section-Header";
import { ProjectCard } from "@/components/Project-Card";
import { SkillCard } from "@/components/Skill-Card";
import { ExperienceCard } from "@/components/Experience-Card";

import { Footer } from "@/components/Footer";
import { PROPERTIES } from "./lib/constants";

export default function Portfolio() {
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const connectRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/100 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Home</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="transition-colors hover:text-foreground/80"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection(skillsRef)}
                className="transition-colors hover:text-foreground/80"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection(connectRef)}
                className="transition-colors hover:text-foreground/80"
              >
                Connect
              </button>
            </nav>
          </div>
          <div className="flex items-center justify-between md:justify-end">
            <nav className="flex justify-start items-center md:hidden">
              <Button variant="ghost" className="mr-2" asChild>
                <Link href="/">
                  <span className="font-bold">Portfolio</span>
                </Link>
              </Button>
            </nav>
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="mr-2"
              >
                {mounted && theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center">
        {/* Home Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="flex justify-center items-center container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Hi, Im <span className="text-primary">Landon Zigler</span>
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Scroll down to learn more about me!
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={PROPERTIES.photoOfMe}
                    alt="Profile Picture"
                    fill={true}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          ref={experienceRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <SectionHeader
              title={"Work Experience"}
              description="Companies I have worked for."
            />
            <div className="w-2/3 mx-auto flex flex-wrap items-center justify-center p-12">
              <ExperienceCard
                imageSrc={"/images/precision_sports_tech_logo.jpg"}
                title={"Software Engineer Intern"}
                company={"Precision Sports Technology"}
                location={"Galway, Ireland"}
                date={"06/2024-08/2024"}
                bulletPoints={[
                  PROPERTIES.PrecisionDesc,
                  PROPERTIES.Precision2Desc,
                ]}
              />
              <ExperienceCard
                imageSrc={"/images/apparel_magic_logo.jpeg"}
                title={"Software Engineer Intern"}
                company={"Apparel Magic"}
                location={"West Palm Beach, Florida"}
                date={"05/2023-07/2023"}
                bulletPoints={[
                  PROPERTIES.ApparelDesc,
                  PROPERTIES.Apparel2Desc,
                  PROPERTIES.Apparel3Desc,
                ]}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeader
              title="Technical Skills"
              description="Technologies and tools I specialize in."
            />
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="Frontend"
                skills={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "JavaScript",
                ]}
              />
              <SkillCard
                title="Backend"
                skills={["Next.js", "Express", "Node.js"]}
              />
              <SkillCard title="Cloud" skills={["AWS CDK", "AWS SDK"]} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={projectsRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <SectionHeader
              title="Projects"
              description="Some of my recent work and personal projects."
            />
            <div className="flex flex-1 p-4 flex-wrap justify-center items-center md:width-2/3 md:p-20">
              <ProjectCard
                title="MyRewards"
                description="A rewards app that supports local businesses"
                imageSrc={PROPERTIES.myRewards}
                technologies={[
                  "React Native",
                  "Expo",
                  "React",
                  "AWS",
                  "Typescript",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section
          ref={connectRef}
          className="w-full py-12 md:py-24 lg:py-32"
          id="connect"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lets Connect
                </h2>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-center p-12">
              <Card className="w-full max-w-lg">
                <CardHeader className="text-center">
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={PROPERTIES.githubImage}
                      alt={PROPERTIES.githubAlt}
                      height={25}
                      width={25}
                    />
                    <a className="underline" href={PROPERTIES.githubURL}>
                      <CardDescription>
                        {PROPERTIES.githubTitle}
                      </CardDescription>
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={PROPERTIES.linkedinImage}
                      alt={PROPERTIES.linkedinAlt}
                      height={25}
                      width={25}
                    />
                    <a className="underline" href={PROPERTIES.linkedinURL}>
                      <CardDescription>
                        {PROPERTIES.linkedinTitle}
                      </CardDescription>
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={PROPERTIES.gmailImage}
                      alt={PROPERTIES.gmailAlt}
                      height={25}
                      width={25}
                    />
                    <a className="underline" href={PROPERTIES.gmailURL}>
                      <CardDescription>{PROPERTIES.gmailTitle}</CardDescription>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
