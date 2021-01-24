import styles from './DashboardSideBar.module.scss';

const DashboardSideBar: React.FC = () => {
  return(
    <div className={`column is-2`}>
      <div className='columns'>
        <div id={styles.circle}/>
        <h2 className={styles.name}>i2</h2>
      </div>
      <div className={styles.middleWidget}>
        <p className={styles.menuItem}><a href='/' className={styles.link}>Home</a></p>
        <p className={styles.menuItem}><a href='/progress' className={styles.link}>Progress</a></p>
        <p className={styles.menuItem}><a href='/learning' className={styles.link}>Learning</a></p>
        <p className={styles.menuItem}><a href='/meetings' className={styles.link}>Meetings</a></p>
      </div>

      <div className={styles.bottomWidget}>
        <p className={styles.menuItem}><a href='/settings' className={styles.link}>Settings</a></p>
        <p className={styles.menuItem}><a className={styles.link}>Log Out</a></p>
      </div>
    </div>
  )
}

export default DashboardSideBar;