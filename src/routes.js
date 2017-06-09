/* @flow */

import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './containers/Home/action';
import { fetchUserIfNeeded } from './containers/UserInfo/action';
import HomePage from './containers/Home';
import UserInfoPage from './containers/UserInfo';
import NotFoundPage from './components/NotFound';

export const appRoutes = {
  main: '/',
  userInfo: '/user-info/:id',
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
