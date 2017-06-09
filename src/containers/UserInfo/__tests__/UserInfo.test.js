import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import { UserInfo } from '../UserInfo';

jest.mock('../../../components/UserCard', () => 'UserCard');

describe('<UserInfo />', () => {
  const tree = (props, actions) => renderer.create(
    <StaticRouter location={''} context={{}}>
      <UserInfo {...props} {...actions} />
    </StaticRouter>,
  ).toJSON();

  test('should call fetchUserIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      userInfo: {},
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: mockAction };

    mount(
      <StaticRouter location={''} context={{}}>
        <UserInfo {...props} {...actions} />
      </StaticRouter>,
    );

    expect(mockAction).toHaveBeenCalled();
  });

  test('renders nothing if no data', () => {
    const props = {
      userInfo: {},
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the loading status while requesting data', () => {
    const props = {
      userInfo: { 1: { loading: true } },
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders an error if loading failed', () => {
    const props = {
      userInfo: { 1: { err: 'some error' } },
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the <UserCard /> if loading was successful', () => {
    const props = {
      userInfo: {
        1: {
          info: {
            name: 'Welly',
            phone: '007',
            email: 'test@gmail.com',
            website: 'www.test.com',
          },
        },
      },
      match: { params: { id: 1 } },
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
