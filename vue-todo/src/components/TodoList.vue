<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}" 
        v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>

        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex' // helper함수

export default {
  // props: ['propsdata'], // vuex 사용으로 props사용X
  methods: {
    // helper함수 사용으로 인해 사용 x
    /* removeTodo(todoItem, index) {
      // this.$emit('removeItem', todoItem, index);
      // this.$store.commit('removeOneItem', {todoItem, index}); // vuex
    }, */
    /* toggleComplete(todoItem, index) {
      // this.$emit('toggleItem', todoItem, index);
      // this.$store.commit('toggleOneItem', {todoItem, index}); // vuex
    }, */
    ...mapMutations({
      removeTodo: 'removeOneItem', // 여기서 인자를 선언하지 않아도 template단에서 넘겨주면 받을 수 있다.
      toggleComplete: 'toggleOneItem'
    }),
    
  },
  computed: {
    /* todoItems() {
      return this.$store.getters.storedTodoItems;
    } */

    ...mapGetters(['storedTodoItems'])
    /* ...mapGetters({
      todoItems: 'storedTodoItems', // v-for에 this.todoItems로 선언할 수 있음
    }) */
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

  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>