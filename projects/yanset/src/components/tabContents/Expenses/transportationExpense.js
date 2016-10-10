import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class TransportationExpense extends Component {

  render () {
    return (<div className="container">
    <br/>
    <form className="ui form">


      <div className="field" >
        <label htmlFor="marriage">I use transportation</label>
        <div>
          <Field className="ui checkbox" name="isUseTransportation"  component="input" type="checkbox"/>
        </div>
      </div>

    </form>
    </div>)
  }
}

export default reduxForm({
  form: 'incomeForm',  // a unique identifier for this form
  destroyOnUnmount : false
})(TransportationExpense);
