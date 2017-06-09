/* @flow */

import _ from 'lodash';

import {
  USER_REQUESTING,
  USER_FAILURE,
  USER_SUCCESS,
} from './action';
import type { UserInfo, Action } from '../../types';

type State = UserInfo;

const initState = {
  loading: false,
  err: false,
  info: [],
};

export default (state: State = initState, action: Action): State => {
  switch (action.type) {
    case USER_REQUESTING:
      return _.assign({}, state, {
        [action.userId]: {
          loading: true,
        },
      });
    case USER_FAILURE:
      return _.assign({}, state, {
        [action.userId]: {
          loading: false,
          err: action.err,
        },
      });
    case USER_SUCCESS:
      return _.assign({}, state, {
        [action.userId]: {
          loading: false,
          info: action.data,
        },
      });
    default:
      return state;
  }
};
