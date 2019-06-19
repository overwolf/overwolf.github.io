/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function HomeSplash(props) {
  const {siteConfig, language} = props;

  return (
    <div className="index-robot">
      <div className="index-robot-inner">
        <h1 className="index-robot-project-tagline">
          Easily create apps for PC gamers
        </h1>
        <h6 className="index-robot-project-info">
          Overlay, real-time game events, monetization, auto patching, Anti-Cheat compatibility and all that good stuff
        </h6>
        <a href="" className="index-create-app-button">
          Create app
        </a>
      </div>
    </div>
  );
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/overwolf-logo_300x240.svg`,
            imageAlign: 'left',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/overwolf-logo_300x240.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Easily create apps for PC gamers',
            image: `${baseUrl}img/overwolf-logo_300x240.svg`,
            imageAlign: 'right',
            title: 'Overwolf Developers',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            /*image: `${baseUrl}img/overwolf-logo_300x240.svg`,*/
            imageAlign: 'top',
            title: 'Easily create a desktop app with overlay capabilities',
          },
          {
            content: 'The content of my second feature',
            /*image: `${baseUrl}img/overwolf-logo_300x240.svg`,*/
            imageAlign: 'top',
            title: 'Get access to real-time game events',
          },
		  {
            content: 'This is the content of my third feature',
            /*image: `${baseUrl}img/overwolf-logo_300x240.svg`,*/
            imageAlign: 'top',
            title: 'Monetize your app',
          },
		 
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      // <div>
      //   <HomeSplash siteConfig={siteConfig} language={language} />		
      //   <div className="mainContainer">
       
		  // {/* <Features /> */}
      //   </div>
      // </div>
      <div className="body home blog">
        <main id="content" className="main-content" role="main">
          {/* -------------------------------------------------------- */}
          <section className="easily">
            <div className="container">
              <header>Easily create apps for PC gamers</header>
              <p>Overlay, real-time game events, monetization, auto patching, Anti-Cheat compatibility and all that good stuff</p>
              <a className="btn" href="/documentation/">Create app</a>
            </div>
            {/* <svg class="lightning"><use xlink:href="#lightning"></use></svg> */}
            <img className="wolf" src="img/BG_lightning.svg" />
            <img className="wolf" src="img/robot.svg" />
          </section>
          {/* -------------------------------------------------------- */}
          <section class="tiles">
            <ul class="container">
              <li>
                <a href="/documentation/odk-2-0-introduction/creating-your-first-app/">
                  <img className="icon" src="img/tutorials.svg" />
                  <header class="subtitle">Tutorials</header>
                  <p>
                    Newbie and pro web devs should start here
                  </p>
                </a>
              </li>
              <li>
                <a href="/app-creation-best-practices/what-kind-of-app-should-i-develop/">
                  <img className="icon" src="img/potion.svg" />
                  <header class="subtitle">Get inspired</header>
                  <p>
                    See what others crafted
                  </p>
                </a>
              </li>
              <li>
                <a href="/documentation/sdk/overwolf/">				
                  <img className="icon" src="img/scroll.svg" />                  <header class="subtitle">Read our scrolls</header>
                  <p>
                    Documentation, API and stuff you can use
                  </p>
                </a>
              </li>
            </ul>
          </section>
          {/* -------------------------------------------------------- */}
        </main>
      </div>
    );
  }
}

module.exports = Index;
