import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';

class App extends Component {
  constructor () {
    super();
    this.state = { backgroundURL: "" };
    this.getBackground = this.getBackground.bind(this);
  }
  getBackground(random) {
    const { backgrounds } = this.props;
    return { ...this.state, backgroundURL: backgrounds[Math.floor(random * backgrounds.length)] };
  }
  componentWillMount() {
    this.setState( this.getBackground(Math.random()) );
  }
  render() {
    const { backgroundURL } = this.state;
    return (
      <div className="App" style={backgroundURL !== "" ? {background: `url(${backgroundURL})`, backgroundSize: `cover`} : {}}>
        <WelcomeMessage />
      </div>
    );
  }
}

const mapStateToProps = state => ({ backgrounds: state.backgrounds });

App = connect(mapStateToProps)(App);

export default App;
