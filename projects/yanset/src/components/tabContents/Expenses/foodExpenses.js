import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


class FoodExpenses extends Component {
  handleSubmit = this.props.handleSubmit;
  render () {
    return (<div className="container">
        <br/>
        <form className="ui form">


          <div className="field" >
            <label htmlFor="marriage">I am married</label>
            <div>
              <Field className="ui checkbox" name="marriage"  component="input" type="checkbox"/>
            </div>
          </div>

          <div className="field">
            <label>Number of Children:</label>
            <div>
              <Field className="ui selection dropdown" name="Number of Children" component="select">
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



          <div className="field">
            <label>Their Age:</label>
            <div>
              <Field className="ui selection dropdown" name="children age" component="select">
                <option></option>
                <option value="1">1 year old</option>
                <option value="2-3">2-3 years old</option>
                <option value="4-5">4-5 years old</option>
                <option value="6-8">6-8 years old</option>
                <option value="9-11">9-11 years old</option>
                <option value="12+">12+ years old</option>
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
})(FoodExpenses);
