import styles from './LearningWidget.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PERCENTAGE1 = 100

const DashboardSideBar: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p>Learning</p>
      <div className={`columns ${styles.smallSpace}`}>
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
            />
        </div>
        <div>
          <p>Module 1</p>
          <p>Learn how to make a design system</p>
        </div>
      </div>
      <div className={`columns`}>
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
            />
        </div>
        <div>
          <p>Module 1</p>
          <p>Learn how to make a design system</p>
        </div>

      </div>
      <div className={`columns`}>
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
            />
        </div>
        <div>
          <p>Module 1</p>
          <p>Learn how to make a design system</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardSideBar;