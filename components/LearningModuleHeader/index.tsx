import * as React from 'react';
import style from './LearningModuleHeader.module.scss';

type LearningModuleHeaderType = {
  progress: number;
  section: string;
};

/*
 * Description of function
 * @param props 
 */
const LearningModuleHeader: React.FC<LearningModuleHeaderType> = ({progress, section}: LearningModuleHeaderType) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header_wrapper}>
        <h1 className={style.header}>
          Module 2: Designing Buttons
        </h1>
        <span className={style.subheader}>{section}</span>
      </div>
      <progress className="progress is-small" value={progress} max="100">
        {progress}%
      </progress>
    </div>
  );
};

export default LearningModuleHeader;