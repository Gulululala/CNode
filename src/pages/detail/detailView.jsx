import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './detailStyle.less'
import { Row, Col } from 'antd'
import SideBar from '@/components/SideBar'

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
  }

  render() {
    return (
      <div className={styles.container}>
        <Row gutter={16}>
          <Col span={19}>
            <div className={styles.content}>
              Write detail content here！！！
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

export default Detail
