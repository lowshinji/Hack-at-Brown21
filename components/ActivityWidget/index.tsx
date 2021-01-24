import styles from './ActivityWidget.module.scss';
import 'react-circular-progressbar/dist/styles.css';

const ActivityWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p>Activity</p>
      <p>Hours spent on modules</p>
    </div>
  )
}

export default ActivityWidget;