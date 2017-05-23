/* @flow */

import { fetchUsersIfNeeded } from 'appContainers/Home/action';
import { fetchUserIfNeeded } from 'appContainers/UserInfo/action';
import HomePage from 'appContainers/Home';
import UserInfoPage from 'appContainers/UserInfo';
import NotFoundPage from 'appContainers/NotFound';
import type { Dispatch } from './types';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,  // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
    ]),
  },
  {
    path: '/UserInfo/:id',
    component: UserInfoPage,
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchUserIfNeeded(params.id)),
    ]),
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
