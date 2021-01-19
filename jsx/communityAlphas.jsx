
class CommunityAlphas extends React.Component {
    constructor(props) {
      super(props); 
    }
  
    
    render() {
      return (
        <main>
          <div className="getting-started-container">
            <article className="getting-started-article">
  
              <div className="video-outer-area">
                  <h2>Get quality feedback from gamers within a few days</h2>
  
                  <p>Getting honest feedback from actual gamers can benefit and help you come up with ideas and improvements for your app. Creating your own community takes time, so let us help, it's free!</p>
                  <p>The Community Alphas are a group of passionate gamers handpicked for their ability to provide feedback and pay attention to details. They are split teams per-game and are eager to test both new and existing apps, speak up their mind, and brainstorm ideas.</p>
                  <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/NYutk56WV1A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <div className="start-build-container-btn">
                          <a href="https://alphas-devs.overwolf.com/" className="btn-pink start-building-btn"  target="_blank">Learn more</a>
                      </div>
                      <div className="center-text">
                          <p>Already have a published app / OPK ready? <a href="https://alphas-devs.overwolf.com/#contact-us" title="Request an Alpha task" target="_blank">Request an Alpha task</a></p>           
                      </div>
                  </div>
              
              </div>
          </article>
          </div>
        </main>
      );
    }
  }
  
  ReactDOM.render(<CommunityAlphas />, communityAlphas);