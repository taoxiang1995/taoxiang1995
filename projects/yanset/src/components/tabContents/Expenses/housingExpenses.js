import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class HousingExpenses extends Component {

  render () {
    return (<div className="container">
    <br/>
    <h3>I’d like to choose stay in a place of …</h3>
      <form className="ui form">
        <div className="field">
          <label>Number of Bedroom:</label>
          <div>
            <Field className="ui selection dropdown" name="Number of Bedroom" component="select">
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
          <label>Number of Bathroom:</label>
          <div>
            <Field className="ui selection dropdown" name="Number of Bathroom" component="select">
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
          <label>Zip Code</label>
          <div>
            <Field name="zipCode" component="input" type="text" placeholder="Type in your zip code"/>
          </div>
        </div>

      </form>
    </div>)
  }
}

export default reduxForm({
  form: 'incomeForm',  // a unique identifier for this form
  destroyOnUnmount: false
})(HousingExpenses);
