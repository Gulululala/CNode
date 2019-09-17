import { getList, getDetailList } from '../homeServ'

// 导出的状态机
const Module = {
  namespace: 'homeMod',

  state: {
    topicList: [],
    detailList: []
  },

  effects: {
    * getTopicList({ payload={page:1,tab:''} }, { put, call, select }) {
      const res = yield call(getList, payload);
      if (res.data.success) {
        yield put({
          type: 'updateStore',
          payload: {
            topicList: res.data.data
          }
        });
        const { topicList, detailList } = yield select(d => d[Module.namespace]);
        detailList.splice(0,detailList.length)
        // yield put({
        //   type: 'updateStore',
        //   payload: {
        //     detailList: []
        //   }
        // });
        console.log("-------点击分页按钮-------")
        console.log("第一次打印detailList")
        console.log("detailList",detailList)
        console.log("topicList",topicList)
        for (var i = 0; i < topicList.length; i++) {
          const detailRes = yield call(getDetailList, topicList[i]);
          detailList.push(detailRes.data.data)
        }
        console.log("这是在effects里面的detailList")
        console.log("第二次打印detailList")
        console.log(detailList)
        yield put({
          type: 'updateStore',
          payload: {
            detailList: detailList
          }
        });

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
