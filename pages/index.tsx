import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>gfiori.dev</title>
        <meta name="description" content="Giovanni Fiori | Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>
    </>
  )
}

export default Home
