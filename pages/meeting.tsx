import Layout from '../components/Layout';
import Video from '../components/Video';
import Checkin from '../components/Checkin';
import SideBar from '../components/DashboardSideBar/index';

const MeetingPage: React.FC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className={`columns`}>
      <SideBar/>
      <Video />
      <div className="column">
        <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
      </div>
    </div>
  </Layout>
);

export default MeetingPage;
