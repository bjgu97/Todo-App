<template>
  <div id="app">
    <TodoHeader> </TodoHeader>
    <TodoInput> </TodoInput>
    <TodoList> </TodoList>
    <TodoFooter> </TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  methods: {
    // store.js로 옮기기.
    // addOneItem(todoItem) {
    //   // var obj = { completed: false, item: todoItem }; // 체크여뷰 (불린값) + 할일
    //   const obj = { completed: false, item: todoItem };
    //   localStorage.setItem(todoItem, JSON.stringify(obj)); // 객체를 string으로 변환
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item); // onject가 아닌 key값으로 접그해서 지우기
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem, index);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         this.todoItems.push(
  //           JSON.parse(localStorage.getItem(localStorage.key(i)))
  //         );
  //       }
  //     }
  //   }
  // },

  components: {
    // [컴포넌트 태그명] : [컴포넌트 내용]
    // TodoHeader: TodoHeader,
    // TodoInput: TodoInput,
    // TodoList: TodoList,
    // TodoFooter: TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 400px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rbga(0, 0, 0, 0.5);
}
</style>
