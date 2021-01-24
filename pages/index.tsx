import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/index.module.scss';

const IndexPage: React.FC = () => {
  return (
    <Layout title="i2">
    <div className={styles.welcomeRoot}>
      <div className={styles.logo_wrapper}>
        <div className={`${styles.logo}`}>
          <Image src="/logo_white.svg" alt="logo i2" width={32} height={32} />
          <span className={styles.name}>Imagine Intern.</span>
        </div>
      </div>
      <div className={styles.welcomeWrapper}>
        <div className={styles.welcomeImage}>
          <Image src="/welcome.png" alt="a beautiful strong woman doin' work" width={615} height={606}/>
        </div>
        <div className={styles.welcomeRightText}>
          <h1 className={styles.welcomeHeader}>Imagine the internship of your dreams.</h1>
          <p>i2 is a platform that creates and manages meaningful internship experiences. It aims to bridge the gap between companies and their interns through mentorship. Whether you’re an intern or a company co-founder looking to provide guidance, i2 can help!</p>
          <span className={styles.welcomeButtonGroup}>
            <button className={styles.buttonIntern}>
              <Link href="/signup-intern">I&apos;m an intern</Link>
            </button>
            <button className={styles.buttonFounder}>
              <Link href="/signup-founder">I&apos;m a co-founder</Link>
            </button>
          </span>
        </div>
      </div>
    </div>
  </Layout>
  )
};

export default IndexPage;
