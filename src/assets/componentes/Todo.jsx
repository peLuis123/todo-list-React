// import PropTypes from 'prop-types';
const Todo =({todo,deleteTodo,updateTodo}) =>{
    const {descripcion,priority,state,id, title} = todo;
    return(
        <li className='list-group-item'>
            <div className='d-flex justify-content-between align-items-start'>
                <div>
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p>{descripcion}</p>
                    <div className='d-flex gap-2'>
                        <button onClick={()=>deleteTodo(id)} className='btn btn-sm btn-danger'>eliminar</button>
                        <button onClick={()=>updateTodo(id)} className='btn btn-sm btn-warning'>actualizar</button>
                    </div>
                </div>
                <span className='badge text-bg-primary'>{priority && 'prioritario'}</span>
            </div>
        </li>
    )
}
// Todo.propTypes = {
//     todo: PropTypes.object.isRequired,
//   }
export default Todo