<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" 
        v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>

        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1); // index 1개를 지우겠다
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;

      // 로컬 스토리지의 데이터 갱신
      // completed의 값을 변경 후 아이템을 지웠다가 동일하게 세팅한다. (업데이트 기능이 없기 때문에)
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
  // 인스턴스가 생성 되자마자 실행되는 lifecycle
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // this.todoItems.push(localStorage.key(i))
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type:none;
    padding-left:0px;
    margin-top:0;
    text-align:left;
  }
  li {
    display:flex;
    min-height:50px;
    height:50px;
    line-height:50px;
    margin:0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left:auto;
    color:#de4343;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
</style>