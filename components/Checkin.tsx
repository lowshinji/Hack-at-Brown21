import * as React from 'react';
import Image from 'next/image';
import styles from './Checkin.module.scss';


type CheckinType = {
  // title: string,
  date: Date,
  user: {
    icon: string,
    name: string,
  },
};

const COLORS = [
  '#FE5244',
  '#FFCF2D',
  '#66B0F0',
]

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
  const time = `${date.getHours()}:${date.getMinutes()}`
  const endDate = new Date(date.getTime() + 3600000);
  const endTime = `${endDate.getHours()}:${endDate.getMinutes()}`;
  return `${day}, ${month} ${monthDate} at ${time} - ${endTime}PM EST`;
}

/*
 * Description of function
 * @param props 
 */
const Checkin: React.FC<CheckinType> = ({ date, user }: CheckinType) => {
  const color = COLORS[Math.floor(Math.random()*COLORS.length)];
  return (
    <div className={styles.wrapper} style={{borderLeft: `3px solid ${color}`}}>
      <div className={styles.title}>End-of-week Checkin</div>
      <div className={styles.date}>{formatDate(date)}</div>
      <hr className={styles.divider} />
      <span className={styles.profile}>
        <div className={styles.profile}>
          <Image className={styles.icon} src={'/profile.jpg'} alt="a beautiful human" width={16} height={16} />
          <span className={styles.name}>{user.name}</span>
        </div>
        <span className={styles.link}><a href="/">Go to Meeting</a></span>
      </span>
    </div>
  );
}

export default Checkin;