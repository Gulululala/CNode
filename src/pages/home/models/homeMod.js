// 导出的状态机
const Module = {
  namespace: 'homeMod',

  state: {
  },

  effects: {

  },
  reducers: {
    updateStore(preState, action) {
      return { ...preState, ...action.payload };
    },
  },
};

export default Module;
