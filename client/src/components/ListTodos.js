import React, { Fragment, useState, useEffect } from 'react';

const ListTodos = () => {

    const [todos, setTodos] = useState([]);
    // definimos el arreglo vacío para poder almacenar los datos dentro

    const getTodos = async() => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            // console.log(jsonData);
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);
    // [] esto evita que useEffect() realice muchas solicitudes (repetidas)

    console.log(todos);
    
    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    */}
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodos;