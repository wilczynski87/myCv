import React from 'react';
import CvButton from './cvButton';
import me from './images/me.png';

class Left extends React.Component {
  render() {
    return (
      //Left Column
    <div className="w3-third">

      <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
        <div className="w3-display-container">
          <img src={me} id="img" alt="Avatar" />
          <div className="w3-display-bottomleft w3-container w3-text-black">
            <h2>Karol Wilczynski</h2>
          </div>
        </div>
        <div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Software Developer, Cloud</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>S80 2NS, Worksop, UK</p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>wilczynski87@gmail.com</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>(+44) 7915 689 779</p>
          <hr/>
        </div>
      </div>
      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <div className="w3-container">
          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <p>Java 11</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '90%'}}>90%</div>
          </div>
          <p>JavaScript ES6 + React.js</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '80%'}}>
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>HTML, CSS + Sass, JSON, RESTFull api</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '80%'}}>80%</div>
          </div>
          <p>Git + GitHub, IntelliJ</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
          </div>
          <p>SQLite</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '70%'}}>70%</div>
          </div>
          <p>Kotlin</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '50%'}}>50%</div>
          </div>
          <p>AWS, OpenStack</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '50%'}}>50%</div>
          </div>
          <br/>

          <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
          <p>English - proficient</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height: '24px', width: '90%'}}></div>
          </div>
          <p>Polish - native</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height: '24px', width: '100%'}}></div>
          </div>
          <br/>
        </div>
      </div><br/>
      <CvButton />
    </div>
    );
  }
}

export default Left;
