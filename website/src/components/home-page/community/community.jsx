import React from 'react';
import { useRef, useEffect } from 'react';
import './community.scss';

const Community = (props) => {
 const {} = props;
 const signVideo = useRef(null);
 const compassVideo = useRef(null);
  // ---------------------------------------------------------------------------

  useEffect(() => {
    //pause video onload because its has autoplay which a must to load first frame of image in the video
    signVideo.current.pause();
    compassVideo.current.pause();

  }, []);

  const handlePlaySignVideo = () => {
    signVideo.current.play();
  }

  const handlePlayCompassVideo = () => {
    compassVideo.current.play();
  }

  return (
    <section className="community-section">
      <div className='discord-community' onMouseEnter={handlePlaySignVideo}>היי
        <div className='info'>
          <svg><use href="/img/sprite.svg#discord-big" /></svg>
          <h4>Join our community</h4>
          <p>Join our Discord community where you can interact with Overwolf staff and other Overwolf app developers in real-time.</p>
          <a href='https://discord.com/invite/overwolf-developers' target={"_blank"} className='btn-secondary'>Join</a>
        </div>
        <div className='assets'>
          <video className="sign-video" autoPlay loop muted playsInline ref={signVideo}>
            <source src="/img/home-2023/video/sign.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className='game-developer' onMouseEnter={handlePlayCompassVideo}>

        <div className='info'>
          <h4>Game developer?</h4>
          <p>Community is power and a driver for retention.
Give your community tools to create valuable in-game content for your game with the Overwolf Game Events SDK.</p>
          <a href='/topics/integrations/events-sdk-for-game-developers' className='btn-secondary'>Learn more</a>
        </div>

        <div className='assets'>
          <video className="compass-video" autoPlay loop muted playsInline ref={compassVideo}>
            <source src="/img/home-2023/video/compass.webm" type="video/webm" />
          </video>
        </div>

      </div>
    </section>
  );

}

export default Community;