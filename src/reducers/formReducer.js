const initialState = {
   form: {},
   isFetching: false,
   register: false,
   user: {}
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NEW_FORM_REQUEST':
        return {
          ...state,
          isFetching: true,
          form: action.form
        };
        case 'ADD_NEW_FORM_REQUEST_SUCCESS':
        return {
          ...state,
          isFetching: false,
          register: true,
          user: action.user
        };
        case 'ADD_NEW_TODO_REQUEST_FAILED':
        return {
          ...state,
          isFetching: false,
        };
        case 'ADD_NEW_LOGIN_REQUEST':
        return {
          ...state,
          isFetching: true,
          form: action.form
        };
        case 'ADD_NEW_LOGIN_REQUEST_SUCCESS':
        return {
          ...state,
          isFetching: true,
          form: action.form
        };
        case 'ADD_NEW_LOGIN_REQUEST_FAILED':
        return {
          ...state,
          isFetching: true,
          form: action.form
        };
        case 'ADD_NEW_DECODED_USER':
        return {
          ...state,
          user: action.user
        };

        default:
        return state;
    }
}
