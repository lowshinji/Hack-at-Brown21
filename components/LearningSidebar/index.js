import styles from './LearningSidebar.module.scss';

const LearningSideBar = () => {
  return (
    <div className={styles.sidenav}>
      <div className="columns">
        <div id={styles.circle} />
        <h2 className={styles.name}>i2</h2>
      </div>
      <div className={styles.middleWidget}>
        <p className={styles.menuItem}>
          <a href="/" className={styles.link}>
            Lesson 1
          </a>
        </p>
        <p className={styles.menuItem}>
          <a href="/progress" className={styles.link}>
            Lesson 2
          </a>
        </p>
        <p className={styles.menuItem}>
          <a href="/learning" className={styles.link}>
            Lesson 3
          </a>
        </p>
        <p className={styles.menuItem}>
          <a href="/meetings" className={styles.link}>
            Practice
          </a>
        </p>
      </div>

      <div className={styles.bottomWidget}>
        <p className={styles.menuItem} style={{ color: '#5A626A' }}>
          <a href="/settings" className={styles.link}>
            Exit Module
          </a>
        </p>
      </div>
    </div>
  );
};

export default LearningSideBar;
