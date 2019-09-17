import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './registerStyle.less'
import { Row, Col, Breadcrumb } from 'antd'
import SideBar from '@/components/SideBar'
import Link from 'umi/link'

// const namespace = 'register'

@connect(({ registerMod }) => ({
  registerMod,
}))

class Register extends PureComponent {
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
                  <Breadcrumb.Item style={{color: '#999'}}>注册</Breadcrumb.Item>
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

export default Register
