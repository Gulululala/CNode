import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './loginStyle.less'
import { Row, Col, Breadcrumb } from 'antd'
import SideBar from '@/components/SideBar'
import Link from 'umi/link'

// const namespace = 'login'

@connect(({ login }) => ({
  login,
}))

class Login extends PureComponent {
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
                  <Breadcrumb.Item style={{color: '#999'}}>登录</Breadcrumb.Item>
                </Breadcrumb>
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

export default Login
