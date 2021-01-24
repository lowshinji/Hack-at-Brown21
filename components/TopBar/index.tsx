import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return(
    <div className={`${styles.topbar}`}>
      <div>
        <input className={`${styles.searchBox} input`} type="text" placeholder="Search dashboard"/>
      </div>
      <div>
        <img className={styles.picture} src='/profile.jpg' alt="profile"></img>
      </div>
    </div>
  );
}

export default TopBar;