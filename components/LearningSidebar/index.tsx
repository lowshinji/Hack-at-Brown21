import styles from './LearningSidebar.module.scss';

type LearningSideBarProps = {
  activeItem?: 'Introduction' | 'Lesson 1' | 'Lesson 2' | 'Lesson 3' | 'Practice' | string;
}

const LearningSideBar: React.FC<LearningSideBarProps> = ({activeItem = ''}) => {
  const isActive = (item: string): string => item === activeItem ? styles.isActive : '';
  
  return (
    <div className={styles.sidenav}>
      <div className="columns">
        <div id={styles.circle} />
        <h2 className={styles.name}>i2</h2>
      </div>
      <div className={styles.middleWidget}>
        <p className={`${styles.menuItem} ${isActive('Introduction')}`}>
          <a href="/learning/design/module-two/introduction" className={`${styles.link}`}>
            Introduction
          </a>
        </p>
        <p className={`${styles.menuItem} ${isActive('Lesson 1')}`}>
          <a href="/learning/design/module-two/color" className={styles.link}>
            Lesson 1
          </a>
        </p>
        <p className={`${styles.menuItem} ${isActive('Lesson 2')}`}>
          <a href="/learning/design/module-two/padding" className={styles.link}>
            Lesson 2
          </a>
        </p>
        <p className={`${styles.menuItem} ${isActive('Lesson 3')}`}>
          <a href="/learning/design/module-two/typography" className={styles.link}>
            Lesson 3
          </a>
        </p>
        <p className={`${styles.menuItem} ${isActive('Lesson 4')}`}>
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
