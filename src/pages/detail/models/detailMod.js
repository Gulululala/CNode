// 导出的状态机
const Module = {
  namespace: 'detail',

  state: {
  },

  effects: {

  },
  reducers: {
    updateStore(preState, action) {
      return { ...preState, ...action.payload }
    },
  },
}

export default Module
