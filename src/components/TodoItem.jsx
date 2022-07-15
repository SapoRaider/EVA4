import React, { Fragment } from "react";
//item en la lista
export function TodoItem({ todo, eliminar}) {
  const { id, task, desc, imp} = todo;

  const importante = () =>{
    if (imp) {
      const im = "importante"
      return im
    }
  };

  return (
    <Fragment>
      <li >
        <a href="#" className={importante()}>
          <button type="button" class="botonX" onClick={() => eliminar(id)}>
            X
          </button>
          <h2>{todo.task}</h2>
          <p>{todo.desc}</p>
        </a>
      </li>
    </Fragment>
  );
}
