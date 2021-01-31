import Vue from 'vue';
import Component from 'vue-class-component';

const map: { [key: string]: string } = {

  'tag name duplicated': '标签名重复'
};

@Component
export class TagHelper extends Vue {
  createTag() {
    const tagName = window.prompt('请输入标签名');
    if (!tagName) {return window.alert('标签名不能为空！');}
    this.$store.commit('createTag', tagName);
    if (this.$store.state.createTagError) {
        window.alert(map[this.$store.state.createTagError.message] || '发生未知错误');
    }
  }
}

export default {TagHelper};
