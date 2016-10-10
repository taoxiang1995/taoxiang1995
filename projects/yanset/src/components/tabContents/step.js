import React, {Component} from 'react';


class Step extends Component {

  render () {
    return (
      <a onClick = {()=>this.props.setCurrentTab(this.props.tabNumber)} className={this.getStepClassName(this.props.currentTabNumber, this.props.tabNumber)}>
        <i className={this.props.iconName}></i>
        <div className="content">
          <div className="title">{this.props.stepName}</div>
        </div>
      </a>)
  }

  getStepClassName(currentTabNumber, tabNumber){
    if (tabNumber == currentTabNumber)
    {
      return "active step";
    }
    else if (tabNumber < currentTabNumber)
    {
      return "step";
    }
    else
    {
      return "disabled step";
    }
  }
}

export default Step;
