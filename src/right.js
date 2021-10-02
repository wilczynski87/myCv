import React from 'react';
import CvButton from './cvButton';

class Main extends React.Component {
  render() {

    return(
      <div className="w3-twothird">

      <div className="w3-container w3-card w3-white w3-margin-bottom">
      <div style={{overflow: 'auto'}}> <h2 className="w3-text-grey w3-padding-16" style={{float: 'left'}}><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Projects </h2>
        <CvButton/>
      </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>ToDoList</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-microchip fa-fw w3-margin-right"></i>technology: JavaScript</h6>
          <p>ToDo list made in JavaScript</p>
          <ul>
            <li>Allow to creating ToDo lists with tasks and edit them</li>
            <li>Operates with many users -> using credentials to log in</li>
            <li>Uses localStorage to store lists</li>
            <li>Hashing password</li>
          </ul>
          <hr />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Readability</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-microchip fa-fw w3-margin-right"></i>technology: Java</h6>
          <p>Program check how hard to read is given text (from file) in baising on <a href="https://en.wikipedia.org/wiki/Readability">Readability theory</a></p>
          <ul>
            <li>Taking file as input using BufferedReader -> assumend text may be large</li>
            <li>Uses String transformation and Regex</li>
            <li>After some computing, algoritms frome Wikipedia, returns solution in terminal (it can be send with REST to ie other website)</li>
          </ul>
          <hr />
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Shere a Cab</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-microchip fa-fw w3-margin-right"></i>technology: JavaScript (Cordova)</h6>
          <p>This is mobile app which faciliate to take a cab with somebody (and split costs) around University campus</p>
          <ul>
            <li>Mobile App developed thanks to <a href="https://cordova.apache.org/">Apache Cordova</a> it is a hybrid approach to mobile apps <i class="fa fa-long-arrow-right" aria-hidden="true"></i> develop in JavaScript but works on various devices (like OEs, Android, Apple)</li>
            <li>Using external map API of <a href="https://leafletjs.com/">"Leaflet"</a> to show how far away taxi waiting point will be</li>
            <li>Also uses a device geolocation</li>
            <li>This project was my assignment papers</li>
          </ul>
        </div>
        <br/>
      </div>

      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>The Open University</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2017 - 2022</h6>
          <h6>Computing & IT and a second subject (Management)</h6>
          <p>Bachelor Degree (Honours)</p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>University of Wroclaw</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
          <h6>Law</h6>
          <p>Master Degree</p>
        </div>
      </div>

      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Courses</h2>
        <div className="courses">
          <div className="w3-container">
            <span className="w3-opacity"><b>Pirple</b></span><br/>
            <span className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2021</span><br/>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="w3-container">
            <span className="w3-opacity"><b>W3School</b></span><br/>
            <span className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2020 - 2021</span><br/>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Sass</li>
              <li>Rest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Main;
