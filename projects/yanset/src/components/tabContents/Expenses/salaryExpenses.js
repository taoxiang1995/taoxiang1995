import React, {Component} from 'react';


class SalaryExpenses extends Component {

  render () {
    return (<div className="ui attached segment">

      <div className="ui form">
        <div className="field">
            <label>Choose an occupation</label>
            <div className="ui selection dropdown">
                <input type="hidden" name="gender" />
                <i className="dropdown icon"></i>
                <div className="default text">Occupation</div>
                <div className="menu">
                    <div className="item" data-value="1">Male</div>
                    <div className="item" data-value="0">Female</div>
                </div>
            </div>
        </div>

        <div className="fields" >
          <div className="six wide field">
            <label>Choose a state</label>
              <div className="ui selection dropdown">
                  <input type="hidden" name="gender" />
                  <i className="dropdown icon"></i>
                  <div className="default text">State</div>
                  <div className="menu">
                      <div className="item" data-value="1">Male</div>
                      <div className="item" data-value="0">Female</div>
                  </div>
              </div>
          </div>
          <div className="four wide field">
            <label>Choose a city</label>
              <div className="ui selection dropdown">
                  <input type="hidden" name="gender" />
                  <i className="dropdown icon"></i>
                  <div className="default text">City</div>
                  <div className="menu">
                      <div className="item" data-value="1">Male</div>
                      <div className="item" data-value="0">Female</div>
                  </div>
              </div>
          </div>
        </div>
      </div>

    </div>)
  }
}

export default SalaryExpenses;
