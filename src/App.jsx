import { useEffect,useState } from "react";
import Formulario from "./assets/componentes/formulario";
import Todos from "./assets/componentes/todos";

const initialStateTodos = JSON.parse(localStorage.getItem('todos'))||[];
function App() {
  const [todos, setTodos] = useState(initialStateTodos);
  const addTodo = (todo) => {
    // console.log("este es en app" + todo);
    setTodos([...todos, todo]);
  };
  useEffect(() =>{
    console.log('useEffect')
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  const updateTodo = (id) => {
    // console.log(id)
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo.id + "=" + id);
        todo.state = !todo.state;
      }
      return todo;
    });
    setTodos(newArray);
  };

  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    });
  };
  return (
    <div className="container mb-2">
      <Formulario addTodo={addTodo} />
      <Todos
        orderTodo={orderTodo(todos)}
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
