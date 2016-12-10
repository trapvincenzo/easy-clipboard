'use strict';

import createIpc from 'redux-electron-ipc';

/**
 * Creates the new action with a new state coming from the electron main
 *
 * @param {object} event
 * @param {array} saved
 * @returns {{type: string, saved: *}}
 */
function sendDataActionCreator (event, saved) {
  return {
    type: 'IPC_SEND_DATA',
    saved
  };
}

const ipc = createIpc({
  'sendData': sendDataActionCreator
});

export default ipc;
