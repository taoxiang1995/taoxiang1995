import React, {Component} from 'react';
import IncomeForm from './tabContents/incomeForm';
import ExpensesForm from './tabContents/ExpensesForm';
import Result from './tabContents/result';


class TabContent extends Component {

  render(){
    return (
      <div className="ui bottom attached active tab segment">
        {this.showCurrentTabSection(this.props.currentTabNumber)}
      </div>
    )
  }

  showCurrentTabSection(currentSectionNumber){
    //console.log(this.state.currentTabSection);
    switch (currentSectionNumber) {
      case 1:
          return (
            <IncomeForm />
          )
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
          return (
            <ExpensesForm  setCurrentTab = {this.props.setCurrentTab} currentTabNumber = {this.props.currentTabNumber} />
          )
        break;
      case 7:
          return (
            <Result />
          )
        break;
      default:

    }
  }
}

export default TabContent;
