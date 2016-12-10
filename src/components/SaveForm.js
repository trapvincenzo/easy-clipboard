'use strict';

import React from 'react';

const SaveForm = ({saveFormVisible, onSubmit, hideAddForm}) => {
  let input;

  if (saveFormVisible) {
    return (
        <div>
            <form onSubmit={(e) => {
              e.preventDefault();

              onSubmit(input.value);
              input.value = '';
            }
            }>
                <label>Name for the new entry</label> <br />
                <input className="form-control" id="name-entry" type="text" ref={node => { input = node; }} /> <br />
                <label>Content from clipboard</label> <br />
                <pre id="copy-from-clipboard"></pre>
                <button className="btn btn-success" id="save-btn">Add</button>
                <button type="button" className="btn btn-danger" id="discard-btn" onClick={(e) => {
                  input.value = '';
                  hideAddForm();
                }}>Discard</button>
            </form>
        </div>
    );
  }

  return null;
};

export default SaveForm;
