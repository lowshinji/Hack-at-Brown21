import * as React from 'react';
import { useState } from 'react';
import style from './TryYourself.module.scss';

type Lesson3Type = {
  // Stuff
};

/*
 * Description of function
 * @param props 
 */
const Lesson3: React.FC<Lesson3Type> = () => {
  const [font, setFont] = useState('Comic Sans MS');
  const [fontSize, setFontSize] = useState(50);
  const [tracking, setTracking] = useState(-10);

  const success_condition = (
    fontSize === 32 && font === 'Helvetica' && tracking === 4
  )

  return (
    <div className={`columns ${style.wrapper}`}>
      <div className="column">
        <div className={style.testButton}>
          <button
            style={{
              color: "white",
              background: '#404380',
              border: "none",
              borderRadius: '10px',
              letterSpacing: tracking,
              font: `${fontSize}px "${font}"`,
              fontWeight: 500
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
          <label>Font Family: </label>
          <select className={style.selector} onChange={(e) => setFont(e.target.value)} defaultValue={font}>
            <option value="Arial">Arial</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Bauhaus">Bauhaus</option>
            <option value="Impact">Impact</option>
            <option value="Roboto">Roboto</option>
          </select>
        </div>
        <div className={style.controller}>
          <label>Tracking: </label>
          <div>
            -50 <input type="range" min="-50" max="50" value={tracking} className={style.slider} onChange={(e) => setTracking(parseInt(e.target.value,10))}></input> 50
            <input type="number" min="-50" max="50" value={tracking} className={style.slider_input} onChange={(e) => setTracking(parseInt(e.target.value,10))}></input> 
          </div>
        </div>
        <div className={style.controller}>
          <label>Font Size: </label>
          <div>
            0 <input type="range" min="1" max="100" value={fontSize} className={style.slider} onChange={(e) => setFontSize(parseInt(e.target.value,10))}></input> 100
            <input type="number" min="1" max="100" value={fontSize} className={style.slider_input} onChange={(e) => setFontSize(parseInt(e.target.value,10))}></input> 
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lesson3;