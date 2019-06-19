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
            <li><a href="/terms/developer-terms/">Developer's terms</a></li>
            <li><a href="/terms/app-terms/">App terms</a></li>
            <li><a href="http://www.overwolf.com/legal/" target="_blank">Overwolf terms</a></li>
            <li><a href="http://www.overwolf.com/legal/#Privacy-policy" target="_blank">Overwolf Privacy policy</a></li>
          </ul>
          <ul>
            <li>Support</li>
            <li><a href="https://discordapp.com/invite/cjjrZDp" target="_blank">Discord</a></li>
            <li><a href="http://developers.overwolf.com/get-help/slack/">Slack</a></li>
            <li><a href="https://www.facebook.com/OverwolfDevs" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/OverwolfDevs" target="_blank">Twitter</a></li>
          </ul>
          <ul>
            <li><a href="/documentation/">Documentation</a></li>
            <li><a href="/documentation/sdk/overwolf/">API</a></li>
            <li><a href="/documentation/sdk/overwolf/plugins/">Plugins</a></li>
          </ul>
          <ul>
            <li>Information</li>
            <li><a href="/changelog/">What's new</a></li>
            <li><a href="http://www.overwolf.com/careers/">Careers</a></li>
            <li><a href="https://play.overwolf.com/fund/" target="_blank">Fund</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
