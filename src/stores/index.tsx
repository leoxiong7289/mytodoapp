import { observable, action } from 'mobx';

interface item {
  periodicity: any;
  priority: string;
  category: string;
  createTime: any;
  todoItem: any;
}

class Store {
  @observable item: item[] = [];

  @action.bound
  createNewItem(inputContent: any) {
    let temp = {
      periodicity: '',
      priority: '',
      category: '',
      createTime: new Date().getTime(),
      todoItem: inputContent
    };
    this.item.push(temp);
    console.log(temp);
    console.log(this.item);
  }
}

const store = new Store();

export default store;
