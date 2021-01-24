import styles from './DescriptionWidget.module.scss';

const DescriptionWidget: React.FC = () => {
  return(
    <div className={`${styles.widget}`}>
      <p>About BigTech</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text.</p>
      <hr/>
      <p>Mentor: Jason Michaels</p>
    </div>
  )
}

export default DescriptionWidget;