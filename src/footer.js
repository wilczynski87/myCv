import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <a href="https://github.com/wilczynski87/"><i class="fa fa-github-square w3-hover-opacity" aria-hidden="true"></i></a>
        <span> </span>
        <a href="https://www.linkedin.com/in/karol-wilczy%C5%84ski-b33a8b57/"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
        <p>Bootstrap from: <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </footer>
    )
  }
}
export default Footer;
