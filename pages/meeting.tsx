import Layout from '../components/Layout';
import Video from '../components/Video';
import Checkin from '../components/Checkin';
import SideBar from '../components/DashboardSideBar/index';
import styles from '../styles/dashboard.module.scss';
import meetingStyles from '../styles/meeting.module.scss';

const MeetingPage: React.FC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className={`columns`}>
      <SideBar/>

      <div className='column'>
        <div className={`columns ${styles.topbar}`}>
          <input className={`${styles.searchBox} input`} type="text" placeholder="Search dashboard"/>
        </div>

        <div className={`columns ${meetingStyles.wrapper}`}>
          <div className={`column ${meetingStyles.video_column}`}>
            <Video />
          </div>
          <div className={`column is-narrow`}>
            <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
            <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
            <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default MeetingPage;
