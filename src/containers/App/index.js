/* @flow */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash';

import routes from '../../routes';
// Import your global styles here
import '../../theme/normalize.css';
import styles from './styles.scss';

const appConfig = {
  htmlAttributes: { lang: 'en' },
  title: 'React Cool Starter',
  titleTemplate: 'React Cool Starter - %s',
  meta: [
    {
      name: 'description',
      content: 'The best react universal starter boilerplate in the world.',
    },
  ],
};

export default () => {
  // Use it when sub routes are added to any route it'll work
  const routeWithSubRoutes = route => (
    <Route
      key={_.uniqueId()}
      exact={route.exact || false}
      path={route.path}
      render={props => (
        // Pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );

  return (
    <div className={styles.App}>
      <Helmet {...appConfig} />
      <div className={styles.header}>
        <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
        <h1>{appConfig.title}</h1>
      </div>
      <hr />
      <Switch>
        {routes.map(route => routeWithSubRoutes(route))}
      </Switch>
    </div>
  );
};
