import Vue from 'vue'
import Vuex from 'vuex'

import todoApp from './modules/todoApp'

Vue.use(Vuex); // use : Vue의 플러그인 기능. 


export const store = new Vuex.Store({
    modules: {
        todoApp
    }
    // state: {
    //     todoItems: storage.fetch(),
    // },
    // getters,
    // getters: {
    //     storedTodoItems(state) {
    //         return state.todoItems;
    //     }
    // },
    // mutations
    // mutations: {
    //     addOneItem(state, todoItem) {
    //         const obj = { completed: false, item: todoItem };
    //         localStorage.setItem(todoItem, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //     },

    //     removeOneItem(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);
    //     },

    //     toggleOneItem(state, payload) {
    //         // todoItem.completed = !todoItem.completed;
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //     },

    //     clearAllItems(state) {
    //         localStorage.clear();
    //         state.todoItems = [];
    //     },

    // }
});