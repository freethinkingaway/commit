import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Commit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.title}>Commit</div>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
              Instantly deploy your Next.js site to a public URL with Vercel.
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
