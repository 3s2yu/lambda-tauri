import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './list-component';
import * as Actions from '../../actions';

class ListContainer extends Component {
  render() {
    const { list, actions } = this.props;

    return (
      <List
        list={list}
        {...actions} />
    );
  }
}

export default connect(state => ({
  list: state.list ? state.list.data : []
}), dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
}))(ListContainer);
