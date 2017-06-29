import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';
import config from 'config';

import {
  fetchUser,
  USER_REQUESTING,
  USER_FAILURE,
  USER_SUCCESS,
} from '../action';

const appConfig = config.get('app');
const { backendBaseURL } = appConfig;
axios.defaults.adapter = httpAdapter;

const mockStore = configureMockStore([thunk]);

describe('fetch user data', () => {
  const userId = 'test';
  const response = {
    name: 'Welly',
    phone: '007',
    email: 'test@gmail.com',
    website: 'www.test.com',
  };
  const errorMessage = 'Oops! Something went wrong.';

  afterEach(() => { nock.disableNetConnect(); });

  test('creates USER_SUCCESS when fetching user has been done', () => {
    expect.assertions(1);
    nock(backendBaseURL)
      .get(/.*/)
      .reply(200, response);

    const expectedActions = [
      { type: USER_REQUESTING, userId },
      { type: USER_SUCCESS, userId, data: response },
    ];
    const store = mockStore({ info: null, config: {} });

    return store.dispatch(fetchUser(userId, axios, '/none'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  test('creates USER_FAILURE when fail to fetch user', () => {
    expect.assertions(1);
    nock(backendBaseURL)
      .get(/.*/)
      .replyWithError(errorMessage);

    const expectedActions = [
      { type: USER_REQUESTING, userId },
      { type: USER_FAILURE, userId, err: new Error([errorMessage]) },
    ];
    const store = mockStore({ err: null, config: {} });

    return store.dispatch(fetchUser(userId, axios, '/none'))
      .then(() => { expect(store.getActions()).toEqual(expectedActions); });
  });
});
