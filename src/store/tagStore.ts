const localStorageKeyName = 'tagList';
const tagStore = {
  tagList: [] as Tag[],
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    // console.log(this.tagList);
    return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  // createTag(name: string) {
  //   const names = this.tagList.map(item => item.name);
  //   if (names.indexOf(name) >= 0) {
  //     window.alert('标签名重复，请重新输入');
  //     return 'duplicated';
  //   }
  //   const id = createId().toString();
  //   this.tagList.push({id: id, name: name});
  //   this.saveTags();
  //   window.alert('标签添加成功');
  //   return 'success';
  // },

  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTags();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  saveTags() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  }
};
tagStore.fetchTags();
export {tagStore};
