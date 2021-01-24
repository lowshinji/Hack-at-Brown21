import styles from './LearningWidget.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PERCENTAGE1 = 100;
const PERCENTAGE2 = 89;
const PERCENTAGE3 = 70;

const DashboardSideBar: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p>Learning</p>
      <div className={`${styles.columns} ${styles.smallSpace}`}>
        <div>
          <CircularProgressbar 
            className={styles.circleProgress} 
            value={PERCENTAGE1} 
            text={`${PERCENTAGE1}%`} 
            strokeWidth={2} 
            styles={buildStyles({
              textColor: '#000000',
              pathColor: '#0023F7',
            })}
            backgroundPadding={0}
            />
        </div>
        <div className={styles.moduleDescriptor}>
          <p><b>Module 1</b></p>
          <p>Learn how to make a design system</p>
        </div>
      </div>

      <div className={`${styles.columns} ${styles.smallSpace}`}>
        <div>
          <CircularProgressbar 
            className={styles.circleProgress} 
            value={PERCENTAGE2} 
            text={`${PERCENTAGE2}%`} 
            strokeWidth={2} 
            styles={buildStyles({
              textColor: '#000000',
              pathColor: '#0023F7',
            })}
            />
        </div>
        <div className={styles.moduleDescriptor}>
          <p><b>Module 2</b></p>
          <p>Learn how to design buttons</p>
        </div>

      </div>
      <div className={`${styles.columns} ${styles.smallSpace}`}>
        <div>
          <CircularProgressbar 
            className={styles.circleProgress} 
            value={PERCENTAGE3} 
            text={`${PERCENTAGE3}%`} 
            strokeWidth={2} 
            styles={buildStyles({
              textColor: '#000000',
              pathColor: '#0023F7',
            })}
            />
        </div>
        <div className={styles.moduleDescriptor}>
          <p><b>Module 3</b></p>
          <p>Learn how to make a design system</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardSideBar;