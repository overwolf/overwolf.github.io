/* eslint-disable @docusaurus/no-untranslated-text */
import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/home-page/hero/hero';
import Services from '../components/home-page/services/services';
import Documentation from '../components/home-page/documentation/documentation';
import Community from '../components/home-page/community/community';
import OWInternalLink from '../theme/ow-internal-link';
import FrameworkComparison from '../components/home-page/framework-comparison/framework-comparison';

const Index = (props: any) => {
  // const {} = props;

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://dev.overwolf.com/';
    }, 0);
  }, []);

  return (
    <Layout
      title="Easily create apps for PC games on the Overwolf framework"
      description="Easily create apps for PC games on the Overwolf framework"
    >
      <main id="content" className="main-content">
        <Hero />
        <Services />
        <Documentation />
        <FrameworkComparison />
        <Community />
      </main>
    </Layout>
  );
};

export default Index;
