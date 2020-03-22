import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './list-component';
import * as Actions from '../../store/actions';

class ListContainer extends Component {
  render() {
    const { list, navigation, actions } = this.props;

    console.log(list, ' <<<<<<<----- list container');
    return (
      <List
        list={list}
        navigation={navigation}
        {...actions} />
    );
  }
}

export default connect(state => {

  console.log(state, ' ---- state');
  return {
  list: state.data ? state.data.list : []
}}, dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
}))(ListContainer);
