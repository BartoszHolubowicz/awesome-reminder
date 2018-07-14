import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './WelcomeMessage.css';

class WelcomeMessage extends Component {
  constructor () {
    super();
    this.state = {
      welcomeMessage: {
        title: "welcomeTitle",
        message: "welcomeMessage"
      }
    }
    this.getRandomWelcomeMessage = this.getRandomWelcomeMessage.bind(this);
  }
  getRandomWelcomeMessage() {
    const { welcomeMessages } = this.props;
    const { floor, random } = Math;
    const { stringify } = JSON;
    const index = () => {
      let randomIndex = floor(random() * welcomeMessages.length);
      while(stringify(welcomeMessages[randomIndex]) === stringify(this.state.welcomeMessage))
        randomIndex = floor(random() * welcomeMessages.length);
      return randomIndex;
    }
    return { ...this.state, welcomeMessage: welcomeMessages[index()] };
  }
  componentWillMount() {
    this.setState( this.getRandomWelcomeMessage() );
  }
  render() {
    const { welcomeMessage } = this.state;
    const { title, message } = welcomeMessage;
    return (
      <div className="WelcomeMessage-panel">
        <div className="WelcomeMessage">
          {/* <button onClick={this.getRandomWelcomeMessage}>Show me another message</button> */}
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1300}>
            <span className="welcome-title" key={welcomeMessage}>{title}</span>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1300}>
            <span className="welcome-message" key={welcomeMessage}>{message}</span>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ welcomeMessages: state.welcomeMessages });

WelcomeMessage = connect(mapStateToProps)(WelcomeMessage);

export default WelcomeMessage;