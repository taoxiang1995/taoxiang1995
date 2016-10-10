import React, {Component} from 'react';
import Tabs from './tabs';
import TabContent from './tabContent';
import Footer from './footer';
import zingchart from 'zingchart';

class Tab extends Component {

  style = {
    headerStyle : {
      "margin-top":"30px"
    },

    bodyStyle : {
      "margin-top":"30px"
    }
  };

  componentDidMount() {
    this.renderWaterFallChart();
  };

  componentDidUpdate(prevProps, prevState) {
    this.renderWaterFallChart();
  }

  render(){
    console.log(this.props.currentTabNumber, "========>");
    return (
      <div style={ this.style.bodyStyle } className="ui  container">
        <div className="ui  segment">
          <h3>Living Calculator</h3>
          <div>
            <Tabs currentTabNumber = {this.props.currentTabNumber} setCurrentTab = {this.props.setCurrentTab} />
            <TabContent currentTabNumber = {this.props.currentTabNumber} setCurrentTab = {this.props.setCurrentTab}  />
          </div>
          <Footer store={this.props.store} increaseCurrentTabNumber = {this.props.increaseCurrentTabNumber}
                  decreaseCurrentTabNumber = {this.props.decreaseCurrentTabNumber} />
        </div>
      </div>


    )
  }

  renderWaterFallChart(){
    console.log("!!!!!=====>");
    var chartData={
      "type":"waterfall",
      "scale-x": {
        "labels": ["Income","Housing","Food","Healthcare","Transportation","Misc.","Leftover"]
      },
      "title": {
        "text":"Budget Waterfall"
      },
      "options": {
        "positive": {
        "background-color": "#0E6EB8",
        "alpha":"0.4"
        },
        "negative": {
        "background-color": "#A0A0A0",
        "alpha":"0.4"
        },
        "intermediate":{
        "background-color":"#A0A0A0",
        "alpha":"0.4"
        },
        "final": {
        "background-color": "#0E6EB8",
        "alpha":"0.4"
        }
        },
    	"series":[
    		{
    			"values": [
                    10000,
                    -2210,
                    -1700,
                    -1480,
                    -1200,
                    -1000,
                    "SUM"
                ]
    		}
    	]

    };
      zingchart.render({
        id:'waterFall',
        data:chartData,
        height:500,
        width:1100
      });
  }

}

export default Tab;
