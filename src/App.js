import react, {useReducer} from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./Context/ToDoContext"
import todoReducer from "./Context/reducer"
import TodoForm from "./Components/TodoForms";
import Todos from "./Components/Todos";

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer,[])
    return (
        <TodoContext.Provider value={{todos,dispatch}}>
            <Container fluid>
                <h1>Todo App with Context Api</h1>
                <Todos></Todos>
                <TodoForm/>
            </Container>


        </TodoContext.Provider>
    )
}



export default App;
