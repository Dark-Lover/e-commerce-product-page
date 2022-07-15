import Header from "../components/Header";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import React from "react";
import CountProvider from "../utils/Context/CountProvider";
import ModelView from "../components/Model";

export default function Home() {
  return (
    <CountProvider>
      <Header />
      <Layout>
        <Showcase />
      </Layout>
      {/* <ModelView /> */}
    </CountProvider>
  );
}
