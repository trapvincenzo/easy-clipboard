'use strict';

import { connect } from 'react-redux';
import SavedList from '../components/SavedList';
import {copyTextToClipboard} from '../actions';

const mapStateToProps = (state) => {
  return {
    saved: state.saved
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      dispatch(copyTextToClipboard(text));
    }
  };
};

const ViewSavedList = connect(mapStateToProps, mapDispatchToProps)(SavedList);

export default ViewSavedList;
