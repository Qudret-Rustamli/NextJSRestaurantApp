import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <h1>Hello Next.js</h1>
        </div>
      </div>
    </div>
  );
}
