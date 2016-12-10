'use strict';

import { connect } from 'react-redux';
import SaveForm from '../components/SaveForm';
import { addFromClipboard, showSaveForm } from '../actions';

const mapStateToProps = (state) => {
  return {
    saveFormVisible: state.saveFormVisible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, text) => {
      dispatch(addFromClipboard(name, text));
    },
    hideAddForm: () => {
      dispatch(showSaveForm());
    }
  };
};

const ViewSaveForm = connect(mapStateToProps, mapDispatchToProps)(SaveForm);

export default ViewSaveForm;
