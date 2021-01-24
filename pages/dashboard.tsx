import Layout from '../components/Layout';
import TopBar from '../components/TopBar/index';
import SideBar from '../components/DashboardSideBar/index';
import WelcomeWidget from '../components/WelcomeWidget/index';
import LearningWidget from '../components/LearningWidget/index';
import DescriptionWidget from '../components/DescriptionWidget/index';
import MeetingWidget from '../components/MeetingWidget/index';
import styles from '../styles/dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <Layout title="i2">
      <div className={styles.page}>
        <SideBar/>
        <TopBar/>
        <div className={styles.widgets}>
          <div className='columns'>
            <div className='column'>
              <WelcomeWidget/>
              <p className={`${styles.midSpace}`}><b>Progress</b></p>
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
    </Layout>
  )
};

export default Dashboard;