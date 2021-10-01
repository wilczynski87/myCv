import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Left from './left';
import Right from './right';
import Footer from './footer';

class Cumulative extends React.Component {

  render() {
    return (
      <>
      <div style={{display: 'flex', justifyContent: 'center', maxWidth: '1400px'}} className="w3-content w3-margin-top">
        <div className = "w3-row-padding">
          <Left />
          <Right />
        </div>
      </div>
      <Footer />
      </>
    )
  }
}

// ========================================

ReactDOM.render(
  <Cumulative />,
  document.getElementById('root')
);
