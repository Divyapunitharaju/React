
import React, { useReducer } from 'react';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const initialState = {
  loggedIn: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.loggedIn ? (
        <Dashboard user={state.user} dispatch={dispatch} />
      ) : (
        <LoginPage dispatch={dispatch} />
      )}
    </div>
  );
};

export default App;
