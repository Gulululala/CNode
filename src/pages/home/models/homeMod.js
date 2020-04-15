import { getList, getDetailList } from '../homeServ'

// 导出的状态机
const Module = {
  namespace: 'homeMod',

  state: {
    topicList: [],
    detailList: [],
    listLoading: false
  },

  effects: {
    * getTopicList({ payload={page:1,tab:''} }, { put, call, select }) {
      yield put({ type: 'updateStore', payload: { listLoading: true }});
      const res = yield call(getList, payload);
      yield put({ type: 'updateStore', payload: { listLoading: false }});
      if (res.data.success) {
        yield put({
          type: 'updateStore',
          payload: {
            topicList: res.data.data
          }
        });
        // const { topicList, detailList } = yield select(d => d[Module.namespace]);
        // detailList.splice(0,detailList.length)
        // for (var i = 0; i < topicList.length; i++) {
        //   const detailRes = yield call(getDetailList, topicList[i]);
        //   detailList.push(detailRes.data.data)
        // }
        //

        // yield put({
        //   type: 'updateStore',
        //   payload: {
        //     detailList: detailList
        //   }
        // });
      }
    },

    * getDetailList({ payload, callback }, { put, call, select }) {
      const res = yield call(getDetailList, payload);
      if (res.data.success) {
        yield put({
          type: 'updateStore',
          payload: {
            detailList: res.data.data
          }
        });
      }
    }
  },
  reducers: {
    updateStore(preState, action) {
      return { ...preState, ...action.payload }
    },
  },
}

export default Module
