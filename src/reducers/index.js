'use strict';

import { combineReducers } from 'redux';
import saved from './saved';
import saveFormVisible from './saveFormVisible';

const easyClipboardApp = combineReducers({
  saved,
  saveFormVisible
});

export default easyClipboardApp;
