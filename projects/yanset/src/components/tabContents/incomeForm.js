import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


class IncomeForm extends Component {

  //const { handleSubmit } = this.props;
  handleSubmit = this.props.handleSubmit;

  render () {
    return (
      <div className="container">
        <h3>Tell us about your job!</h3>
          <form className="ui form">

              <div className="fields">

                <div className="field">
                  <label>Salary</label>
                  <div>
                    <Field name="salary" component="input" type="text" placeholder="Amount of your salary"/>
                  </div>
                </div>

                <div className="field">
                  <label>Salary Type</label>
                  <div>
                    <Field className="ui selection dropdown" name="salaryType" component="select">
                      <option></option>
                      <option value="ff0000">Hourly Pay</option>
                      <option value="00ff00">Salary</option>
                      <option value="0000ff">By Contract</option>
                    </Field>
                  </div>
                </div>

              </div>


            <div className="field">
              <label>Company</label>
              <div>
                <Field name="companyName" component="input" type="text" placeholder="Type in your company name"/>
              </div>
            </div>

            <div className="field">
              <label>Title</label>
              <div>
                <Field name="title" component="input" type="text" placeholder="Type in your job title"/>
              </div>
            </div>


            <div className="field">
              <label>Choose an occupation</label>
              <div>
                <Field className="ui selection dropdown" name="occupation" component="select">
                  <option></option>
                  <option value="Engineer">Engineer</option>
                  <option value="Designer">Designer</option>
                  <option value="Developer">Developer</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Lawyer">Lawyer</option>
                </Field>
              </div>
            </div>


            <div className="fields" >

              <div className="field">
                <label>Choose a State</label>
                <div>
                  <Field className="ui selection dropdown" name="state" component="select">
                    <option></option>
                    <option value="CA">CA</option>
                    <option value="MD">MD</option>
                    <option value="NY">NY</option>
                    <option value="IL">IL</option>
                    <option value="WA">WA</option>
                  </Field>
                </div>
              </div>

              <div className="field">
                <label>Choose a City</label>
                <div>
                  <Field className="ui selection dropdown" name="city" component="select">
                    <option></option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Berkeley">Berkeley</option>
                    <option value="San Diego">San Diego</option>
                    <option value="Irvine">Irvine</option>
                    <option value="Santa Barabra">Santa Barabra</option>
                  </Field>
                </div>
              </div>

            </div>

          </form>
      </div>
    )
  }
}

export default reduxForm({
  form : 'incomeForm',
  destroyOnUnmount : false
})(IncomeForm);
