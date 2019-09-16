import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './apiStyle.less'
import { Row, Col } from 'antd'

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
              Write api content here！！！
            </div>
          </Col>
          <Col span={5}>
            <div className={styles.sidebar}>
              side
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Api
