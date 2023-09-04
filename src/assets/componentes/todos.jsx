// import PropTypes from 'prop-types';
import Todo from './Todo';
const Todos = ({ todos,deleteTodo,updateTodo }) => {
    // console.log("desde todoos.jsx", {todos})
  return (
    <div className="mt-5">
      <h2 className="text-center">los todos</h2>
      <ul className='list-group'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo = {todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
          // <li  key={todo.id}>{todo.title}</li>
        ))}
        {
          todos.length==0 && <li className='list-group-item text-center'>sin todos</li>
        }
      </ul>

    </div>
  );
};
//esta parte no esta en el curso pero segun lo que entiendo ayuda a quitar el error de los props diciendole que es requerido
//aun falta verificar un forma de hacer que en caso no se esten enviando los props este componente no aparezca en lguar de que bote error a todo el codigo
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired,
//   }
export default Todos;
