import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import { Home } from '../Home';

jest.mock('../../../components/UserList', () => 'UserList');

describe('<Home />', () => {
  const tree = (props, actions) => renderer.create(
    <StaticRouter location={''} context={{}}>
      <Home {...props} {...actions} />
    </StaticRouter>,
  ).toJSON();

  test('should call fetchUsersIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      home: {},
    };
    const actions = {
      fetchUsersIfNeeded: mockAction,
    };

    mount(
      <StaticRouter location={''} context={{}}>
        <Home {...props} {...actions} />
      </StaticRouter>,
    );

    expect(mockAction).toHaveBeenCalled();
  });

  test('renders nothing if no data', () => {
    const props = {
      home: { },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the loading status if requesting data', () => {
    const props = {
      home: { loading: true },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders an error if loading failed', () => {
    const props = {
      home: { err: 'some error' },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  test('renders the <UserList /> if loading was successful', () => {
    const props = {
      home: {
        list: [{ id: '1', name: 'Welly' }],
      },
    };
    const actions = { fetchUsersIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
