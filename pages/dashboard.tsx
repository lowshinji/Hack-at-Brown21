import Layout from '../components/Layout';
import TopBar from '../components/TopBar/index';
import SideBar from '../components/DashboardSideBar/index';
import WelcomeWidget from '../components/WelcomeWidget/index';
import LearningWidget from '../components/LearningWidget/index';
import DescriptionWidget from '../components/DescriptionWidget/index';
import ActivityWidget from '../components/ActivityWidget/index';
import UpcomingWidget from '../components/UpcomingWidget/index';
import MeetingWidget from '../components/MeetingWidget/index';
import styles from '../styles/dashboard.module.scss';

const Dashboard: React.FC = () => {
  return (
    <Layout title="i2">
      <TopBar/>
      <SideBar/>
      <div className={`${styles.widgets} columns`}>
        <div className='columns'>
          <div className='column'>
            <WelcomeWidget/>
            <p className={`${styles.midSpace}`}><b>Progress</b></p>
            <div className={`${styles.columns} ${styles.smallSpace}`}>
              <div className={styles.column}>
                <LearningWidget/>
              </div>
              <div>
                <ActivityWidget/>
                <UpcomingWidget/>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <DescriptionWidget/>
          <MeetingWidget />
        </div>
      </div>
    </Layout>
  )
};

export default Dashboard;