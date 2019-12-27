
class GettingStarted extends React.Component {
  constructor(props) {
    super(props); 
  }

  
  render() {
    return (
      <main>
        <div className="getting-started-container">
          <article className="getting-started-article">

            <div className="video-outer-area">
                <h2>An introduction to Overwolf apps</h2>

                <p>Overwolf apps are in-game apps created by independent creators or teams, improving the game experience of the biggest games out there. Overwolf overlay apps help gamers play smarter and have more fun doing it by making useful information and tools available in-game</p>
               {/*
                <div className="video-container">
                    <div className="video-container-inner">
                        <video controls disablepictureinpicture controlslist="nodownload">
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="start-build-container-btn">
                        <a href="../start/sample-app-overview" className="btn-pink start-building-btn">Start Building</a>
                    </div>
                </div>
              */}
            </div>

            <h2>What can apps do?</h2>

            <p className="what-can-apps-do-intro">If you can imagine it, you can probably develop it.<br/> The possibilities are endless, but here are some of the most successful Overwolf app features to date:</p>

            <ul className="icons-list what-apps-do-list">
                <li className="highlights">
                    <h3>Highlights</h3>
                    <p>Automatically clip highlights based on in game events such as kills or deaths,<br/> making it easier than ever to show off one's skills.</p>
                </li>
                <li className="game-stats">
                    <h3>Game Stats</h3>
                    <p>Add in-game stats and enemy intel to top PC games,<br/> fuelling tactics and smarter plays.</p>
                </li>
                <li className="build-recommendations">
                    <h3>Build & Recommendations</h3>
                    <p>Provide recommendations for builds, loadouts, compositions or decks depending on the game in question.</p>
                </li>
                <li className="tournaments">
                    <h3>Tournaments</h3>
                    <p>Participate in user-organized tournaments and community challenges.</p>
                </li>
                <li className="easy-integration">
                    <h3>3rd Party Integration</h3>
                    <p>Integrate with services and platforms all over the globe.<br/> For instance, you can merge Overwolf in-game events with in-stream tools using the Twitch API.</p>
                </li>
            </ul>

            <h2>Where apps live</h2>
            <p className="were-apps-live-intro">Apps can run in multiple modes which you should keep in mind when thinking about your concept:</p>

            <ul className="icons-list were-apps-live-list">
                <li className="in-game">
                    <h3>In-game</h3>
                    <p>Apps can appear during loading times, in the lobby, during respawn timers or otherwise when the player is free and not busy playing.<br/> A hotkey enables or disables in-game apps whenever the user wishes it.</p>
                </li>
                <li className="desktop">
                    <h3>Desktop</h3>
                    <p>When the gamer's not in-game, apps can still provide value, for example by enabling a desktop window for debriefing and researching one's performance after a long match.</p>
                </li>
                <li className="companion-screen">
                    <h3>Companion Screen</h3>
                    <p>More and more gamers use a second monitor while playing, and companies such as MSI, ASUS, HP and others are rushing to release companion screen laptops - Overwolf apps are already prepared to work as a second monitor solution.</p>
                </li>
                <li className="twitch-extension">
                    <h3>Twitch Extension</h3>
                    <p>Overwolf's apps are fully integratable with the Twitch API, so our tools can run on stream and communicate with streamers and viewer actions.</p>
                </li>
            </ul>

            <h2>Your next steps</h2>
            <p>In this website you can find everything you need to build your app from the ground up, whether you're going at it independently or seeking help. If your concept is solid and you're in need of development resources, <a href="https://www.overwolf.com/fund/home" target="_blank">apply to our fund!</a></p>
            <p>If you encounter any issues we can help with, difficulties to overcome or have suggestions to share, talk to us over at <a href="https://discordapp.com/invite/cjjrZDp" target="_blank">Discord</a> or directly at <a href="mailto:developers@overwolf.com">Developers@overwolf.com</a></p>

            <div className="start-build-footer-btn">
                <a href="../start/sample-app-overview" className="btn-pink start-building-btn">Start Building</a>
            </div>
        </article>
        </div>
      </main>
    );
  }
}

ReactDOM.render(<GettingStarted />, gettingStarted);