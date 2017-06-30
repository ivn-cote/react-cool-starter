/* @flow */

import _ from 'lodash';

import {
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from './action';
import type { Home, Action } from '../../types';

type State = Home;

const initialState = {
  loading: false,
  err: null,
  list: [],
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case USERS_REQUESTING:
      return _.assign({}, state, { loading: true });
    case USERS_FAILURE:
      return _.assign({}, state, {
        loading: false,
        err: action.err,
      });
    case USERS_SUCCESS:
      return _.assign({}, state, {
        loading: false,
        list: action.data,
        err: null,
      });
    default:
      return state;
  }
};
