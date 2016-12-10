'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { showSaveForm } from '../actions';

let AddFromClipboard = ({ dispatch, saveFormVisible }) => (
    <div>
        <span className="glyphicon glyphicon-plus-sign" id="add-from-clipboard" onClick={ () => dispatch(showSaveForm()) }></span>
    </div>
);

const mapStateToProps = (state) => {
  return {
    saveFormVisible: state.saveFormVisible
  };
};

AddFromClipboard = connect(mapStateToProps)(AddFromClipboard);

export default AddFromClipboard;
