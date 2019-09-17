import styles from './header.less';
import React from 'react';
import Link from 'umi/link';

function Header() {
  const navList = [
    {
      label: '首页',
      path: '/home'
    },
    {
      label: '新手入门',
      path: '/newerGuide'
    },
    {
      label: 'API',
      path: '/api'
    },
    {
      label: '关于',
      path: '/about'
    },
    {
      label: '注册',
      path: '/login'
    },
    {
      label: '登录',
      path: '/login'
    }
  ]
  const navDom = navList.map((item) =>
    <li key={item.label}>
      <Link to={item.path}>{item.label}</Link>
    </li>
  )

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="/" className={styles.brand}>
            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo"/>
          </a>
          <input className={styles.search}/>
        </div>
        <div className={styles.right}>
          <ul className={styles.nav}>{navDom}</ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
