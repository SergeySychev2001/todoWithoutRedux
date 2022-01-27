import './Todo.css';
import Input from './Input';
import List from './List'
import { useState } from 'react';
import lodash from 'lodash';
import { v4 } from 'uuid';

const Todo = () => {

    const [todoList, setTodoList] = useState([
        {
            id: "1",
            text: "Проснуться",
            done: false,
        },
        {
            id: "2",
            text: "Сходить на работу",
            done: false,
        },
        {
            id: "3",
            text: "Поесть",
            done: false,
        }
    ]);

    const setDone = (id, value) => {
        // Копируем стейт
        const prevState = lodash.cloneDeep(todoList);
        const itemIdx = prevState.findIndex(item => item.id === id);
        prevState[itemIdx].done = value;
        setTodoList(prevState);
    }

    const deleteItem = (id) => {
        // Копируем стейт
        const prevState = lodash.cloneDeep(todoList);
        const itemIdx = prevState.findIndex(item => item.id === id);
        const resultState = [
            ...prevState.slice(0, itemIdx),
            ...prevState.slice(itemIdx + 1),
        ];
        setTodoList(resultState);
    }

    const addItem = (value) => {
        const prevState = lodash.cloneDeep(todoList);
        prevState.push({
            id: v4(),
            text: value,
            done: false
        });
        setTodoList(prevState);
    }

    return (
        <div className="todo">
            <Input addItem={addItem}/>
            <List data={todoList} setDone={setDone} deleteItem={deleteItem}/>
        </div>
    )
}

export default Todo;