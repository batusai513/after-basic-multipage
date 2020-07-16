import React, { Component } from 'react';

class About extends Component {
  render() {
    return <div>about {this.props.hola}</div>;
  }
}

About.getInitialProps = () => Promise.resolve({ hola: 'mundo' });

export default About;
