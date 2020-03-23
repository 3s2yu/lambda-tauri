import { LANGUAGE_CHANGE } from '../types';

const INITIAL_STATE = {
  lang: 'en',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	  case LANGUAGE_CHANGE:
		return { ...state, lang: action.payload.language };
	  default:
		return state;
	}
}
