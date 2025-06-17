import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to Gym From 7-9"
  }])

function addTodo(){
  setTodos([...todos,{
    title: "new todo",
    description: "new description"
  }])
}

  return (  
    <>
      <div>

        <button onClick={addTodo}>
          Add a todo
        </button>
        {
          todos.map((todo) => {
            return <Todo title = {todo.title} description={todo.description}/>
          })
        }
      </div>
    </>
  )
}

function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <h4>{props.description}</h4>
  </div>
}

export default App
