/* @flow */

import { fetchUsersIfNeeded } from 'appContainers/Home/action';
import { fetchUserIfNeeded } from 'appContainers/UserInfo/action';
import HomePage from 'appContainers/Home';
import UserInfoPage from 'appContainers/UserInfo';
import NotFoundPage from 'appComponents/NotFound';
import type { Dispatch } from './types';

export const appRoutes = {
  main: '/',
  userInfo: 'user-info/:id',
};

export default [
  {
    path: appRoutes.main,
    exact: true,
    component: HomePage,  // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
    ]),
  },
  {
    path: appRoutes.userInfo,
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
