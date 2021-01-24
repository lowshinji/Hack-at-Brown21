import styles from './UpcomingWidget.module.scss';
import 'react-circular-progressbar/dist/styles.css';

const UpcomingWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p><b>Upcoming</b></p>
      <div className={styles.columns}>
        <div>
          <p>Module 1: Learn how to design a Design System from scratch</p>
        </div>
        <div>
          <p>Due tomorrow</p>
        </div>
      </div>
      
    </div>
  )
}

export default UpcomingWidget;