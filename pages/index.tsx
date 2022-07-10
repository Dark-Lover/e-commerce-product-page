import Header from "../components/Header";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Showcase />
      </Layout>
    </>
  );
}
