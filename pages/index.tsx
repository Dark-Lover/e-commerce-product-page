import Header from "../components/Header";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import React, { useState } from "react";
import CountProvider from "../utils/Context/CountProvider";
import ModelView from "../components/Model";

export default function Home() {
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  return (
    <CountProvider>
      <Header />
      <Layout>
        <Showcase isOpen={modelOpen} setModelOpen={setModelOpen} />
      </Layout>
      <ModelView isOpen={modelOpen} setModelOpen={setModelOpen} />
    </CountProvider>
  );
}
