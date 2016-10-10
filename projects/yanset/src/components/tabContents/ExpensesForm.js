import React, {Component} from 'react';
import SalaryExpenses from './Expenses/salaryExpenses';
import FoodExpenses from './Expenses/foodExpenses';
import HealthCareExpense from './Expenses/healthCareExpense';
import HousingExpenses from './Expenses/housingExpenses';
import MiscExpense from './Expenses/miscExpense';
import TransportationExpense from './Expenses/transportationExpense';
import Step from './step';


class ExpensesForm extends Component {

  render () {
    return (<div className="container">

      <div className="ui six top attached steps">

        <Step setCurrentTab = {this.props.setCurrentTab}
              tabNumber = {2}
              currentTabNumber = {this.props.currentTabNumber}
              stepName = "Housing"
              iconName = "building outline icon" />

        <Step setCurrentTab = {this.props.setCurrentTab}
              tabNumber = {3}
              currentTabNumber = {this.props.currentTabNumber}
              stepName = "Food"
              iconName = "food icon" />

        <Step setCurrentTab = {this.props.setCurrentTab}
              tabNumber = {4}
              currentTabNumber = {this.props.currentTabNumber}
              stepName = "Healthcare"
              iconName = "first aid icon" />

        <Step setCurrentTab = {this.props.setCurrentTab}
              tabNumber = {5}
              currentTabNumber = {this.props.currentTabNumber}
              stepName = "Transportation"
              iconName = "car icon" />

        <Step setCurrentTab = {this.props.setCurrentTab}
              tabNumber = {6}
              currentTabNumber = {this.props.currentTabNumber}
              stepName = "Misc."
              iconName = "credit card alternative icon" />

      </div>

      {this.showFormContent(this.props.currentTabNumber)}

    </div>)
  }

  showFormContent(currentTabNumber){
    switch (currentTabNumber) {
      case 2:
        return <HousingExpenses  />
        break;
      case 3:
        return <FoodExpenses />
        break;
      case 4:
        return <HealthCareExpense />
        break;
      case 5:
        return <TransportationExpense />
        break;
      case 6:
        return <MiscExpense />
        break;
      default:

    }
  }
}

export default ExpensesForm;
