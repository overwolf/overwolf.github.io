import React from 'react';
import './community.scss';

const Community = (props) => {
 const {} = props;

// ---------------------------------------------------------------------------

  return (
    <section className="community-section">
      <div className='discord-community'>
        <div className='info'>
          <svg><use href="/img/sprite.svg#discord-big" /></svg>
          <h4>Join our community</h4>
          <p>Join our Discord community where you can interact with Overwolf staff and other Overwolf app developers in real-time.</p>
          <a href='https://discord.com/invite/overwolf-developers' target={"_blank"} className='btn-secondary'>Join</a>
        </div>
        <div className='assets'>
          <video className="sign-video" autoPlay loop muted playsInline poster="/img/home-2023/community-poster.webp">
            <source src="/img/home-2023/video/sign.webm" type="video/webm" />
          </video>
          <img src='/img/home-2023/community-poster.webp' alt='' className='mobile'/>
          {/* <img src='/img/home-2023/smoke.webp' alt='' className='smoke'/> */}
          <img src='/img/home-2023/sparks.webp' alt='' className='sparks'/>
        </div>
      </div>

      <div className='game-developer'>

        <div className='info'>
          <h4>Game developer?</h4>
          <p>Community is power and a driver for retention.
Give your community tools to create valuable in-game content for your game with the Overwolf SDK.</p>
          <a href='/topics/integrations/events-sdk-for-game-developers' className='btn-secondary'>Learn more</a>
        </div>

        <div className='assets'>
          <video className="compass-video" autoPlay loop muted playsInline poster="/img/home-2023/compass-poster.webp">
            <source src="/img/home-2023/video/compass.webm" type="video/webm" />
          </video>
          <img src='/img/home-2023/compass-poster.webp' alt='' className='mobile'/>
          <img src='/img/home-2023/smoke2.webp' alt='' className='smoke'/>
        </div>

      </div>
    </section>
  );

}

export default Community;