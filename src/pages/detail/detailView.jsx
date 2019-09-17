import React, { PureComponent } from 'react'
import renderHTML from "react-render-html";
import { connect } from 'dva'
import styles from './detailStyle.less'
import { Row, Col } from 'antd'
import SideBar from '@/components/SideBar'

// const namespace = 'detail'

@connect(({ detail }) => ({
  detail,
}))

class Detail extends PureComponent {

  componentDidMount() {
    const topicId = this.props.location.query.id
    this.props.dispatch({
      type: 'detail/addNews',
      payload: {
        id: topicId
      }
    })
  }

  render() {
    console.log(this.props.detail)
    const {  title, content, author, replies} = this.props.detail.data;
    console.log(author)
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
                      {content}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.panel}>
             
                      <div className={styles.header}>
                        <span className={styles.col_fade}>
                          评论
                        </span>
                      </div>
                { replies && replies.map((item,index)=>{
                    return(
                      <div key={index}>
                        <div className={styles.cell}>
                        <div className={styles.author_connect}>
                          <a href="/user/DoveAz" className={styles.user_a}>
                            <img src={item.author.avatar_url}  title="DoveAz" ></img>
                          </a>
                          <div className={styles.user_info}>
                            <a className={styles.reply_author} href="/user/DoveAz">{item.author.loginname}</a>
                            <a className={styles.reply_time} href="#5d775a04d50f572345913539">1楼•7 天前</a>
                          </div>
                        </div>
                        <div className={styles.reply_connect}>
                          <div className={styles.markdown_text}>
                            <p>{item.content}</p>
                          </div>
                        </div>
                        <div className={styles.clearfix}>
                        </div>
                      </div>
                      </div>
                    )
                  })
                } 
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
                        <img src={author && author.avatar_url} alt="" />
                      </a>
                      <span className={styles.user_name}>
                        {author && author.loginname}
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
