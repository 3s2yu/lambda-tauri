const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	  case 'DATA_LOAD':
      return {
        list: action.payload.data,
      };
	  default:
		  return state;
	}
}
