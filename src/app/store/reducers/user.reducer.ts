import {
  loginFailed,
  loginSuccess,
  registerSuccess,
  registerFailed,
  getUserDetailSuccess,
  getUserDetailFailed,
  changeUserSuccess,
  changeUserFailed,
} from './../actions/user.action';
import { createReducer, on } from '@ngrx/store';
export const authFeatureKey = 'auth';

export const initialState: any = {
  user: {},
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(loginFailed, (state, action) => {
    return {
      ...state,
      user: {},
      error: action.err,
    };
  })
);

export const registerReducer = createReducer(
  initialState,
  on(registerSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(registerFailed, (state, action) => {
    return {
      ...state,
      user: {},
      error: action.err,
    };
  })
);

export const userDetailsReducer = createReducer(
  initialState,
  on(getUserDetailSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(getUserDetailFailed, (state, action) => {
    return {
      ...state,
      user: {},
      error: action.err,
    };
  })
);

export const userChangeReducer = createReducer(
  initialState,
  on(changeUserSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(changeUserFailed, (state, action) => {
    return {
      ...state,
      user: {},
      error: action.err,
    };
  })
);
