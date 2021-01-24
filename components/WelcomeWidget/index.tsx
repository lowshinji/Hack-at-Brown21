import styles from './WelcomeWidget.module.scss';

const DescriptionWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p className={`${styles.bigText}`}><b>Welcome, Jessica</b></p>
      <p className={styles.midSpace}>You have <b>3</b> modules to complete</p>
      <a className={`button is-white ${styles.button} ${styles.smallSpace}`} href="/">Continue</a>
    </div>
  )
}

export default DescriptionWidget;