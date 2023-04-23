import React from 'react';
import './footer.scss';

const Footer = (props) => {
 const {} = props;

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <footer className="site-footer">
      <a href="#" className="back-to-top" onClick={handleBackToTop}>
        <svg><use href="/img/sprite.svg#arrow-up-big"></use></svg>
        back to top
      </a>
      <img src="/img/home-2023/footer-shield.webp" className="ow-shield" alt="Overwolf Developers"/>

      <div className="site-footer-nav">
        <nav>
          <ul>
            <li>
              <h5>Legal</h5>
              <ul>
                <li><a href="/topics/legal/legal-overview">Terms Overview</a></li>
                <li><a href="/topics/legal/legal-developers-terms">Developer's Terms</a></li>
                <li><a href="/topics/legal/legal-app-terms">App Terms</a></li>
                <li><a href="//www.overwolf.com/legal/" target="_blank">Overwolf Terms</a></li>
                <li><a href="//www.overwolf.com/legal/#Privacy-policy" target="_blank">Overwolf Privacy Policy</a></li>
              </ul>
            </li>
            <li>
              <h5>Support</h5>
              <ul>
                <li>
                  <svg><use href="/img/sprite.svg#discord-icon"></use></svg>
                  <a href="//discord.gg/overwolf-developers" target="_blank">Discord</a>
                </li>
                <li>
                  <svg><use href="/img/sprite.svg#slack-icon"></use></svg>
                  <a href="/support/contact-us#join-our-slack" target="_blank">Slack</a>
                </li>
                <li>
                  <svg><use href="/img/sprite.svg#facebook-icon"></use></svg>
                  <a href="//facebook.com/OverwolfDevs" target="_blank">Facebook</a>
                  </li>
                <li>
                  <svg><use href="/img/sprite.svg#twitter-icon"></use></svg>
                  <a href="//twitter.com/OverwolfDevs" target="_blank">Twitter</a>
                  </li>
              </ul>
            </li>
            <li>
              <h5>Documentation</h5>
              <ul>
                <li><a href="/api/changelogs">Changelogs</a></li>
                <li><a href="/api">API</a></li>
                <li><a href="/start/getting-started/app-creation-process">App Creation Process</a></li>
                <li><a href="/topics/best-practices">Best Practices</a></li>
                <li><a href="/status">Game Events Status</a></li>
              </ul>
            </li>
            <li>
              <h5>Information</h5>
              <ul>
                <li><a href="//www.overwolf.com/careers/" target="_blank">Careers</a></li>
                <li><a href="//overwolf.com/fund" target="_blank">Fund</a></li>
                <li><a href="//trello.com/b/1V10E4IB/overwolf-developers-roadmap" target="_blank">Roadmap</a></li>
                <li><a href="//medium.com/overwolf" target="_blank">Developers Blog</a></li>
                <li><a href="//www.overwolf.com/appstore" target="_blank">Overwolf Appstore</a></li>
                <li><a href="//www.overwolf.com/brands" target="_blank">Advertise on Overwolf</a></li>
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

}

export default Footer;