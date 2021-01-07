import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {tagListModel} from '@/models/tagListModel';

Vue.config.productionTip = false;
Vue.use(ElementUI);

window.tagList = tagListModel.fetch();
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名重复，请重新输入');
  } else if (message === 'success') {
    window.alert('标签添加成功');
  }
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
