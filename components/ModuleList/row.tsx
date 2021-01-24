import Link from 'next/link';
import styles from './ModuleList.module.scss';

type ModuleInfo = {
  name: string,
  description: string,
  length: number,
  date: Date,
  action: string,
};

const formatDate = (date: Date): string => {
  let day: string;
  switch(date.getDate()) {
    case 1: day = 'Monday';
      break;
    case 2: day = 'Tuesday';
      break;
    case 3: day = 'Wednesday';
      break;
    case 4: day = 'Thursday';
      break;
    case 5: day = 'Friday';
      break;
    case 6: day = 'Saturday';
      break;
    default: day = 'Sunday';
      break;
  }
  let month: string;
  switch(date.getMonth() + 1) {
    case 1: month = 'January';
      break;
    case 2: month = 'February';
      break;
    case 3: month = 'March';
      break;
    case 4: month = 'April';
      break;
    case 5: month = 'May';
      break;
    case 6: month = 'June';
      break;
    case 7: month = 'July';
      break;
    case 8: month = 'August';
      break;
    case 9: month = 'September';
      break;
    case 10: month = 'October';
      break;
    case 11: month = 'November';
      break;
    default: month = 'December';
      break;
  }
  const monthDate = date.getDate();
  return `${day}, ${month} ${monthDate}`;
}

const ModuleRow: React.FC <ModuleInfo> = ({ name, description, length, date, action}: ModuleInfo) => {
  return (
    <div className={`${styles.columns} ${styles.rowEntry} `}>
      <div className={styles.col1}>Circle</div>
      <div className={styles.col2}>{name}: {description}</div>
      <div className={styles.col3}>{length} minutes</div>
      <div className={styles.col4}>{formatDate(date)}</div>
      <div className={`${styles.col5} button is-black`}>
        <Link href={`/learning/design/module-two/introduction`}>{action}</Link> 
      </div>
    </div>
  )
};

export default ModuleRow;