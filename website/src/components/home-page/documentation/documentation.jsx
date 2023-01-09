import React from 'react';
import { useEffect } from 'react';
import './documentation.scss';

const Documentation = (props) => {
 const {} = props;

// lottie animated icons
  const startLottieAnimatedIcons = () => {

    let scriptTag = document.createElement('script');
    scriptTag.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js";

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

    setTimeout(() => {

      let lottieParamsObj = (animName) => {
        return {
          container: document.getElementById(animName), // Required
          path: `/img/home-2023/json/${animName}.json`, // Required
          renderer: 'svg', // Required
          loop: false, // Optional
          autoplay: false, // Optional
          name: animName, // Name for future reference. Optional.
        }
      }

      const prepareAnim = bodymovin.loadAnimation(lottieParamsObj('prepare'));
      const buildAnim = bodymovin.loadAnimation(lottieParamsObj('build'));
      const releaseAnim = bodymovin.loadAnimation(lottieParamsObj('release'));
      const growthAnim = bodymovin.loadAnimation(lottieParamsObj('growth'));

      document.querySelectorAll(".documentation-list li a").forEach((cItem) => {

        cItem.addEventListener('mouseenter', (e) => {
          let IconID = cItem.querySelector('div').id;
          // console.log('mouseenter')
          switch(IconID) {
            case 'prepare':
              prepareAnim.setDirection(1);
              prepareAnim.play();
              break;
            case 'build':
              buildAnim.setDirection(1);
              buildAnim.play();
              break;
            case 'release':
              releaseAnim.setDirection(1);
              releaseAnim.play();
              break;
            case 'growth':
              growthAnim.setDirection(1);
              growthAnim.play();
              break;
          }
        })

        cItem.addEventListener('mouseleave', (e) => {
          // console.log('mouseleave')
          let IconID = cItem.querySelector('div').id;
          switch(IconID) {
            case 'prepare':
              prepareAnim.setDirection(-1);
              prepareAnim.stop();
              break;
            case 'build':
              buildAnim.setDirection(-1);
              buildAnim.stop();
              break;
            case 'release':
              releaseAnim.setDirection(-1);
              releaseAnim.stop();
              break;
            case 'growth':
              growthAnim.setDirection(-1);
              growthAnim.stop();
              break;
          }
        })

      });

    }, 500)

  }

  useEffect(() => {
    startLottieAnimatedIcons();
    }, []);

// ---------------------------------------------------------------------------

  return (
    <section className="documentation-section">
      <h3>Documentation</h3>
      <ul className="documentation-list">
        <li>
          <a href="/start/getting-started">
            <h4>Prepare</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="prepare"></div>
            <img src="/img/home-2023/server.svg" loading="lazy" alt="Prepare"/>
          </a>
        </li>
        <li>
          <a href="/start/getting-started/app-creation-process#build">
            <h4>Build</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="build"></div>
            <img src="/img/home-2023/anvil.svg" loading="lazy" alt="Build"/>
          </a>
        </li>
        <li>
          <a href="/start/getting-started/app-creation-process#release">
            <h4>Release</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="release"></div>
            <img src="/img/home-2023/flag.svg" loading="lazy" alt="Release"/>
          </a>
        </li>
        <li>
          <a href="/start/getting-started/app-creation-process#grow">
            <h4>Grow</h4>
            <p>Here will be an explanation text about stages of this process.</p>
            <div className="anim-icon" id="growth"></div>
            <img src="/img/home-2023/trophy.svg" loading="lazy" alt="Growth"/>
          </a>
        </li>
      </ul>
    </section>
  );

}

export default Documentation;