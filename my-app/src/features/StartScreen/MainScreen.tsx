import React from 'react';
import { ReactElement } from 'hoist-non-react-statics/node_modules/@types/react';
import Header from '../Header/Header';
import UserMenu from '../UserMenu/UserMenu';
import styles from './StartScreen.module.scss';

export default function MainScreen(): ReactElement {

  return (
    <div className={styles.startscreen}>
      <Header text={'hi'}/>
      <UserMenu/>
    </div>
  );
}
