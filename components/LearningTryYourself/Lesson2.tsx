import * as React from 'react';
import { useState } from 'react';
import style from './TryYourself.module.scss';

/*
 * Description of function
 * @param props 
 */
const Lesson2: React.FC = () => {
  const [padding, setPadding] = useState(0);

  const success_condition = (
    padding === 16
  )

  return (
    <div className={`columns ${style.wrapper}`}>
      <div className="column">
        <div style={{
          margin: 'auto',
          paddingTop: '50px',
          textAlign: 'center',
        }}>
          <button
            style={{
              color: "white",
              background: '#404380',
              border: "none",
              borderRadius: '10px',
              fontSize: '4rem',
              padding: `${padding}px`,
            }}>
            Button
          </button>
          <div className={style.legibility_indicator}>
            Legibility: {success_condition ? <span className={style.passed}>✔</span> : <span className={style.notPassed}>✘</span>}
          </div>
        </div>
      </div>
      <div className="column">
        <div className={style.controller}>
          <label>Padding: </label>
          <div>
            0 <input type="range" min="0" max="50" value={padding} className={style.slider} onChange={(e) => setPadding(parseInt(e.target.value,10))}></input> 50
            <input type="number" min="0" max="50" value={padding} className={style.slider_input} onChange={(e) => setPadding(parseInt(e.target.value,10))}></input> 
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lesson2;