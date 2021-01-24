import Layout from '../../components/Layout';
import TopBar from '../../components/TopBar/index';
import SideBar from '../../components/DashboardSideBar/index';
import ModuleList from '../../components/ModuleList/index';
import styles from '../../styles/learning.module.scss';

const Dashboard: React.FC = () => {
  return (
    <Layout title="i2">
      <div className={`columns ${styles.page}`}>
        <SideBar/>
        <div className='column'>
          <TopBar/>
          <div className={styles.columns}>
            <div className={styles.upperBox}>
              <p className={styles.title}><b>Learning Modules</b></p>
              <p className={styles.bigSpace}>Last completed:</p>
              <p>Module 2: How to make a design system</p>
            </div>
            <div>
              <img className={styles.picture} src='/Illustration1.svg' alt="illustration"></img>
            </div>
          </div>
          <ModuleList />
        </div>
      </div>
    </Layout>
  )
};

export default Dashboard;