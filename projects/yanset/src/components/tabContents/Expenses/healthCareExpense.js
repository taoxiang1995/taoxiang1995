import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class HealthCareExpense extends Component {

  render () {
    return (<div className="container">

      <form className="ui form">


        <div className="field">
          <br/>
          <label>My age is within the range of:</label>
          <div>
            <Field className="ui selection dropdown" name="myAge" component="select">
              <option></option>
              <option value="1">10-25 years old</option>
              <option value="2">25-35 years old</option>
              <option value="3">35-45 years old</option>
              <option value="4">45-55 years old</option>
              <option value="5">55-65 years old</option>
              <option value="6">65+ years old</option>
            </Field>
          </div>
        </div>

      </form>
    </div>)
  }
}

export default reduxForm({
  form: 'incomeForm',  // a unique identifier for this form
  destroyOnUnmount: false
})(HealthCareExpense);
