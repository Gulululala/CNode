import styles from './index.less';
import React from 'react';

function SideBar() {

  return (
    <div className={styles.sideBar}>
      <div className={styles.panel}>
        <div className={styles.inner}>
          <p>CNode：Node.js专业中文社区</p>
          <div>
            <span>您可以</span>
            <a href="/">登录</a>
            <span>或</span>
            <a href="/">注册</a>
            <span>, 也可以</span>
          </div>
          <a href="/" className={styles.login}>通过GitHub登录</a>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.inner}>
          <a
            href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc_540_130&amp;utm_campaign=huodong&amp;utm_content=gift&amp;ytag=cnodejs"
            target="_blank" rel="noopener noreferrer"
          >
            <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="广告1" className={styles.ad}/>
          </a>
          <div className={styles.sep10} />
          <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank" rel="noopener noreferrer">
            <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt="广告2" className={styles.ad}/>
          </a>
          <div className={styles.sep10} />
          <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" rel="noopener noreferrer">
            <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="广告3" className={styles.ad}/>
          </a>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.header}>友情社区</div>
        <div className={styles.inner}>
          <a
            href="https://ruby-china.org/" target="_blank" rel="noopener noreferrer"
          >
            <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="社区1" className={styles.community}/>
          </a>
          <div className={styles.sep10} />
          <a
            href="http://golangtc.com/" target="_blank" rel="noopener noreferrer"
          >
            <img src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt="社区2" className={styles.community}/>
          </a>
          <div className={styles.sep10} />
          <a
            href="http://phphub.org/" target="_blank" rel="noopener noreferrer"
          >
            <img src="//static2.cnodejs.org/public/images/phphub-logo.png" alt="社区3" className={styles.community}/>
          </a>
          <div className={styles.sep10} />
          <a
            href="https://testerhome.com/" target="_blank" rel="noopener noreferrer"
          >
            <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="社区4" className={styles.community}/>
          </a>
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.header}>客户端二维码</div>
        <div className={styles.inner} style={{textAlign: 'center'}}>
          <img width="200" src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="二维码" />
          <br />
          <a href="https://github.com/soliury/noder-react-native" target="_blank" rel="noopener noreferrer">客户端源码地址</a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
