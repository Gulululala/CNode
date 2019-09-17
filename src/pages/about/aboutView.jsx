import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './aboutStyle.less'
import { Row, Col, Breadcrumb } from 'antd'
import SideBar from '@/components/SideBar'
import Link from 'umi/link'

// const namespace = 'about'

@connect(({ about }) => ({
  about,
}))

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.container}>
        <Row gutter={16}>
          <Col span={19}>
            <div className={styles.content}>
              <div className={styles.header}>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to="/home" style={{color: '#80bd01'}}>主页</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item style={{color: '#999'}}>关于</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="text">
                <h2>关于</h2>
                <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                <p>社区目前由
                  <a href="http://cnodejs.org/user/alsotang" target="_blank" rel="noopener noreferrer">@alsotang</a>
                  <span>在维护，有问题请联系：</span>
                  <a href="https://github.com/alsotang" target="_blank" rel="noopener noreferrer">https://github.com/alsotang</a>
                </p>
                <p>
                  <span>请关注我们的官方微博：</span>
                  <a href="http://weibo.com/cnodejs" target="_blank" rel="noopener noreferrer">
                    http://weibo.com/cnodejs
                  </a>
                </p>
                <h2>移动客户端</h2>
                <p>
                  <span>客户端由 </span>
                  <a href="https://cnodejs.org/user/soliury" target="_blank" rel="noopener noreferrer">@soliury</a>
                  <span>开发维护。</span>
                </p>
                <p>源码地址：
                  <a href="https://github.com/soliury/noder-react-native" target="_blank" rel="noopener noreferrer">
                    https://github.com/soliury/noder-react-native
                  </a>
                  <span>。</span>
                </p>
                <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
                <p>
                  <span>另，安卓用户同时可选择：</span>
                  <a href="https://github.com/TakWolf/CNode-Material-Design"
                     target="_blank" rel="noopener noreferrer"
                  >
                    https://github.com/TakWolf/CNode-Material-Design
                  </a>
                  <span>，这是 Java原生开发的安卓客户端。</span>
                </p>
                <h2>友情链接</h2>
                <a href="https://www.huoban.com/" target="_blank" rel="noopener noreferrer">
                  <img src="//static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx" alt="link1" width="250px" />
                </a>
                <a href="http://100offer.com/" target="_blank" rel="noopener noreferrer">
                  <img src="//static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq" alt="link2" width="250px" />
                </a>
                <a href="https://www.teambition.com/" target="_blank" rel="noopener noreferrer">
                  <img src="//static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" alt="link3" width="250px" />
                </a>
                <a href="http://yunzhihui.com/" target="_blank" rel="noopener noreferrer">
                  <img src="//static.cnodejs.org/Fq2cV_14IFHwelZ-6jey42Z0-eOR" alt="link4" width="250px" />
                </a>
                <a href="http://www.jiguang.cn/" target="_blank" rel="noopener noreferrer">
                  <img src="//static.cnodejs.org/FijGJbij9GObh5AXw-Vyu5LGn08a" alt="link5" width="250px" />
                </a>
                <a href="http://segmentfault.com/" target="_blank" rel="noopener noreferrer">
                  <img src="//static2.cnodejs.org/public/images/temp/sf.png" alt="link6" width="250px" />
                </a>
                <a href="http://ionichina.com/" target="_blank" rel="noopener noreferrer">
                  <img src="//static2.cnodejs.org/public/images/temp/ionichina.png" alt="link7" width="250px" />
                </a>
                <h2>LOGO</h2>
                <p>
                  <span>白底： </span>
                  <a href="/public/images/cnodejs.svg" target="_blank" rel="noopener noreferrer">
                    /public/images/cnodejs.svg
                  </a>
                </p>
                <p>
                  <span>黑底： </span>
                  <a href="/public/images/cnodejs_light.svg" target="_blank" rel="noopener noreferrer">
                    /public/images/cnodejs_light.svg
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <SideBar />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About
