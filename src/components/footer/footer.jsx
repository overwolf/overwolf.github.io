import React from 'react';
import './footer.scss';

const Footer = (props) => {
  const {} = props;

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <a href="#" className="back-to-top" onClick={handleBackToTop}>
        <svg>
          <use href="/img/sprite.svg#arrow-up-big"></use>
        </svg>
        back to top
      </a>
      <img
        src="/img/home-2023/footer-shield.webp"
        className="ow-shield"
        alt="Overwolf Developers"
      />

      <div className="site-footer-nav">
        <nav>
          <ul>
            <li>
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="/legal/developer-terms">App Developer Terms</a>
                </li>
                <li>
                  <a href="/legal/developer-privacy-policy">
                    App Developer Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/legal/developer-california-privacy-act">
                    App Developer CCPA
                  </a>
                </li>
                <li>
                  <a
                    href="//www.overwolf.com/legal/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Overwolf Terms
                  </a>
                </li>
                <li>
                  <a
                    href="//www.overwolf.com/legal/#Privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Overwolf Privacy Policy
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h5>Support</h5>
              <ul>
                <li>
                  <svg>
                    <use href="/img/sprite.svg#discord-icon"></use>
                  </svg>
                  <a
                    href="//discord.gg/overwolf-developers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <svg>
                    <use href="/img/sprite.svg#facebook-icon"></use>
                  </svg>
                  <a
                    href="//facebook.com/OverwolfDevs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <svg>
                    <use href="/img/sprite.svg#twitter-icon"></use>
                  </svg>
                  <a
                    href="//twitter.com/OverwolfDevs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h5>Documentation</h5>
              <ul>
                <li>
                  <a href="/api/changelogs">Changelogs</a>
                </li>
                <li>
                  <a href="/api">API</a>
                </li>
                <li>
                  <a href="/start/getting-started/app-creation-process">
                    App Creation Process
                  </a>
                </li>
                <li>
                  <a href="/topics/best-practices">Best Practices</a>
                </li>
                <li>
                  <a href="/status">Game Events Status</a>
                </li>
              </ul>
            </li>
            <li>
              <h5>Information</h5>
              <ul>
                <li>
                  <a
                    href="//www.overwolf.com/careers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="//overwolf.com/fund"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fund
                  </a>
                </li>
                <li>
                  <a href="/api/changelogs/roadmap">Roadmap</a>
                </li>
                <li>
                  <a
                    href="//medium.com/overwolf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Developers Blog
                  </a>
                </li>
                <li>
                  <a
                    href="//www.overwolf.com/appstore"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Overwolf Appstore
                  </a>
                </li>
                <li>
                  <a
                    href="//www.overwolf.com/ads/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Advertise on Overwolf
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="site-footer-social">
        <div className="site-footer-social-inner">
          <div className="copyright">
            <span>Overwolf 2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
