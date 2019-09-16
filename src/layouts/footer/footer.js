import styles from './footer.less';
import React from 'react';
import Link from 'umi/link';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/rss">RSS</Link>
          <span className={styles.divider}>|</span>
          <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
        </div>
        <div className={styles.desc}>
          <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p>
            <span>服务器赞助商为</span>
            <a
              href="http://www.ucloud.cn/?utm_source=zanzhu&amp;utm_campaign=cnodejs&amp;utm_medium=display&amp;utm_content=yejiao&amp;ytag=cnodejs_logo"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud" alt="ucloud" width="92px" />
            </a>
            <span>，存储赞助商为</span>
            <a href="http://www.qiniu.com/?ref=cnode" target="_blank" rel="noopener noreferrer">
              <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储" alt="七牛云存储" width="115px" />
            </a>
            <span> ，由</span>
            <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" rel="noopener noreferrer">
              <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt="alinode" height="54px"
                   width="166px" />
            </a>
            <span>提供应用性能服务。</span>
          </p>
          <p>
            <span>新手搭建 Node.js 服务器，推荐使用无需备案的</span>
            <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
