const CurrentTabNumber = (state = 1, action) =>
{
  switch (action.type)
  {
    case 'SELECT_TAB':
      return action.tabNumber;

    case 'INCREASE_TAB_NUMBER':
      return increaseTabNumber(state);

    case 'DECREASE_TAB_NUMBER':
      return decreaseTabNumber(state);

    default:
      return state;
  }
}

function increaseTabNumber (tabNumber)
{
  console.log("called========.>", tabNumber);
  if (tabNumber < 7)
    return tabNumber+1;
  else
    return 7;
}

function decreaseTabNumber (tabNumber)
{
  if (tabNumber > 1)
    return tabNumber-1;
  else
    return 1;
}

export default CurrentTabNumber;
