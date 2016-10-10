import React, {Component} from 'react';


class Footer extends Component {

  render () {
    return (
      <div className="ui two bottom attached buttons">
          <div onClick = {()=>{console.log(this.props.store.getState()); this.props.decreaseCurrentTabNumber()}} className="ui button">Back</div>
          <div onClick = {()=>{console.log(this.props.store.getState()); this.props.increaseCurrentTabNumber()}} className="ui button">Next</div>
      </div>
    )
  }
}

export default Footer;
