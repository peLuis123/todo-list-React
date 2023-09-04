import { useState } from "react";
// import PropTypes from 'prop-types';
import Swal from "sweetalert2";
const Formulario = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    descripcion: "",
    estate: "",
    priority: "",
  });
  const { title, descripcion, estate, priority } = todo;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !descripcion.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'titulo y descripcion obligatorios',
      })
    }
    else{
      addTodo({
        id: Date.now(),
        ...todo,
        state: estate ==='completado',
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'todo agregado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulario Formulario</h1>
      <input
        name="title"
        type="text"
        placeholder="ingrese todo"
        className="form-control mb-2"
        value={title}
        onChange={handleChange}
      ></input>
      <textarea
        name="descripcion"
        className="form-control mb-2"
        placeholder="ingrese descripcion"
        value={descripcion}
        onChange={handleChange}
      ></textarea>
      <div className="form-check">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">dar prioridad</label>
      </div>
      <select
        className="form-select mb-2"
        name="estate"
        value={estate}
        onChange={handleChange}
      >
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
// Formulario.propTypes = {
//   addTodo: PropTypes.array.isRequired,
// }

export default Formulario;
