import React from 'react';

class CvButton extends React.Component {
  render() {
    return (
      <a href="https://myprvcv167103d55acc4688baeb346260fcc610154739-staging.s3.eu-west-1.amazonaws.com/KarolWilczynskiCV.pdf" download="KarolWilczynskiCV"><button className="cvButton w3-text-teal w3-card-4" >Download CV</button></a>
    )
  }
}
export default CvButton;
