import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/libs/clone';
import createId from '@/libs/createId';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {//data
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {//methods
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复，请重新输入');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({id: id, name: name});
      store.commit('saveTags');
      window.alert('标签添加成功');
      return 'success';
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    fetchTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      state.recordList.push(record2);
      store.commit('saveRecord');
      console.log(state.recordList);
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
  }
});
export default store;
