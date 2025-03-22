<template>
  <div class="todo-container">
    <h2 class="todo-title">待办事项</h2>
    
    <div class="todo-form">
      <input 
        v-model="newTodo" 
        @keyup.enter="addNewTodo"
        placeholder="添加新任务" 
        class="todo-input"
      />
      <button @click="addNewTodo" class="todo-add-btn">添加</button>
    </div>
    
    <div v-if="todoStore.todos.length === 0" class="todo-empty">
      没有待办事项，请添加新任务
    </div>
    
    <div v-else>
      <h3 class="todo-section-title">未完成 ({{ todoStore.uncompletedTodos.length }})</h3>
      <ul class="todo-list">
        <li v-for="todo in todoStore.uncompletedTodos" :key="todo.id" class="todo-item">
          <input 
            type="checkbox" 
            :checked="todo.completed" 
            @change="todoStore.toggleTodo(todo.id)"
            class="todo-checkbox"
          />
          <span class="todo-text">{{ todo.title }}</span>
          <button @click="todoStore.removeTodo(todo.id)" class="todo-delete-btn">删除</button>
        </li>
      </ul>
      
      <h3 v-if="todoStore.completedTodos.length > 0" class="todo-section-title">
        已完成 ({{ todoStore.completedTodos.length }})
      </h3>
      <ul v-if="todoStore.completedTodos.length > 0" class="todo-list">
        <li v-for="todo in todoStore.completedTodos" :key="todo.id" class="todo-item todo-completed">
          <input 
            type="checkbox" 
            :checked="todo.completed" 
            @change="todoStore.toggleTodo(todo.id)"
            class="todo-checkbox"
          />
          <span class="todo-text">{{ todo.title }}</span>
          <button @click="todoStore.removeTodo(todo.id)" class="todo-delete-btn">删除</button>
        </li>
      </ul>
      
      <div v-if="todoStore.completedTodos.length > 0" class="todo-clear">
        <button @click="todoStore.clearCompleted" class="todo-clear-btn">
          清除已完成
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo'

const todoStore = useTodoStore()
const newTodo = ref('')

function addNewTodo() {
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.todo-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 2rem;
}

.todo-form {
  display: flex;
  margin-bottom: 2rem;
}

.todo-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.todo-add-btn {
  padding: 0.75rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
}

.todo-add-btn:hover {
  background-color: #357abd;
}

.todo-section-title {
  margin: 1.5rem 0 0.5rem;
  color: #555;
  font-size: 1.2rem;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

.todo-checkbox {
  margin-right: 1rem;
  width: 18px;
  height: 18px;
}

.todo-text {
  flex: 1;
  font-size: 1rem;
}

.todo-delete-btn {
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  font-size: 0.85rem;
}

.todo-delete-btn:hover {
  background-color: #ff5252;
}

.todo-completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.todo-empty {
  text-align: center;
  padding: 2rem;
  color: #999;
}

.todo-clear {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.todo-clear-btn {
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.todo-clear-btn:hover {
  background-color: #5a6268;
}
</style> 