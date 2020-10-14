import Head from "next/head";
// import "animate.css/animate.min.css";
import styles from "../styles/Home.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Interests from "../components/Interests/Interests";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import projects from "../fixtures/projects.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>

      <Layout>
        <ScrollAnimation animateIn="fadeIn">
          <Hero />
        </ScrollAnimation>

        <hr />
        <ScrollAnimation animateIn="fadeIn">
          <About />
        </ScrollAnimation>
        <hr />
        <ScrollAnimation animateIn="fadeIn">
          <Interests />
        </ScrollAnimation>
        <hr />

        <ProjectSection>
          {projects.map((project) => (
            <ScrollAnimation animateIn="fadeIn">
              <Project
                id={project.id}
                direction={project.direction}
                name={project.name}
                img={project.img}
                description={project.description}
                link={project.link}
                features={project.features}
              />
            </ScrollAnimation>
          ))}
        </ProjectSection>
        <Contact />
      </Layout>

      <footer className={styles.footer}></footer>
    </>
  );
}
