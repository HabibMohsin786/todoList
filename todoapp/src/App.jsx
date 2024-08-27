import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './assets/componet/TodoList'

function App() {
  const [count, setCount] = useState(0)
  const [todoText, setTodoText] = useState()
  const [todoList, setTodoList] = useState([])


  const addItems = () => {
    count + 1;

    let newTodo = {
      id: count,
      item: todoText,
      done: false,
    }

    setCount(count)
    setTodoList([...todoList, newTodo])
    setTodoText('')
  }

  const handleListStatus = (itemId) => {
    let newList = todoList.map((listItem) => {
      if (listItem.id === itemId) { return { ...listItem, done: true } }
      return listItem
    }
  )

    setTodoList(newList)
  }

  console.log(todoList);
  
  return (
    <>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>
          <div className="flex mb-4 gap-3">
            <input
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
              type="text"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a new todo"

            />
            <button
              onClick={addItems}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

            >
              Add
            </button>
          </div>
          <TodoList todoList={todoList}  handleToggle={handleListStatus}/>
        </div>
      </div>
    </>
  )
}

export default App
