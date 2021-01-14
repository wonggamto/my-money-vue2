import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/libs/clone';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {//data
    recordList: [] as RecordItem[]
  },
  mutations: {//methods
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      state.recordList.push(record2);
      store.commit('saveRecord')
      console.log(state.recordList);
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
  }
});
export default store;
