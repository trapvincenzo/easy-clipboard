'use strict';

export const addFromClipboard = (name, text) => {
  return {
    type: 'ADD_FROM_CLIPBOARD',
    name,
    text
  };
};

export const showSaveForm = () => {
  return {
    type: 'SHOW_HIDE_SAVE_FORM'
  };
};

export const copyTextToClipboard = (text) => {
  return {
    type: 'COPY_TO_CLIPBOARD',
    text
  };
};
