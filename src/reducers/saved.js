'use strict';

let key = 0;

const saved = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FROM_CLIPBOARD':
      key++;
      return [
        ...state,
        {
          name: action.name,
          text: action.text,
          key: 'item-' + key
        }
      ];
    case 'IPC_SEND_DATA':
      const data = action.saved;
      let dataState = [];

      data.forEach(function (element) {
        key++;
        dataState.push({hash: element[0], name: element[1], text: element[2], key: 'item-' + key});
      });

      return dataState;
    default:
      return state;
  }
};

export default saved;
