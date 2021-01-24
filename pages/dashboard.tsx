import Layout from '../components/Layout';
import SideBar from '../components/DashboardSideBar/index';
import WelcomeWidget from '../components/WelcomeWidget/index';
import LearningWidget from '../components/LearningWidget/index';
import DescriptionWidget from '../components/DescriptionWidget/index';
import MeetingWidget from '../components/MeetingWidget/index';
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
                <WelcomeWidget/>
                {/* <div className={`${styles.widget} ${styles.blackBackground} ${styles.welcomeWidget}`}>
                  <p className={`${styles.bigText} ${styles.bold}`}>Welcome, Jessica</p>
                  <p className={styles.midSpace}>You have <b>3</b> modules to complete</p>
                  <a className={`button is-white ${styles.button} ${styles.smallSpace}`} href="/">Continue</a>
                </div> */}
                <p className={`${styles.midSpace}`}>Progress</p>
                <div className={`columns ${styles.smallSpace} ${styles.alignLeft}`}>
                  <LearningWidget/>
                  <div className='column'>
                    <div className={`${styles.widget} ${styles.whiteBackground}`}>
                    
                    </div>
                    <div className={`${styles.widget} ${styles.whiteBackground}`}>
                    
                    </div>
                  </div>
                </div>
                
              </div>
              <div className='column'>
                <DescriptionWidget/>
                <MeetingWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Dashboard;