import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './list-component';
import * as Actions from '../../store/actions';

class ListContainer extends Component {
  render() {
    const { list, navigation, actions } = this.props;
    return (
      <List
        list={list}
        navigation={navigation}
        {...actions} />
    );
  }
}

export default connect(({ data }) => ({
  list: data ? data.list : []
}), dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
}))(ListContainer);
