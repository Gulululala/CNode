import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './detailStyle.less'
import { Row, Col } from 'antd'

// const namespace = 'detail'

@connect(({ detail }) => ({
  detail,
}))

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'detail/addNews'
    })
  }

  render() {
    console.log(this.props.detail)
    const {  title} = this.props.detail
    return (
      <div className={styles.container}>
        <Row gutter={16}>
          <Col span={19}>
            <div className={styles.content}>
              <div className={styles.panel}>
                <div className={styles.header}>
                  <span className={styles.topic_full_title}>
                 { title }
                  </span> 
                  <div className={styles.changes}>
                    <span>·发布于 4 天前</span>
                    <span>·作者</span>
                    <span>·343次浏览</span>
                    <span>·最后一次编辑</span>
                    <span>·来自问答</span>
                  </div>
                </div>
                <div className={styles.inner}>
                  <div className={styles.topic_content}>
                    <div className={styles.markdown_text}>
                      <p>最近网站想换服务器，目前主要纠结linode,digitalocean,aws lightsail
linode和digitalocean不相上下，但linode老牌，digitalocean后劲很足，但有删除帐号的先例，有点怕，
aws lightsail是aws的vps，普遍说性能不怎么地，不支持ipv6（苹果ios审核要求服务器支持ipv6）</p>
                      <p>另外我看了下cnodejs.org域名换服务器相关的帖子，发现5年前最早是用linode,然后换到digitalocean（中间出现过服务器停机半天），最近一年后换到aws lightsail，有点纠结了，不确定哪家好，主要是考虑稳定性和速度的问题，希望大佬能给个建议，谢谢！</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.panel}>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <div className={styles.sidebar}>
              <div className={styles.panel}>
                <div className={styles.sidebar_header}>
                  <span >作者</span>
                </div>
                <div className={styles.sidebar_inner}>
                  <div className={styles.user_card}>
                    <div>
                      <a className={styles.user_avatar} href="/user/llydd">
                        <img src="https://avatars0.githubusercontent.com/u/25981396?v=4&s=120" alt="" />
                      </a>
                      <span className={styles.user_name}>
                        llydd
                      </span>
                      <div className={styles.user_board}>
                        <div className={styles.user_floor}>
                        <span className={styles.user_big}>
                         积分:15
                        </span>
                        </div>
                      </div>
                      <div className={styles.user_space}>
                        <span className={styles.user_signature}>
                        "这家伙很懒，个性签名都没有留下。"
                        </span>
                      </div>
                   

                      
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.panel}>
                <div className={styles.sidebar_inner}>
                  <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" rel='noreferrer noopener' class="banner sponsor_outlink" data-label="alinode">
                   <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" />
                  </a>
                  <div className={styles.sep10}></div>
                  <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" rel='noreferrer noopener' class="banner sponsor_outlink" data-label="alinode">
                   <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt="" />
                  </a>
                  <div className={styles.sep10}></div>
                  <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" rel='noreferrer noopener' class="banner sponsor_outlink" data-label="alinode">
                   <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" />
                  </a>
                </div>
              </div>
              <div className={styles.panel}></div>
              <div className={styles.panel}></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Detail
