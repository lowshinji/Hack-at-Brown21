import Layout from '../components/Layout';
import Video from '../components/Video';

const MeetingPage: React.FC = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Meeting</h1>
    <p>Hello this is a cool new meeting!</p>
    <Video />
  </Layout>
);

export default MeetingPage;
