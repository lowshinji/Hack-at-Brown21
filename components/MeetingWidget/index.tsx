import Checkin from '../Checkin';
import styles from './MeetingWidget.module.scss';

const DescriptionWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <div className={styles.header}>
        <div className={styles.title}>Meetings</div>
        <div>
          <span className={styles.filter}>Sort by date ▼</span>
          <button className={styles.button} onClick={() => console.log("that tickles")}>+ Add</button>
        </div>
      </div>
      <div className={styles.body}>
        <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
        <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
        <Checkin date={new Date()} user={{icon: '', name: 'Jason Michaels'}} />
      </div>
    </div>
  )
}

export default DescriptionWidget;