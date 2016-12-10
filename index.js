'use strict';

const {app, ipcMain, Menu} = require('electron');
global.userDataPath = app.getPath('userData');

const ClipboardRepository = require('./src/repository/ClipboardRepository');
const menubar = require('menubar');

// Config the app to use the menubar
menubar({
  width: 600,
  height: 500,
  resizable: false,
  showDockIcon: true
});

/**
 * {Object} event
 */
function reloadData(event) {
  ClipboardRepository.read(function (data) {
    event.sender.send('sendData', data);
  });
}

// Event listener to send back the loaded data from the repository
ipcMain.on('getSavedClipboard', function (event) {
  reloadData(event);
});

ipcMain.on('saveData', function(event, data) {
  ClipboardRepository.save(data.name, data.text, function () {
    reloadData(event);
  });
});

ipcMain.on('deleteData', function(event, data) {
  ClipboardRepository.delete(data, (error) => {
    reloadData(event);
  });
});
