import React, { PureComponent } from 'react'
import { connect } from 'dva'
import styles from './homeStyle.less'
import { Row, Col, Pagination, Button, Spin } from 'antd'
import SideBar from '@/components/SideBar'
import blackImg from '@/assets/black.jpg'
import router from 'umi/router'

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
    this.pageChange = this.pageChange.bind(this)
    this.showDetail = this.showDetail.bind(this)
  }

  handleClick(item,index) {
    const { dispatch } = this.props
    console.log(item,index)
    let tab
    switch (item) {
      case "精华":
        tab = "good"
        break;
      case "分享":
        tab = "share"
        break;
      case "问答":
        tab = "ask"
        break;
      default:
        tab = "job"
        break;
    }
    console.log(tab)
    this.setState({
      currentBtn: index
    })
    dispatch({
      type: `${namespace}/getTopicList`,
      payload: {
        tab
      }
    })
  }

  pageChange(page) {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/getTopicList`,
      payload: {
        page
      }
    })
  }

  showDetail(id) {
    router.push({
      pathname: '/detail',
      query: {
        id,
      },
    });
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch({
      type: `${namespace}/getTopicList`
    })
  }

  render() {
    const { homeMod: { topicList, listLoading, detailList} } = this.props
    const { tabList,currentBtn } = this.state
    return (
      <div className={styles.container}>
        <Row gutter={16}>
          <Col span={19}>
            {/* <Spin spinning={listLoading} tip="飞速获取信息中，客官请稍等..."> */}
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
                          <span className={styles.titleStyle} onClick={() => this.showDetail(item.id)}>
                            { item.title }
                          </span>
                          <div className={styles.replyStyle}>
                            {detailList.length===40 && detailList[index].replies[detailList[index].replies.length-1] && <img 
                              src={detailList[index].replies[detailList[index].replies.length-1].author.avatar_url} 
                              title={detailList[index].replies[detailList[index].replies.length-1].author.loginname} 
                              className={styles.replyPeopleImgStyle}
                            >
                            </img>}
                            {detailList.length!==40 || !detailList[index].replies[detailList[index].replies.length-1] && <img 
                              src={blackImg} 
                              title="没有用户评论"
                              className={styles.replyPeopleImgStyle}
                            >
                            </img>}
                            <span className={styles.howDayStyle}>
                                3天前
                            </span>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
                <Pagination
                  defaultCurrent={1}
                  pageSize={40}
                  total={2000}
                  className={styles.pageSplitStyle}
                  onChange={this.pageChange}
                />
              </div>
            {/* </Spin> */}
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
