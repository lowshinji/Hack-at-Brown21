import styles from './DescriptionWidget.module.scss';

const DescriptionWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p><b>About BigTech</b></p>
      <p className={`${styles.midSpace}`}>BigTech delivers office supplies to small businesses in Boston, Massachusetts. The business operates under entrepreneur Ann Smith to bring essential items like printers and registers to small businesses.</p>
      <hr className={styles.horizontal}/>

      <div className={styles.columns}>
        <img className={styles.picture} src='/mentor.jpg' alt="profile"></img>
        <p className={styles.leftSpace}><b>Mentor:</b> Jason Michaels</p>
      </div>
    </div>
  )
}

export default DescriptionWidget;