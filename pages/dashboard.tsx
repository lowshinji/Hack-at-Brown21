import Layout from '../components/Layout';
import SideBar from '../components/DashboardSideBar/index';
import styles from '../styles/dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <Layout title="i2">
      <div className={`columns ${styles.page}`}>
        <SideBar/>
        
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