import clone from '@/libs/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[] | undefined,
  fetchRecords() {
      this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
      return this.recordList;
  },
  saveRecord() {
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecord();
  },
};
recordStore.fetchRecords();
export {recordStore};
