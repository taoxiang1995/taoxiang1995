import {connect} from 'react-redux';
import {selectTab, increaseTabNumber, decreaseTabNumber} from '../actions';
import Tab from '../components/tab';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTabNumber : state.CurrentTabNumber,
    store : ownProps.store
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentTab : (tabNumber)=>{
      dispatch(selectTab(tabNumber));
    },

    increaseCurrentTabNumber : ()=>{
      dispatch(increaseTabNumber());
    },

    decreaseCurrentTabNumber : ()=>{
      dispatch(decreaseTabNumber());
    }
  }
}

const TabsContainer = connect(mapStateToProps, mapDispatchToProps)(Tab);

export default TabsContainer;
