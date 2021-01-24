import Link from 'next/link';
import Layout from '../../../../components/Layout';
import { useState } from 'react';
import LearningSideBar from '../../../../components/LearningSidebar';
import { CompactPicker } from 'react-color';

const DesignPage = () => {
  const [paddingBottom, setPaddingBottom] = useState('5');
  const [paddingTop, setPaddingTop] = useState('5');
  const [paddingLeft, setPaddingLeft] = useState('5');
  const [paddingRight, setPaddingRight] = useState('5');
  const [color, setColor] = useState('white');
  const [backgroundColor, setBackgroundColor] = useState('#404380');

  return (
    <Layout title="i2 - Design">
      <LearningSideBar />
      <div style={{ marginLeft: '220px' }}>
        <div style={{ margin: '60px' }}>
          <div
            style={{
              backgroundColor: 'black',
              height: '176px',
              borderRadius: '20px',
              paddingTop: '35px',
              paddingLeft: '43px',
              paddingRight: '43px'
            }}>
            <h1 style={{ color: 'white', fontWeight: 500, fontSize: '27px', marginBottom: '20px' }}>
              Module 2: Designing Buttons
            </h1>
            <progress className="progress is-small" value="35" max="100" />
          </div>

          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              paddingTop: '35px',
              paddingLeft: '43px',
              paddingRight: '43px',
              paddingBottom: '25px',
              marginTop: '30px'
            }}>
            <h2 style={{ fontWeight: 500, fontSize: '19px' }}>Color States</h2>
            <br />
            <p style={{ color: '#2f2f2f' }}>
              In order to design the right interactions, we need to look back at the history and
              origins of physical pushbuttons, a direct predecessor of the UI component so heavily
              used in all digital products today. Buttons are amazing. The touch of a finger setting
              an appliance, a car, or a system in motion, even if the user doesn’t understand the
              underlying mechanisms or algorithms. In Power Button, Rachel Plotnick traces the
              origins of today’s push-button culture and describes the ways that button-pushing
              became a means for digital command, which promised effortless, discreet and fool-proof
              control.
            </p>

            <h2 style={{ fontWeight: 500, fontSize: '19px', marginTop: '30px' }}>
              Try It Yourself
            </h2>
            <br />
            <p style={{ color: '#2f2f2f' }}>
              Using the colour pickers below, change the colour of the button’s background and the
              label to achieve optimal contrast.
            </p>

            <div
              style={{
                backgroundColor: '#F2F4F9',
                borderRadius: '20px',
                paddingTop: '35px',
                paddingLeft: '43px',
                paddingRight: '43px',
                paddingBottom: '25px',
                marginTop: '30px'
              }}
              className="columns">
              <div className="column">
                <div style={{ margin: 'auto', paddingTop: '50px' }}>
                  <button
                    style={{
                      color,
                      backgroundColor,
                      width: '150px',
                      height: '80px',
                      borderRadius: '10px',
                      border: backgroundColor,
                      fontSize: '20px',
                      fontWeight: 500
                    }}>
                    Button
                  </button>
                </div>
              </div>
              <div className="column">
                <CompactPicker
                  color={color}
                  onChangeComplete={(color) => {
                    setColor(color.hex);
                  }}
                />
                <div style={{ marginTop: '10px' }} />
                <CompactPicker
                  color={backgroundColor}
                  onChangeComplete={(color) => {
                    setBackgroundColor(color.hex);
                  }}
                />
              </div>
            </div>
          </div>
          <br />
          <Link href="/learning/design/module-two/padding">
            <button
              style={{
                float: 'right',
                marginTop: '10px',
                fontWeight: 500,
                fontSize: '19px',
                lineHeight: '16px',
                height: '56px',
                width: '176px',
                background: 'black',
                borderRadius: '10px',
                color: 'white',
                marginBottom: '20px'
              }}>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default DesignPage;
