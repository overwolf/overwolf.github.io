
class Webinars extends React.Component {
    constructor(props) {
      super(props); 
    }
  
    
    render() {
      return (
        <main>
        <h2> Apps Academy</h2>
        <p>The Apps Academy is a 45 minutes session where each time we cover a different subject with an expert in the field. These sessions are the opportunity to enrich your knowledge and upgrade your skillset.
            In order to participate, stay tuned to the announcements channel in [the community.](https://discord.gg/overwolf-developers)
        </p>
        <div>
            <h2>UI/UX</h2>
            <h4>July 8th, 2020</h4>
            <p>Jasmin Weizman, Overwolf’s UI/UX lead designer</p>
            <p>In this session, you will be able to better understand how to create your app identity with the best UX&UI methods, such as visual communications, creating a smooth interface, and more.</p>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LC7i6jmZ_Oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="center-text">
                        <p>Create your app identity with the best UX&UI</p>           
                    </div>
            </div>
        </div>
        <div>
            <h2>Monetization</h2>
            <h4>September 9th, 2020</h4>
            <p>Elazar Heim, Overwolf’s VP of revenue</p>
            <p>We decided to take a deep dive into monetization and do a quick introduction to ads, explain how do ads work on Overwolf, and cover the important metrics, tips and best practices.</p>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GYOgZuPyq2E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="center-text">
                        <p>Quick introduction to ads</p>           
                    </div>
            </div>
        </div>
        <div>
            <h2>Marketing</h2>
            <h4>October 14th, 2020</h4>
            <p>Gil Tov-Ly, Overwolf's VP of growth, and Sophie Duval, Overwolf’s senior marketing manager</p>
            <p>With the help of our marketing expertise, you’ll be able to understand how to get your campaign started with only $100, and how to work with influencers and why is that important?</p>
            <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jBDFc9kmTU0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="center-text">
                        <p>How to get your campaign started</p>           
                    </div>
            </div>
        </div>
        <div>
            <h2>Data</h2>
            <h4>Coming soon</h4>
        </div>

        </main>
      );
    }
  }
  
  ReactDOM.render(<Webinars />, webinars);