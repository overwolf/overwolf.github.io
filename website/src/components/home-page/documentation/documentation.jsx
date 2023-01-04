import React from 'react';
import './documentation.scss';

const Documentation = (props) => {
 const {} = props;

// ---------------------------------------------------------------------------

  return (
    <section className="documentation-section">
      <h3>Documentation</h3>
      <ul className="documentation-list">
        <li>
          <a href="/start/getting-started">
            <h4>Prepare</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="Prepare"></div>
            <img src="/img/home-2023/server.svg" loading="lazy" alt="Prepare"/>
          </a>
        </li>
        <li>
          <a href="#">
            <h4>Build</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="Build"></div>
            <img src="/img/home-2023/anvil.svg" loading="lazy" alt="Build"/>
          </a>
        </li>
        <li>
          <a href="#">
            <h4>Release</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="Release"></div>
            <img src="/img/home-2023/flag.svg" loading="lazy" alt="Release"/>
          </a>
        </li>
        <li>
          <a href="#">
            <h4>Growth</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="Growth"></div>
            <img src="/img/home-2023/trophy.svg" loading="lazy" alt="Growth"/>
          </a>
        </li>
      </ul>
    </section>
  );

}

export default Documentation;