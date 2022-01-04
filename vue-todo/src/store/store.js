// vue2
// import Vue from 'vue'
// import Vuex from 'vuex'

/* Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    headerText: 'TODO it!',
  }
}); */

// vue3
import { createStore } from 'vuex'
// 모듈화 방법 1
// import * as getters from './getters'
// import * as mutations from './mutations'

// 모듈화 방법 2
import todoApp from './modules/todoApp'

// 모듈화 방법 2로 인해 사용 x
/* const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
} */

export default createStore({
  modules: {
    todoApp
  }

  // 모둘화 방법 2로 인해 사용 x
  /* state: {
    todoItems: storage.fetch(),
  }, */

  // 모듈화 방법 1
  /* getters, //getters: getters,
  mutations //mutations: mutations */

  // 모듈화 방법 1로 인해 파일별로 옮겨서 import함
  /* getters: { // helper함수 이용 - TodoList.vue
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

      // 로컬 스토리지의 데이터 갱신
      // completed의 값을 변경 후 아이템을 지웠다가 동일하게 세팅한다. (업데이트 기능이 없기 때문에)
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }, */
});


