/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <ul>
            <li>Legal</li>
            <li><a href="/docs/topics/legal-overview">Terms overview</a></li>
            <li><a href="/docs/topics/legal-developers-terms">Developer's terms</a></li>
            <li><a href="/docs/topics/legal-app-terms">App terms</a></li>
            <li><a href="http://www.overwolf.com/legal/"  target="_blank">Overwolf terms</a></li>
            <li><a href="http://www.overwolf.com/legal/#Privacy-policy" target="_blank">Overwolf Privacy policy</a></li>
          </ul>
          <ul>
            <li>Support</li>          
            <li><a href=" https://discuss.developers.overwolf.com/" target="_blank">Questions and Answers</a></li>
            <li><a href=" https://discord.gg/7256qS2" target="_blank">Discord</a></li>
            <li><a href="/docs/support/contact-us#join-our-slack">Slack</a></li>
            <li><a href="https://www.facebook.com/OverwolfDevs" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/OverwolfDevs" target="_blank">Twitter</a></li>
          </ul>
          <ul>
            <li>Documentation</li>
            <li><a href="/docs/api/changelog">Changelog</a></li>
            <li><a href="/docs/api/overwolf-api-overview">API</a></li>
            <li><a href="/docs/start/app-creation-process">App Creation Process</a></li>
            <li><a href="/docs/topics/best-practices-overview">Best Practices</a></li>
            <li><a href="/docs/status/all">Game Events status</a></li>
          </ul>
          <ul>
            <li>Information</li>
            <li><a href="http://www.overwolf.com/careers/">Careers</a></li>
            <li><a href="https://play.overwolf.com/fund/" target="_blank">Fund</a></li>
            <li><a href="https://medium.com/overwolf-developers" target="_blank">Developers Blog</a></li>
            <li><a href="https://www.overwolf.com/appstore" target="_blank">Overwolf Appstore</a></li>        
            <li><a href="https://brands.overwolf.com/" target="_blank">Advertise on Overwolf</a></li>        
          </ul>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
