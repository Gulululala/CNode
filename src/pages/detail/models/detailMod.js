// 导出的状态机
import * as query from "../detailServ"

const Module = {
  namespace: 'detail',

  state: {
    allContent: [],
    data:[],
    replies:[],
    content:'',
    title:''
  },

  effects: {
    *addNews({payload},{call,put}){
      const result = yield call(query.queryNews)
      console.log("我是结果",result)
      yield put({
        type:'updateState',
        payload:{
          allContent:result,
          data:result.data,
          content:result.data.content,
          title:result.data.title,
          replies:result.data.replies
        }

      })
    }

  },
  reducers: {
    updateState(preState, action) {
      return { ...preState, ...action.payload }
    },
  },
}

export default Module
