/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    return (
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
          <section className="tiles">
            <ul className="container">
              <li>
                <a href="/documentation/odk-2-0-introduction/creating-your-first-app/">
                  <img className="icon" src="img/tutorials.svg" />
                  <header className="subtitle">Tutorials</header>
                  <p>
                    Newbie and pro web devs should start here
                  </p>
                </a>
              </li>
              <li>
                <a href="/app-creation-best-practices/what-kind-of-app-should-i-develop/">
                  <img className="icon" src="img/potion.svg" />
                  <header className="subtitle">Get inspired</header>
                  <p>
                    See what others crafted
                  </p>
                </a>
              </li>
              <li>
                <a href="/documentation/sdk/overwolf/">
                  <img className="icon" src="img/scroll.svg" />
                  <header className="subtitle">Read our scrolls</header>
                  <p>
                    Documentation, API and stuff you can use
                  </p>
                </a>
              </li>
            </ul>
          </section>
          {/* -------------------------------------------------------- */}
          <section className="sdk">
            <div className="container">
              <h1>Learn more about the Overwolf SDK</h1>
              <ul>
                <li>
                  <p>
                    <a href="/documentation/odk-2-0-introduction/">Easily create a desktop app with overlay capabilities</a>, using just HTML and JS. Your own desktop app, desktop icon, auto updates, anti-cheat compatibility and the works... we do it all for you
                  </p>
                  <div className="sdk-graphic extra-padding-on-desktop">
                    <img src="img/create.svg" />
                  </div>
                </li>
                <li className="reversed">
                  <p>
                    <a href="/documentation/sdk/overwolf/games/events/">Get access to real-time game events</a> for leading games and make your app as if it were integrated directly with the game itself
                  </p>
                  <div className="sdk-graphic">
                    <img src="img/events.svg" />
                  </div>
                </li>
                <li>
                  <p>
                    <a href="/monetize-your-app/">Monetize your app</a> and make money by showing forgivable ads (= ads on loading screens, when gamers don’t have anything better to do anyway). It’s easier than implementing AdSense, not affected by ad blockers, not obtrusive and our team will optimize the experience with you
                  </p>
                  <div className="sdk-graphic extra-padding-on-desktop">
                    <img src="img/monetize.svg" />
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* -------------------------------------------------------- */}
          <section class="game-dev">
            <div class="container">
              <h1>Game developer?</h1>
              <p>
                Community is power and a driver for retention.<br/>
                Give your community tools to create valuable in-game content for your game with the Overwolf SDK
              </p>
              <a class="btn" href="/sdk-for-game-developers/">Learn more</a>
            </div>
          </section>
          {/* -------------------------------------------------------- */}
          <section class="blog">
            <div class="container">
              <header class="subtitle">The latest from our blog</header>
              <ul><li><span class="date">Jun 02, 2019</span><a href="https://medium.com/p/aeefc437736b" target="_blank"><span>7 Customer Support Tactics That Win Users Over</span></a></li><li><span class="date">May 26, 2019</span><a href="https://medium.com/p/64961ad1ee1b" target="_blank"><span>Winner Announcement: PUBG Dev Challenge</span></a></li><li><span class="date">May 02, 2019</span><a href="https://medium.com/p/3a6b4dc28539" target="_blank"><span>Unlock the True Potential of Your Community with UGC</span></a></li></ul>		</div>
          </section>
          {/* -------------------------------------------------------- */}
        </main>
      </div>
    );
  }
}

module.exports = Index;
