import Layout from '../components/Layout';
import styles from '../styles/index.module.scss';

const IndexPage: React.FC = () => {
  return (
    <Layout title="i2">
    <div className='columns'>
      <div className={`${styles.left} column is-one-quarter`}>
        <div className={styles.leftView}>
          <p className={styles.leftViewInterior}>
            <p className={styles.leftTitle}>Intern Sign Up</p>
            <p className={styles.description}>Create an intern account and join your coworkers on i2!</p>
          </p>
        </div>
      </div>
      <div className={`${styles.right} column`}>
        <div className={styles.rightView}>
          <div className='columns'>
            <div id={styles.circle}/>
            <h2 className={styles.rightTitle}>Welcome to i2</h2>
          </div>
          <div>
            <label className="label">Full name</label>
            <div className={`${styles.formInput} control`}>
              <input className={`${styles.inputBox} input`} type="text" placeholder="Start typing"/>
            </div>
            <label className="label">Email address</label>
            <div className={`${styles.formInput} control`}>
              <input className={`${styles.inputBox} input`} type="text" placeholder="Start typing"/>
            </div>
            <label className="label">Password</label>
            <div className={`${styles.formInput} control`}>
              <input className={`${styles.inputBox} input`} type="text" placeholder="Start typing"/>
            </div>
            <label className="label">Company</label>
            <div className={`${styles.formInput} control`}>
              <input className={`${styles.inputBox} input`} type="text" placeholder="Start typing"/>
            </div>
          </div>
          <div className={`columns ${styles.bottom}`}>
            <p className={styles.signIn}>Already have an account? <b>Sign In</b></p>
            <a className={`button is-black ${styles.button}`} href="/dashboard">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
};

export default IndexPage;
