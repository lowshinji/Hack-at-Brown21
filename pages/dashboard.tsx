import Layout from '../components/Layout';
import styles from '../styles/dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <Layout title="i2">
      <div className={`columns ${styles.page}`}>
        <div className={`column is-2`}>
          <div className='columns'>
            <div id={styles.circle}/>
            <h2 className={styles.name}>i2</h2>
          </div>
          <div className={styles.linkWidget}>
            <p className={styles.pageLink}>Home</p>
            <p className={styles.pageLink}>Progress</p>
            <p className={styles.pageLink}>Learning</p>
            <p className={styles.pageLink}>Meetings</p>
          </div>

          <div className={styles.settingWidget}>
            <p className={styles.pageLink}>Settings</p>
            <p className={styles.pageLink}>Log Out</p>
          </div>
        </div>
        
        <div className='column'>
          <div className={`columns ${styles.topbar}`}>
            <input className={`${styles.searchBox} input`} type="text" placeholder="Search dashboard"/>
          </div>

          <div className={styles.widgets}>
            <div className='columns'>
              <div className='column'>
                <div className={`${styles.widget} ${styles.blackBackground}`}>
                  Welcome, Jessica
                </div>
                <p>Progress</p>
                <div className='columns'>
                  <div className={`column ${styles.widget} ${styles.whiteBackground}`}>
                    Learning
                  </div>
                  <div className='column'>
                    <div className={`${styles.widget} ${styles.whiteBackground}`}>
                    
                    </div>
                    <div className={`${styles.widget} ${styles.whiteBackground}`}>
                    
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Dashboard;