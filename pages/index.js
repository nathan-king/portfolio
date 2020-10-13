import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Interests from "../components/Interests/Interests";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Interests />
        <About />
        <Projects direction="row" />
        <Projects direction="row-reverse" />
      </Layout>

      <footer className={styles.footer}></footer>
    </>
  );
}
