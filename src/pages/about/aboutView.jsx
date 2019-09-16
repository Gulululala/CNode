import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './aboutStyle.less'
import { Row, Col } from 'antd'

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
              Write about content here！！！
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

export default About
