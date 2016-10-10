import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class MiscExpense extends Component {

  render () {
    return (<div className="container">
      <br/>
      <form className="ui form">


        <div className="field">
          <label>Number of Household:</label>
          <div>
            <Field className="ui selection dropdown" name="Number of Household" component="select">
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
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
})(MiscExpense);
