import { useState, useEffect } from 'react'
import styles from './Todos.module.css'
import { URL_TODOS } from './constants/constants'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch(URL_TODOS)
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => setTodos(loadedTodos))
  })

  return (
    <div className={styles.todos}>
      {todos.map(({ id, title }) => (
        <div className={styles.item} key={id}>
          {id}. {title}
        </div>
      ))}
    </div>
  )
}

export default App
