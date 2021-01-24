import Image from 'next/image';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return(
    <div className={`${styles.topbar}`}>
      <div>
        <input className={`${styles.searchBox} input`} type="text" placeholder="Search dashboard"/>
      </div>
      <div className={styles.image_wrapper}>
        <span className={styles.bell_icon}>
          <Image className={styles.picture} src='/bell_icon.svg' alt="profile" width={20} height={20}/>
        </span>
        <Image className={styles.picture} src='/profile.jpg' alt="profile" width={40} height={40} />
      </div>
    </div>
  );
}

export default TopBar;