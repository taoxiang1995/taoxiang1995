import React, {Component} from 'react';

class Tabs extends Component {
  render(){
    return (
      <div className="ui top attached tabular menu">
        <a className={this.tabClassName(1)} onClick = {()=>this.props.setCurrentTab(1)}>Income</a>
        <a className={this.tabClassName(2)} onClick = {()=>this.props.setCurrentTab(2)}>Expenses</a>
        <a className={this.tabClassName(7)} onClick = {()=>this.props.setCurrentTab(7)}>Result</a>
      </div>
    )
  }

  tabClassName (tabNumber) {
    if (this.isInExpensesSection(tabNumber))
    {
        return "item active"
    }
    else
    {
        return (this.props.currentTabNumber == tabNumber? "item active" : "item");
    }
  }

  isInExpensesSection(tabNumber){
    return (tabNumber >= 2 && tabNumber <= 6 && this.props.currentTabNumber >=2 && this.props.currentTabNumber <=6)
  }
}

export default Tabs;
