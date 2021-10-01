import React from 'react';

class CvButton extends React.Component {
  render() {
    return (
      <a href="./images/KarolWilczynskiCV.pdf" download="KarolWilczynskiCV"><button className="cvButton w3-text-teal w3-card-4" >Download CV</button></a>
    )
  }
}
export default CvButton;
