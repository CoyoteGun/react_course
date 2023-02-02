import {useEffect, useState} from "react";
import {todosRequest} from "../../api/request/todosRequest";
import {TodosList} from "../../components/Todos/Todos";

export const TodosPage = () => {
    const [todosList, setTodosList] = useState([]);
    useEffect(() => {
        todosRequest.getAll().then(({data}) => setTodosList([...data]))
    }, [])
    return (
        <div className={'todos_page'}>
            <h1>Todos Page</h1>
            <TodosList todosList={todosList}/>
        </div>
    );
};