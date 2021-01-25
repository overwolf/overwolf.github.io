
class CreatorsContent extends React.Component {
    constructor(props) {
      super(props); 
    }
  
    
    render() {
      return (
        <main>
        <p>Learn how to code, create, and build Overwolf applications. These sessions are the opportunity to enrich your knowledge and upgrade your skillset.
            Stay tuned to the announcements channel in <a href="https://discord.gg/overwolf-developers" target="_blank">the community</a>.
        </p>
        <div>
            <h2>Building your first OW app</h2>
            <p><b>James Lockhart</b>, Overwolf apps creator.</p>
            <p>In this session, James will take you step by step to develop your first OW app: how to install the needed software, how to download the OW sample app, the concept behind OW apps, how to capture events from games like Fortnite, and debug the results, and more.</p>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6hskY4Dfrns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </main>
      );
    }
  }
  
  ReactDOM.render(<CreatorsContent />, creatorsContent);
