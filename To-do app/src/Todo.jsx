import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
    const [InputValue,setInputValue] = useState('');
    const [todos,setTodos] = useState([]);
    const [editMode,setEditMode] = useState(false);
    const [editId,setEditId] = useState(null);
    const [editValue,setEditValue] = useState('');

    const addTodo = () => {
        if(InputValue.trim() !== ''){//removes whitespace from both ends of a string.
            const newTodo = {
                id: new Date().getTime(),
                text: InputValue
            }
            setTodos([...todos,newTodo]);
            setInputValue('');
        }
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id != id);
        setTodos(updatedTodos);
    }

    const enterEditMode = (id,text) => {
        setEditMode(true);
        setEditId(id);
        setEditValue(text);
    }

    const updatedTodo = () =>{
        const updatedTodos = todos.map((todo) => {
            if(todo.id === editId){
                return {...todos,text: editValue};
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditMode(false);
        setEditId(null);
        setEditValue('');
    }

  return (
    <div className='todo-container'>
        <h1>ToDo List</h1>
        <input type='text' value={InputValue} onChange={(e) => setInputValue(e.target.value)}/>
        {
            editMode ? (
                <div>
                    <input type='text' value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
                    <button onClick={updatedTodo}>Update</button>
                </div>
            ):(
               <button onClick={addTodo}>Add</button> 
            )
        }
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <div>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => enterEditMode(todo.id,todo.text)}>Edit</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo;