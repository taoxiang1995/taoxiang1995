import React, {Component} from 'react';


class Header extends Component {
  style = {
    "margin-top":"30px"
  }

  render () {
    return (
      <div style = { this.style } className="ui container">
        <div className="ui  segment">
          <h2>{this.props.header}</h2>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}

export default Header;
