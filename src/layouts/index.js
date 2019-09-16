import styles from './index.css';
import React from 'react';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.header}>Header</h1>
      <div className={styles.main}>
        {props.children}
      </div>
      <h1 className={styles.footer}>Footer</h1>
    </div>
  );
}

export default BasicLayout;
