import Image from 'next/image';
import { useState } from 'react';
import styles from './DashboardSideBar.module.scss';

type DashboardSideBarProps = {
  activeItem?: "Home" | "Progress" | "Learning" | "Meetings";
}

const DashboardSideBar: React.FC<DashboardSideBarProps> = ({activeItem = 'Home'}) => {
  const [houseIconActive, setHouseIconActive] = useState(activeItem === 'Home');
  const [graphIconActive, setGraphIconActive] = useState(activeItem === 'Progress');
  const [lightIconActive, setLightIconActive] = useState(activeItem === 'Learning');
  const [phoneIconActive, setPhoneIconActive] = useState(activeItem === 'Meetings');


  return(
    <div className={styles.wrapper}>
      <div className={styles.middleWidget}>
        <div 
          className={`${styles.menuItem} ${houseIconActive ? styles.activeMenuItem : ''}`}
          onMouseOver={() => setHouseIconActive(true)} 
          onMouseLeave={() => setHouseIconActive(false)}>
          <span className={styles.menuIconWrapper}>
            <Image src={houseIconActive ? '/house_icon_hover.svg' : '/house_icon.svg'} alt="house icon" width={16} height={16} />  
          </span>
          <a href='/dashboard' className={styles.link}>Home</a>
        </div>
        <div 
          className={`${styles.menuItem} ${graphIconActive ? styles.activeMenuItem : ''}`}
          onMouseOver={() => setGraphIconActive(true)} 
          onMouseLeave={() => setGraphIconActive(false)}>
          <span className={styles.menuIconWrapper}>
            <Image src={graphIconActive ? '/graph_icon_hover.svg' : '/graph_icon.svg'} alt="graph icon" width={16} height={16} />  
          </span>
          <a className={styles.link}>Progress</a>
        </div>
        <div 
          className={`${styles.menuItem} ${lightIconActive ? styles.activeMenuItem : ''}`}
          onMouseOver={() => setLightIconActive(true)} 
          onMouseLeave={() => setLightIconActive(false)}>
          <span className={styles.menuIconWrapper}>
            <Image src={lightIconActive ? '/lightbulb_icon_hover.svg' : '/lightbulb_icon.svg'} alt="lightbulb icon" width={16} height={16} />  
          </span>
          <a href='/learning' className={styles.link}>Learning</a>
        </div>
        <div 
          className={`${styles.menuItem} ${phoneIconActive ? styles.activeMenuItem : ''}`}
          onMouseOver={() => setPhoneIconActive(true)} 
          onMouseLeave={() => setPhoneIconActive(false)}>
          <span className={styles.menuIconWrapper}>
            <Image src={phoneIconActive ? '/phone_icon_hover.svg' : '/phone_icon.svg'} alt="phone icon" width={16} height={16} />  
          </span>
          <a href='/meetings' className={styles.link}>Meetings</a>
        </div>
      </div>

      <div className={styles.bottomWidget}>
        <p className={styles.menuItem}><a className={styles.link}>Settings</a></p>
        <p className={styles.menuItem}><a className={styles.link}>Log Out</a></p>
      </div>
    </div>
  )
}

export default DashboardSideBar;