import { useState } from "react";
import '../App.css';

function Updating() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const requestData = {
            id: id,
            title: title,
            body: body,
            userId: userId
        };

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao atualizar usuário');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuário atualizado com sucesso:', data);
        })
        .catch(error => {
            console.log(`Erro ao atualizar usuário: ${error}`);
        });
    }

    return (
        <div className="update-container">
            <h1>Atualizar Usuário</h1>
            <form className="container" onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />
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
                    onChange={(event) => setUserId(event.target.value)}
                />
                <button className="submit-button" type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default Updating;