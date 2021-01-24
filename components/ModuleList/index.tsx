import ModuleRow from './row';
import styles from './ModuleList.module.scss';

const ModuleList: React.FC = () => {
  return (
    <div className={styles.widget}>
      <div className={`${styles.columns} ${styles.labels}`}>
        <div className={styles.col1}>Progress</div>
        <div className={styles.col2}>Name</div>
        <div className={styles.col3}>Length</div>
        <div className={styles.col4}>Due Date</div>
        <div className={styles.col5}>Action</div>
      </div>
      <ModuleRow 
        date={new Date()} 
        name="Module 1" 
        description= "Learn how to design a Design System from scratch"
        length={90}
        action="Review"/>
      <ModuleRow 
        date={new Date()} 
        name="Module 2" 
        description= "Learn how to design buttons"
        length={45}
        action="Review"/>
      <ModuleRow 
        date={new Date()} 
        name="Module 3" 
        description= "Learn how to prototype your design on Figma"
        length={60}
        action="Review"/>
      <ModuleRow 
        date={new Date()} 
        name="Module 4" 
        description= "Typography Theory"
        length={30}
        action="Review"/>
    </div>
  )
};

export default ModuleList;