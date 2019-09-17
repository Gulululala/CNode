import { queryNews } from "../detailServ"

// 导出的状态机
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
      const result = yield call(queryNews,payload)
      yield put({
        type:'updateState',
        payload:{
          allContent:result,
          data:result.data.data,
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
