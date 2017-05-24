/* @flow */

import React from 'react';
import Helmet from 'react-helmet';

import styles from './NotFound.scss';

export default () => (
  <div className={styles.NotFound}>
    <Helmet title="404" />
    <p>Oops, Page was not found!</p>
  </div>
);
