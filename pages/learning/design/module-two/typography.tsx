import Link from 'next/link';
import Layout from '../../../../components/Layout';
import LearningSideBar from '../../../../components/LearningSidebar';
import LearningTryYourself from '../../../../components/LearningTryYourself/Lesson3';
import LearningModuleHeader from '../../../../components/LearningModuleHeader';

const TypographyPage: React.FC = () => {
  return (
    <Layout title="i2 - Design">
      <LearningSideBar activeItem={"Lesson 3"}/>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ margin: '60px' }}>
          <LearningModuleHeader progress={85} section={"Lesson 3"} />

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
              In basic terms, typography is the skin of the text content. The choice of fonts directly influences how quickly and easily users will perceive and decode the copy. Font size, width, color, and text structure – each particular point matters. What’s more, as well as images, fonts are able to add mood to the written message with their visual style. Typography in design is the art of balancing aesthetic text with the ability to read it quickly – and this game is not as easy as you may think.
            </p>

            <h2 style={{ fontWeight: 500, fontSize: '19px', marginTop: '30px' }}>
              Try It Yourself
            </h2>
            <br />
            <p style={{ color: '#2f2f2f' }}>
              The button below is a bad example of type legibility. Use the sliders to adjust the typography of the label!
            </p>

            <LearningTryYourself />
          </div>
          <br />
          <Link href="/learning/">
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

export default TypographyPage;
