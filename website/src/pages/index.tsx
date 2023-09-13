import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/home-page/hero/hero';
import Services from '../components/home-page/services/services';
import Documentation from '../components/home-page/documentation/documentation';
import Community from '../components/home-page/community/community';

const Index = (props) => {
  const {} = props;

  return (
    <Layout title="Easily create apps for PC games on the Overwolf framework" description="Easily create apps for PC games on the Overwolf framework">
      <main id="content" className="main-content">
        <Hero />
        <Services />
        <Documentation />
        <Community />
      </main>
    </Layout>
  );

 }

 export default Index;
