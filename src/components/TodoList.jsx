import React, { Fragment, useState, useRef } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
//funcion que maneja la lista
const KEY = "todolist-todos";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1",desc:"saasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasd", imp: true},
    { id: 2, task: "Tarea 2", imp: false},
    { id: 3, task: "Tarea 3", imp: true},
    { id: 4, task: "Tarea 4", imp: false},
    { id: 5, task: "Tarea 5", imp: true},
    { id: 6, task: "Tarea 6", imp: true},
    { id: 7, task: "Tarea 7", imp: false},
  ]);

  const taskRef = useRef();
  const descRef = useRef();
  const impRef = useRef();
  
  const hancleCheck = () => {
    if (impRef.current.checked) {
      return true
    } else {
      return false
    };

  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if(savedNotes){
      setTodos(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(todos))
  },[todos]);



  const agregarTarea = () => {
    //para ques se usa current.value?
    const task = taskRef.current.value;
    const desc = descRef.current.value;


    console.log(task);
    //para que utiliza esto??
    if (desc === "") return;

    console.log("Agregando tarea...");

    /* Metodo que esta definido por react para operar los elementos */

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        task: task,
        desc: desc,
        imp: hancleCheck()
      };

      return [...prevTodos, newTask];
    });
    //que hace esto?
    taskRef.current.value = "";
    descRef.current.value = "";

  };



  const eliminarNota = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }



  return (
    <Fragment>
      <h1>Post It Simulator!</h1>
      <div className="input-group my-4">
        <input
          ref={taskRef}
          type="text"
          placeholder="Ingrese una tarea"
          className="form-control"
        />
        <input 
          ref={descRef}
          type="text" 
          placeholder="Descripcion"
          className="form-control"
        />
        <div class="form-check m-2">
          <input class="form-check-input" type="checkbox" value="" id="importante" ref={impRef}/>
          <label class="form-check-label etiqueta" for="importante">
            Importante!
          </label>
        </div>
        <button type="button" onClick={agregarTarea} className="btn btn-success ms-1">
          Agregar
        </button>
      </div>
      <div className="container">
        <div className="col-12 align-self-center">
          <ul className="" >
            {/* Investigar que más se puede hacer con el método map */}
            {todos.map((todo) => (
              <TodoItem todo={todo} 
              key={todo.id} 
              eliminar ={eliminarNota}
              ></TodoItem>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
