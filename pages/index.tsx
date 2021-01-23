// import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/index.module.css';

const IndexPage: React.FC = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
    <div className={styles.row}>
      <div className={`${styles.left} ${styles.column}`}>
        <div>Sign up</div>
      </div>
      <div className={styles.right}>
        <div>Welcome to i2</div>
      </div>
    </div>
  </Layout>
  )
};

export default IndexPage;
