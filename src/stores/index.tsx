import { observable, action } from 'mobx';

interface TodoItem {
  id: number;
  periodicity: any;
  priority: string;
  category: string;
  createTime: any;
  content: any;
}

class Store {
  @observable todos: TodoItem[] = [];

  @action.bound
  createNewItem(value: any) {
    let tempTodo = {
      id: new Date().getTime(),
      periodicity: '',
      priority: '',
      category: '',
      createTime: new Date().getTime(),
      content: value
    };
    this.todos.push(tempTodo);
    console.log(tempTodo);
    console.log(this.todos);
  }

  @action.bound
  deleteItem(id: number) {
    let index = this.todos.findIndex(item => (item.id = id));
    this.todos.splice(index - 1, 1);
  }
}

const store = new Store();

export default store;
