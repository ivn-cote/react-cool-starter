import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import config from 'config';

import {
  fetchUsers,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from '../action';

const appConfig = config.get('app');
const { backendBaseURL } = appConfig;
axios.defaults.adapter = httpAdapter;

const mockStore = configureMockStore([thunk]);

describe('fetch users data', () => {
  const response = [{ id: '1', name: 'Welly' }];
  const errorMessage = 'Oops! Something went wrong.';

  afterEach(() => { nock.disableNetConnect(); });

  test('creates USERS_SUCCESS when fetching users has been done', () => {
    expect.assertions(1);
    nock(backendBaseURL)
      .get(/.*/)
      .reply(200, response);

    const expectedActions = [
      { type: USERS_REQUESTING },
      { type: USERS_SUCCESS, data: response },
    ];
    const store = mockStore({ list: null, config: {} });

    return store.dispatch(fetchUsers(axios, '/none'))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });

  test('creates USERS_FAILURE when fail to fetch users', () => {
    expect.assertions(1);
    nock(backendBaseURL)
      .get(/.*/)
      .replyWithError(errorMessage);

    const expectedActions = [
      { type: USERS_REQUESTING },
      { type: USERS_FAILURE, err: new Error([errorMessage]) },
    ];
    const store = mockStore({ err: null, config: {} });

    return store.dispatch(fetchUsers(axios, '/none'))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });
});
