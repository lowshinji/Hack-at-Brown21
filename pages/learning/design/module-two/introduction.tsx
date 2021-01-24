import Link from 'next/link';
import Layout from '../../../../components/Layout';
// import { useState } from 'react';
import LearningSideBar from '../../../../components/LearningSidebar';
import LearningModuleHeader from '../../../../components/LearningModuleHeader';

const DesignPage: React.FC = () => {
  // const [paddingBottom, setPaddingBottom] = useState('5');
  // const [paddingTop, setPaddingTop] = useState('5');
  // const [paddingLeft, setPaddingLeft] = useState('5');
  // const [paddingRight, setPaddingRight] = useState('5');
  // const [color, setColor] = useState('white');
  // const [openBackgroundColorPicker, setOpenBackgroundColorPicker] = useState(false);

  return (
    <Layout title="i2 - Design">
      <LearningSideBar activeItem="Introduction"/>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ margin: '60px' }}>
          <LearningModuleHeader progress={15} section={"Introduction"} />
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
            <h2 style={{ fontWeight: 500, fontSize: '19px' }}>Why Do We Design Buttons?</h2>
            <br />
            <p style={{ color: '#2f2f2f', marginBottom: '4rem' }}>
              In order to design the right interactions, we need to look back at the history and
              origins of physical pushbuttons, a direct predecessor of the UI component so heavily
              used in all digital products today. Buttons are amazing. The touch of a finger setting
              an appliance, a car, or a system in motion, even if the user doesn’t understand the
              underlying mechanisms or algorithms. In Power Button, Rachel Plotnick traces the
              origins of today’s push-button culture and describes the ways that button-pushing
              became a means for digital command, which promised effortless, discreet and fool-proof
              control.
            </p>

            <div className="columns" style={{ marginTop: '10px' }}>
              <div className="column">
                <button className="button" style={{ marginBottom: '6px' }}>
                  Normal
                </button>
                <br />
                <button className="button is-primary">Normal</button>
              </div>
              <div className="column">
                <button className="button is-link" style={{ marginBottom: '6px' }}>
                  Normal
                </button>
                <br />
                <button className="button is-info">Normal</button>
              </div>
              <div className="column">
                <button className="button is-success" style={{ marginBottom: '6px' }}>
                  Normal
                </button>
                <br />
                <button className="button is-warning">Normal</button>
              </div>
              <div className="column">
                <button className="button is-danger">Normal</button>
              </div>
            </div>
          </div>
          <br />
          <Link href="/learning/design/module-two/color">
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
                color: 'white'
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
