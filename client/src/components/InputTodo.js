import React, { Fragment, useState } from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState("");
    //                                              valor predeterminado "" = cadena vacía

    // esta función nos vaa permitir enviar los datos del formulario
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            });
            // con fetch() vamos a realizar una solicitud de obtención 

            // console.log(response);

            window.location = "/";// esto refresca (actualiza) la pantalla una vez
            // se envien los datos (respuesta) del formulario y muestra los cambios
        } catch (err) {
            console.error(err.message);
        }
    } 

    return (
        <Fragment>
            <h1 className='text-center mt-5'>PERN Todo List</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input 
                    type='text' 
                    className='form-control' 
                    value={description}        // obtenemos el valor
                    onChange={e => setDescription(e.target.value)}
                    // usamos e = evento para establecer la description
                    />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;  // <></>