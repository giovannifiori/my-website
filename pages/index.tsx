import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/images/profile.jpg';
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
        <div className={styles.contentBlock}>
          <div className={styles.imageContainer}>
            <Image src={profilePic} alt="Picture of the author" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.contentInfo}>
            <p><b>Hello!</b> I'm</p>
            <span className={styles.name}>Giovanni Fiori</span>
            <p>A Software Engineer with more than 4 years of experience, based in Brazil;</p>
            <p>Specialized in Web but has also worked with Mobile;</p>
            <p>Graduated in Software Engineering from IComp - Universidade Federal do Amazonas;</p>
            <p>Currently is a Software Engineer at Jusbrasil connecting people to justice.</p>
          </div>
        </div>
        
      </main>
    </>
  )
}

export default Home
