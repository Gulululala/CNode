import { getList, getDetailList } from '../homeServ'

// 导出的状态机
const Module = {
  namespace: 'homeMod',

  state: {
    topicList: [],
    detailList: []
  },

  effects: {
    * getTopicList({ payload = { pageSize: 50, currentPage: 1 }, callback }, { put, call, select }) {
      const res = yield call(getList, payload);
      if (res.data.success) {
        // const { topicList} = yield select(d => d[Module.namespace]); 
        // console.log(topicList)
        yield put({
          type: 'updateStore',
          payload: {
            topicList: res.data.data
          }
        });
        const { topicList } = yield select(d => d[Module.namespace]);
        console.log('----------------------')
        console.log(topicList);
        console.log('----------------------')

        for (var i = 0; i < topicList.length; i++) {
          const detailRes = yield call(getDetailList, topicList[i]);
          console.log('-------------------')
          console.log(detailRes)
          console.log('-------------------')
        }

        // yield put({
        //   type: `getDetailList`,
        //   payload: {id:topicList[0].id}
        // })
        // for (var i = 0; i < topicList.length; i++) {
        //   yield put({
        //     type: `getDetailList`,
        //     payload: { id: topicList[i].id }
        //   })
          // console.log(i,"执行完了")
          // const { detailList } = yield select(d => d[Module.namespace]);
          // console.log('----------------------')
          // console.log(detailList)
          // console.log('----------------------')
        // }
        // 会打印不出东西来
        // topicList.forEach((item,index)=>{
        //   // put({
        //   //   type: `getDetailList`,
        //   //   payload: {id:item.id}
        //   // })
        // })
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
        // console.log("getDetailList执行完了")
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
