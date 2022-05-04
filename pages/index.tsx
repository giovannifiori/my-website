import Head from 'next/head'
import Hero from '@components/Hero'
import About from '@components/About'
import Skills from '@components/Skills'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
import Footer from '@components/Footer'
import Contact from '@components/Contact'
import type Project from '@customTypes/Project'

import styles from '@styles/Home.module.scss'

interface Props {
  projects: Project[]
}

const Home = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Giovanni Fiori - Software Engineer</title>
        <meta name="description" content="Software Engineer with years of experience building Web and Mobile apps." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const projects: Project[] = (await import('../public/data/projects.json'))
    .default
  return {
    props: {
      projects,
    },
  }
}

export default Home
