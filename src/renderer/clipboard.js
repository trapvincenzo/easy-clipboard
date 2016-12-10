'use strict';

/**
 * This file is the connection between the React app and electron.
 * The render attaches some dom events to interact with the main app
 */

const {clipboard, ipcRenderer} = require('electron');
const app = document.getElementById('app-root');

/**
 * Init the events delegate to be 'attached' to the main App.
 * Because using react you don't have the elements always on the real DOM
 * you need to delegate the events to the app directly.
 */
function initEventsDelegate() {
  app.addEventListener('click', function (e) {
    if (e.target) {
      var item = e.target;

      if (item.matches('.copy-item')) {
        var copiedMessage = document.getElementById(item.getAttribute('data-target'));

        copiedMessage.style.display = 'inline-block';
        setTimeout(function () {
          copiedMessage.style.display = 'none';
        }, 600);

        clipboard.writeText(item.getAttribute('data-text'));
      }

      if (item.matches('.show-item')) {
        var element = document.getElementById(item.getAttribute('data-target'));
        element.style.display = 'block' === element.style.display ? 'none' : 'block';
      }

      if (item.matches('.remove-item')) {
        if (confirm('Are you sure to remove this item?')) {
          ipcRenderer.send('deleteData', item.getAttribute('data-target'));
        }
      }

      if (item.matches('#add-from-clipboard')) {
        setTimeout(function () {
          const copyInput = document.getElementById('copy-from-clipboard');
          copyInput.innerHTML = clipboard.readText();
        }, 1);
      }

      if (item.matches('#save-btn')) {
        ipcRenderer.send('saveData', {name: document.getElementById('name-entry').value, text: clipboard.readText()});
      }

      if (item.match('.openurl')) {
        e.preventDefault();
        electron.shell.openExternal(item.getAttribute('src'));
      }
    }
  });
}

initEventsDelegate();
