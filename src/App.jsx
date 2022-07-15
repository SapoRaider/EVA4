import React, {Fragment} from "react";
/* Importar componente TodoList */
import {TodoList} from './components/TodoList'

export function App(){
    return(
        <Fragment>
            <TodoList />
        </Fragment>
    )
}