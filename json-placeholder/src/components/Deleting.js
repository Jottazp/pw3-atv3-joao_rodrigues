import { useState } from "react";
import '../App.css';

function Deleting() {
    const [deleteId, setDeleteId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${deleteId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar usuário');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuário deletado com sucesso:', data);
        })
        .catch(error => {
            console.log(`Erro ao deletar usuário: ${error}`);
        });
    }

    return (
        <div className="delete-container">
            <h1>Deletar Usuário</h1>
            <form className="container" onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="number"
                    placeholder="ID do Usuário"
                    value={deleteId}
                    onChange={(event) => setDeleteId(event.target.value)}
                />
                <button className="submit-button" type="submit">Deletar</button>
            </form>
        </div>
    );
}

export default Deleting;