import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './homeStyle.less'
import { Row, Col, Pagination, Button } from 'antd'
import { dispatch } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/range';
import SideBar from '@/components/SideBar'

const namespace = 'homeMod'

@connect(({ homeMod }) => ({
  homeMod,
}))

class HomeView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabList: ['全部','精华','分享','问答','招聘','客户端测试'],
      currentBtn: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(item,index) {
    this.setState({
      currentBtn: index
    })
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/getTopicList`
    })
  }

  render() {
    const { dispatch, homeMod: { topicList} } = this.props
    const { tabList,currentBtn } = this.state
    return (
      <div className={styles.container}>
        <Row gutter={16}>
          <Col span={19}>
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                {
                  tabList.map((item,index)=>{
                    return <Button 
                            type='link' 
                            onClick={()=>{this.handleClick(item,index)}} 
                            key={item} 
                            className={index===currentBtn?styles.contentCurrentBtn:styles.contentBtn}
                          >
                            {item}
                          </Button>
                  })
                }
              </div>
              <ul className={styles.uLStyle}>
                {
                    topicList.map((item,index)=>{
                      return (
                        <li className={styles.liStyle} key={item.id}>
                          <img 
                            src={item.author.avatar_url} 
                            title={item.author.loginname} 
                            className={styles.imgStyle}
                          >
                          </img>
                          <span className={styles.visitStyle}>
                            {item.reply_count}/{item.visit_count}
                          </span>
                          <span className={item.top?styles.topStyle:styles.typeStyle}>
                            { item.top ? "置顶" : item.tab==="share" ? "分享" : "问答" }
                          </span>
                          <span className={styles.titleStyle}>
                            { item.title }
                          </span>
                          <div className={styles.replyStyle}>
                            {/* <img 
                              src={detailList.replies[(detailList.replies.length-1)].author.avatar_url} 
                              title={detailList.replies[(detailList.replies.length-1)].author.loginname} 
                              className={styles.replyPeopleImgStyle}
                            >
                            </img> */}
                            <span className={styles.howDayStyle}>
                                3天前
                            </span>
                          </div>
                        </li>
                      )
                    })
                }
              </ul>
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

export default HomeView
