import Link from 'next/link';
import Layout from '../components/Layout';
import { useState } from 'react';
import LearningSideBar from '../components/LearningSidebar';
import { GithubPicker } from 'react-color';

const DesignPage: React.FC = () => {
  const [paddingBottom, setPaddingBottom] = useState('5');
  const [paddingTop, setPaddingTop] = useState('5');
  const [paddingLeft, setPaddingLeft] = useState('5');
  const [paddingRight, setPaddingRight] = useState('5');
  const [color, setColor] = useState('white');
  const [openBackgroundColorPicker, setOpenBackgroundColorPicker] = useState(false);

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
            <progress className="progress is-small" value="15" max="100">
              15%
            </progress>
          </div>
          <h1 style={{ fontFamily: 'canada-type-gibson, sans-serif' }}>Design</h1>
          <p style={{ fontFamily: 'canada-type-gibson, sans-serif' }}>
            This is the design page
            <br />
            Change the bottom padding {paddingBottom}
            <input
              type="range"
              min="1"
              max="100"
              value={paddingBottom}
              onChange={(e) => setPaddingBottom(e.target.value)}
            />
            <br />
            Change the top padding {paddingTop}
            <input
              type="range"
              min="1"
              max="100"
              value={paddingTop}
              onChange={(e) => setPaddingTop(e.target.value)}
            />
            <br />
            Change the left padding {paddingLeft}
            <input
              type="range"
              min="1"
              max="100"
              value={paddingLeft}
              onChange={(e) => setPaddingLeft(e.target.value)}
            />
            <br />
            Change the right padding {paddingRight}
            <input
              type="range"
              min="1"
              max="100"
              value={paddingRight}
              onChange={(e) => setPaddingRight(e.target.value)}
            />
          </p>
          <button onClick={() => setOpenBackgroundColorPicker(true)}>
            Change background color
          </button>
          <br />
          {openBackgroundColorPicker && (
            <GithubPicker
              color={color}
              onChangeComplete={(color) => {
                setColor(color.hex);
                setOpenBackgroundColorPicker(false);
              }}
            />
          )}
          <button
            style={{
              paddingBottom: `${paddingBottom}px`,
              paddingTop: `${paddingTop}px`,
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
              fontFamily: 'canada-type-gibson, sans-serif',
              backgroundColor: color
            }}>
            Button
          </button>
          <p>
            <Link href="/">
              <a>Go home</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DesignPage;
