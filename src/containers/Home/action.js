/* @flow */
import requestAPI from '../../communication';

import type {
  Dispatch,
  GetState,
  ThunkAction,
  Reducer,
} from '../../types';

export const USERS_REQUESTING = 'USERS_REQUESTING';
export const USERS_FAILURE = 'USERS_FAILURE';
export const USERS_SUCCESS = 'USERS_SUCCESS';

export const API_URL = 'users/';

// Export this for unit testing more easily
export const fetchUsers = (endpointPath: string = API_URL): ThunkAction =>
  (dispatch: Dispatch, getStore) => {
    dispatch({ type: USERS_REQUESTING });

    return requestAPI(endpointPath, getStore().config)
      .then((res) => {
        dispatch({ type: USERS_SUCCESS, data: res.data });
      })
      .catch((err) => {
        dispatch({ type: USERS_FAILURE, err });
      });
  };

// Preventing dobule fetching data
/* istanbul ignore next */
const shouldFetchUsers = (state: Reducer): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const home = state.home;

  if (home.readyStatus === USERS_SUCCESS) return false; // Preventing double fetching data

  return true;
};

/* istanbul ignore next */
export const fetchUsersIfNeeded = (): ThunkAction =>
  (dispatch: Dispatch, getState: GetState) => {
    /* istanbul ignore next */
    if (shouldFetchUsers(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchUsers());
    }

    /* istanbul ignore next */
    return null;
  };
