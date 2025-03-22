import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const nextId = ref(1)

  const uncompletedTodos = computed(() => 
    todos.value.filter(todo => !todo.completed)
  )

  const completedTodos = computed(() => 
    todos.value.filter(todo => todo.completed)
  )

  function addTodo(title: string) {
    if (title.trim()) {
      todos.value.push({
        id: nextId.value++,
        title: title.trim(),
        completed: false
      })
    }
  }

  function removeTodo(id: number) {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
    }
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  function clearCompleted() {
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  return {
    todos,
    uncompletedTodos,
    completedTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    clearCompleted
  }
}) 