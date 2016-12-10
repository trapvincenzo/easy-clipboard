'use strict';
import React from 'react';
import AddFromClipboard from '../containers/AddFromClipboard';

const SavedList = ({saved, onClick}) => {
  return (<div className="saved-list">
      <AddFromClipboard />
      <ul className="list-group">
          {saved.map(
              savedItem =>
                  <li className="list-group-item" key={savedItem.key}>
                      {savedItem.name}
                      <span className="glyphicon glyphicon-eye-open show-item" data-target={'preview-' + savedItem.key}></span>
                      <div className="pull-right">
                          <i className="copied-message" id={'copied-' + savedItem.key}>Copied</i>
                          <span key={'copy-item-' + savedItem.key} data-target={'copied-' + savedItem.key} data-text={savedItem.text} className="glyphicon glyphicon-copy copy-item"></span>
                          <span key={savedItem.key} data-target={savedItem.hash} data-text={savedItem.text} className="glyphicon glyphicon-remove remove-item"></span>
                      </div>
                      <pre className="preview-item" id={'preview-' + savedItem.key}>{savedItem.text}</pre>
                  </li>
          )}
      </ul>
  </div>);
};

export default SavedList;
