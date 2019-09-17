import { queryNews } from "../detailServ"

// 导出的状态机
const Module = {
  namespace: 'detail',

  state: {
    allContent: [],
    data:[],
    replies:[],
    content:'',
    title:'',
    listLoading: false
  },

  effects: {
    *addNews({payload},{call,put}){
      yield put({ type: 'updateStore', payload: { listLoading: true }});
      const result = yield call(queryNews,payload)
      yield put({ type: 'updateStore', payload: { listLoading: false }});
      yield put({
        type:'updateStore',
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
    updateStore(preState, action) {
      return { ...preState, ...action.payload }
    },
  },
}

export default Module
