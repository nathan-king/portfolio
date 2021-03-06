import Head from "next/head";
// import "animate.css/animate.min.css";
import styles from "../styles/Home.module.scss";
// @ts-ignore
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Interests from "../components/Interests/Interests";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import projects from "../fixtures/projects.json";
import Splash from "../components/Splash/Splash";
import { useState, useEffect } from "react";

export default function Home() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>Nathan King | Web Developer</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <meta name="viewport" content="width=device-width" />
      </Head>

      <Layout>
        <Splash splash={splash} />
        {/* HERO */}

        <ScrollAnimation animateIn="fadeIn">
          <Hero splash={splash} />
        </ScrollAnimation>

        {/* ABOUT */}

        <ScrollAnimation animateIn="fadeIn">
          <About />
        </ScrollAnimation>

        {/* SKILLS */}

        <ScrollAnimation animateIn="fadeIn">
          <Interests />
        </ScrollAnimation>

        {/* PROJECTS */}

        <ScrollAnimation animateIn="fadeIn">
          <ProjectSection>
            {projects.map((project) => (
              <ScrollAnimation animateIn="fadeIn">
                <Project
                  key={project.id}
                  id={project.id}
                  direction={project.direction}
                  heading={project.heading}
                  name={project.name}
                  img={project.img}
                  description={project.description}
                  link={project.link}
                  githubLink={project.githubLink}
                  features={project.features}
                />
              </ScrollAnimation>
            ))}
          </ProjectSection>
        </ScrollAnimation>

        {/* CONTACT */}
        <ScrollAnimation animateIn="fadeIn">
          <Contact />
        </ScrollAnimation>
      </Layout>

      <footer className={styles.footer}></footer>
    </>
  );
}
