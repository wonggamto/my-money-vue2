type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
  createRecordError: Error | null;
}
type RecordItem = {
  tags: Tag[];
  notes: string;
  output: string;
  type: string;
  createAt?: string;
  amount: number;

}
type Tag = {
  id: string;
  name: string;
}
