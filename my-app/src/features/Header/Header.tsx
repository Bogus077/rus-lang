import { ReactElement } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';
import { headerProps } from '../lib/interfaces';
import styles from './Header.module.scss';

export default function Header(props: headerProps): ReactElement {
  const headerText = props.text;

  return(
    <div className={styles.header}>
      {headerText}
    </div>
  );
}