import setAuthToken from '../../src/setAuthToken';
import jwt_decode from 'jwt-decode';

const apiUrl = 'https://user-jwt.herokuapp.com/api/register';

export const addNewForm = form => {
    return dispatch => {
      dispatch(addNewFormRequest(form));
      return fetch(apiUrl, { 
        method: 'POST', 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(form) })
            .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(addNewFormRequestSuccess(data.user));
            });
          } else {
            response.json().then(error => {
              dispatch(addNewFormRequestFailed(error));
          });
        }
      });
    };
  };
 

  export const addNewFormRequest = form => {
    return {
      type: 'ADD_NEW_FORM_REQUEST',
      form,
    };
  };

  export const addNewFormRequestSuccess = (form, user) => {
    return {
      type: 'ADD_NEW_FORM_REQUEST_SUCCESS',
      user
    };
  };
  
  export const addNewFormRequestFailed = error => {
    return {
      type: 'ADD_NEW_TODO_REQUEST_FAILED',
      error,
    };
  };

  const apiUrl2 = 'https://user-jwt.herokuapp.com/api/login';

  export const addNewLogin = form => {
    return dispatch => {
      dispatch(addNewLoginRequest(form));
      return fetch(apiUrl2, { 
        method: 'POST', 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(form) })
            .then(response => {
          if (response.ok) {
            response.json().then(data => {
              dispatch(addNewLoginRequestSuccess(data.token));
                if(data.token){
                  localStorage.setItem('x-access-token', data.token);
                  
                  setAuthToken(data.token);

                  const decoded = jwt_decode(data.token);
                  
                  dispatch(setCurrentUser(decoded));
                }

            });
          } else {
            response.json().then(error => {
              dispatch(addNewLoginRequestFailed(error));
          });
        }
      });
    };
  };
 

  export const addNewLoginRequest = form => {
    return {
      type: 'ADD_NEW_LOGIN_REQUEST',
      form,
    };
  };

  export const addNewLoginRequestSuccess = (form, token) => {
    return {
      type: 'ADD_NEW_LOGIN_REQUEST_SUCCESS',
      token
    };
  };
  
  export const addNewLoginRequestFailed = error => {
    return {
      type: 'ADD_NEW_LOGIN_REQUEST_FAILED',
      error,
    };
  };

  export const setCurrentUser = decoded => {
    return {
      type: 'ADD_NEW_DECODED_USER',
      user: decoded
    }
  }