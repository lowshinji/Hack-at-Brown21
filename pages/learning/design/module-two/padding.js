import Link from 'next/link';
import Layout from '../../../../components/Layout';
import { useState } from 'react';
import LearningSideBar from '../../../../components/LearningSidebar';
import { GithubPicker } from 'react-color';

const DesignPage = () => {
  const [padding, setPadding] = useState('5');

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
            <h1 style={{ color: 'white', fontWeight: 400, fontSize: '27px', marginBottom: '20px' }}>
              Module 2: Designing Buttons
            </h1>
            <progress className="progress is-small" value="60" max="100" />
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
            <h2 style={{ fontWeight: 500, fontSize: '19px' }}>Button Padding</h2>
            <br />
            <p style={{ color: '#2f2f2f' }}>
              The sizing of your button plays a big role in the accessibility of your interface.
              Most inexperienced designers will say something like, “Buttons should have a height of
              36 pixels”. This isn’t the best approach — especially if you are designing for web.
              You should always take the line hight of the font you are using and add a unit to it.
              For example: “My button’s label has a line height of 20px and vertical padding of
              8px”.
            </p>
            <h2 style={{ fontWeight: 500, fontSize: '19px', marginTop: '30px' }}>
              Try It Yourself
            </h2>
            <br />
            <p style={{ color: '#2f2f2f' }}>
              Using the sliders below, try out different padding styles.
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
                <div style={{ margin: 'auto', paddingTop: '20px' }}>
                  <button
                    style={{
                      padding: `${padding}px`,
                      width: '150px',
                      height: '80px',
                      borderRadius: '10px',
                      fontSize: '20px',
                      fontWeight: 500
                    }}>
                    Button
                  </button>
                </div>
              </div>
              <div className="column">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={padding}
                  onChange={(e) => setPadding(e.target.value)}
                />
                {padding}
              </div>
            </div>
          </div>
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
