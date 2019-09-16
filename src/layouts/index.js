import styles from './index.css';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Header/>
      <div className={styles.main}>
        {props.children}
      </div>
      <Footer/>
    </div>
  );
}

export default BasicLayout;
