'use strict';

const saveFormVisible = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_HIDE_SAVE_FORM':
      return !state;
    case 'ADD_FROM_CLIPBOARD':
      return false;
    default:
      return state;
  }
};

export default saveFormVisible;
