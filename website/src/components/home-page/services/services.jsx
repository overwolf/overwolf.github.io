import React from 'react';
import './services.scss';

const Services = (props) => {
 const {} = props;

// ---------------------------------------------------------------------------

  return (
    <section className="services-section">
      <ul className='services-inner'>
        <li className='service-item'>
          <div className='assets'>
            <img src='/img/home-2023/platform-app-bg.webp' alt='Overwolf Platform App'/>
            <img src='/img/home-2023/platform-app.webp' alt='Overwolf Platform App'  />
          </div>
          <div className='info'>
            <h2>Overwolf Platform App</h2>
            <p>Create powerful desktop apps and overlays for AAA games, using basic HTML and Javascript</p>
            <a href='/start/getting-started' className='btn-primary'>Explore</a>
            <ul className='app-info-list'>
              <li>
                <svg><use href="/img/sprite.svg#monetization" /></svg>
                Monetization
              </li>
              <li>
                <svg><use href="/img/sprite.svg#in-game-overlay" /></svg>
                In-game overlay
              </li>
              <li>
                <svg><use href="/img/sprite.svg#real-time-game-events" /></svg>
                Real time game events
              </li>
            </ul>
          </div>
        </li>

        <li className='service-item'>
          <div className='assets'>
            <img src='/img/home-2023/electron-app-bg.webp' alt='Overwolf Electron App' />
            <img src='/img/home-2023/electron-app.webp' alt='Overwolf Electron App' />
          </div>
          <div className='info'>
            <h2>Overwolf Electron App</h2>
            <p>Build cross-platform desktop apps with JavaScript, HTML, and CSS</p>
            <a href='/tools/ow-electron' className='btn-primary'>Explore</a>
            <ul className='app-info-list'>
              <li>
                <svg><use href="/img/sprite.svg#monetization" /></svg>
                Monetization
              </li>
              <li>
                <svg><use href="/img/sprite.svg#in-game-overlay" /></svg>
                In-game overlay <span>(coming soon)</span>
              </li>
              <li>
                <svg><use href="/img/sprite.svg#real-time-game-events" /></svg>
                Real time game events <span>(coming soon)</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );

}

export default Services;