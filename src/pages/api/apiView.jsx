import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './apiStyle.less'
import { Row, Col, Breadcrumb } from 'antd'
import SideBar from '@/components/SideBar'
import Link from 'umi/link'


// const namespace = 'api'

@connect(({ api }) => ({
  api,
}))

class Api extends PureComponent {
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
                  <Breadcrumb.Item style={{color: '#999'}}>API</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="text">
                <p>
                  <span>以下 api 路径均以 </span>
                  <strong>
                    <a href="https://cnodejs.org/api/v1" target="_blank" rel="noopener noreferrer">
                      https://cnodejs.org/api/v1
                    </a>
                  </strong>
                  <span>为前缀</span>
                </p>
                <p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
                <h2>主题</h2>
                <h4>get /topics 主题首页</h4>
                <p>接收 get 参数</p>
                <ul>
                  <li>
                    <span>page</span>
                    <code>Number</code>
                    <span>页数</span>
                  </li>
                  <li>tab
                    <code>String</code>
                    <span>主题分类。目前有</span>
                    <code>ask</code>
                    <code>share</code>
                    <code>job</code>
                    <code>good</code>
                  </li>
                  <li>
                    <span>limit</span>
                    <code>Number</code>
                    <span>每一页的主题数量</span>
                  </li>
                  <li>
                    <span>mdrender</span>
                    <code>String</code>
                    <span>当为</span>
                    <code>false</code>
                    <span>时，不渲染。默认为</span>
                    <code>true</code>
                    <span>，渲染出现的所有 markdown 格式文本。</span>
                  </li>
                </ul>
                <p>
                  <span>示例：</span>
                  <a href="/api/v1/topics" target="_blank" rel="noopener noreferrer">/api/v1/topics</a>
                </p>
                <h4>get /topic/:id 主题详情</h4>
                <p>接收 get 参数</p>
                <ul>
                  <li>
                    <span>mdrender</span>
                    <code>String</code>
                    <span>当为</span>
                    <code>false</code>
                    <span>时，不渲染。默认为</span>
                    <code>true</code>
                    <span>，渲染出现的所有 markdown 格式文本。</span>
                  </li>
                  <li>accesstoken
                    <code>String</code>
                    <span>当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的</span>
                    <code>is_collect</code>
                    <span>以及</span>
                    <code>replies</code>
                    <span>列表中的</span>
                    <code>is_uped</code>
                    <span>值。</span>
                  </li>
                </ul>
                <p>
                  <span>示例：</span>
                  <a href="/api/v1/topic/5433d5e4e737cbe96dcef312" target="_blank" rel="noopener noreferrer">
                    /api/v1/topic/5433d5e4e737cbe96dcef312
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

export default Api
