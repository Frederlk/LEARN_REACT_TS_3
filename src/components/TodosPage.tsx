import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";
import axios from "axios";
import { FC, useState, useEffect } from "react";
import Card, { CardVariant } from "./Card";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            <Card
                onClick={(num) => console.log(num)}
                variant={CardVariant.primary}
                width="200px"
                height="200px">
                <button type="button" className="button">
                    Отправить
                </button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusantium.</p>
            </Card>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />;
        </>
    );
};

export default TodosPage;
