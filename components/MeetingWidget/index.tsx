import styles from './MeetingWidget.module.scss';

const DescriptionWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p>Meetings</p>
    </div>
  )
}

export default DescriptionWidget;