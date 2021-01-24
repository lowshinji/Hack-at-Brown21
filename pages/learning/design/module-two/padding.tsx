import Link from 'next/link';
import Layout from '../../../../components/Layout';
import LearningSideBar from '../../../../components/LearningSidebar';
import LearningModuleHeader from '../../../../components/LearningModuleHeader';
import TryItYourself from '../../../../components/LearningTryYourself/Lesson2';

const DesignPage: React.FC = () => {
  return (
    <Layout title="i2 - Design">
      <LearningSideBar activeItem="Lesson 2"/>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ margin: '60px' }}>
          <LearningModuleHeader progress={65} section="Lesson 2" />
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
            <TryItYourself />
            </div>
          </div>
          <Link href="/learning/design/module-two/typography">
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
    </Layout>
  );
};

export default DesignPage;
