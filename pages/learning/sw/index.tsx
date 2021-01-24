import Layout from '../../../components/Layout';
// const iframe = '<iframe src="https://codesandbox.io/embed/nice-shannon-nxxhm?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"title="nice-shannon-nxxhm" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'

const Index: React.FC = () => (
    <Layout title="About | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <h1>hi</h1>
    {/* <div dangerouslySetInnerHTML={iframe} /> */}
    <iframe 
     src="https://codesandbox.io/embed/nice-shannon-nxxhm?fontsize=14&hidenavigation=1&theme=dark"
     style={{
       width: "100%",
       height: "500px",
       border: "0",
       borderRadius: "4px",
       overflow: "hidden"
      }}
     title="nice-shannon-nxxhm"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
    </Layout>
);

export default Index;