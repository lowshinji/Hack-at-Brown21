import styles from './MeetingWidget.module.scss';
import Checkin from '../Checkin';

const DescriptionWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      
      <div className={styles.columns}>
        <div className={styles.title}>
          <p><b>Meetings</b></p>
        </div>
        <div>
          <p>Sort by mango ∨</p>
        </div>
        <div>
        <a className={`button is-link ${styles.button}`} href="/dashboard">+Add</a>
        </div>
      </div>
      <div className={styles.meetingEntry}>
        <Checkin  date={new Date()} user={{icon: '', name: 'Jason McConnell'}} />
      </div>

      <div className={styles.meetingEntry}>
        <Checkin  date={new Date()} user={{icon: '', name: 'Mitch Goldmann'}} />
      </div>
    </div>
  )
}

export default DescriptionWidget;