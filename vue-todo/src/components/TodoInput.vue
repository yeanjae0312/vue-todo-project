<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <transition name="modal">
      <Modal v-if="showModal" @close="showModal = false">
        <template v-slot:header>
        <h3>경고! <i class="closeModalBtn fas fa-times" @click="showModal = false"></i></h3>
        </template>
        <template v-slot:body><div>아무것도 입력하지 않으셨습니다.</div></template>
        <template v-slot:footer><div>copy right</div></template>
      </Modal>
    </transition>

  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  // vue data 선언
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      // 저장하는 로직
      if(this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem); // vuex 뮤테이션 동작

        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    // Modal: Modal,
    Modal
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background:white;
    height:50px;
    line-height:50px;
    border-radius:5px;
  }
  .inputBox input {
    border-style:none;
    font-size:0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display:block;
    width:3rem;
    border-radius:0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align:middle;
  }
  .closeModalBtn {
    color: #42b983;
    cursor:pointer;
  }
</style>