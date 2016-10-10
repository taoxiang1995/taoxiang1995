export const selectTab = (tabNumber) => {
  return {
    type : 'SELECT_TAB',
    tabNumber
  }
}

export const increaseTabNumber = () => {
  return {
    type : 'INCREASE_TAB_NUMBER'
  }
}

export const decreaseTabNumber = () => {
  return {
    type : 'DECREASE_TAB_NUMBER'
  }
}
