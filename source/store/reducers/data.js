const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type, ' ...... reducer TYPE');
	switch (action.type) {
	  case 'DATA_LOAD':
      console.log(action.payload.data, ' === payload');
      return {
        list: action.payload.data,
      };
	  default:
		  return state;
	}
}
