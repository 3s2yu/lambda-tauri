import {DATA_LOAD} from '../types';

import list from '../../data';

const INITIAL_STATE = {
  list,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_LOAD:
      return {...state, list: action.payload.data};
    default:
      return state;
  }
};
