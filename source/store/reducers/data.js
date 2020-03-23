import { DATA_LOAD } from '../types';

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type, ' ...... reducer TYPE');
  console.log(DATA_LOAD, ' ...... reducer TYPE +++++');

	switch (action.type) {
	  case DATA_LOAD:
      return { ...state, list: action.payload.data };
	  default:
		  return state;
	}
}
