import Header from "../components/Header";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Showcase />
        <h4>hello</h4>
        <h5>hello</h5>
      </Layout>
    </>
  );
}
