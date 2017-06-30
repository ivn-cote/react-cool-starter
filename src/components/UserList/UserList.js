import React from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes';

import styles from './UserList.scss';

type Props = { list: Array };

const UserList = ({ list }: Props) => (
  <div className={styles.UserList}>
    <h4>User List</h4>
    <ul>
      {list.map(user => (
        <li key={user.id}>
          <Link to={appRoutes.userInfo.replace(':id', user.id)}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

UserList.defaultProps = {
  list: [{
    id: '',
    name: '',
  }],
};

export default UserList;
