import { useState } from "react";
import '../App.css';

function Creating() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const requestData = {
            title: title,
            body: body,
            userId: userId
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao criar usuário');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuário criado com sucesso:', data);
        })
        .catch(error => {
            console.log(`Erro ao criar usuário: ${error}`);
        });
    }

    return (
        <div className="create-container">
            <h1>Criar Novo Usuário</h1>
            <form className="container" onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Corpo"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />
                <input
                    className="input-field"
                    type="number"
                    placeholder="ID do Usuário"
                    value={userId}
                    onChange={(event) => setId(event.target.value)}
                />
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Creating;