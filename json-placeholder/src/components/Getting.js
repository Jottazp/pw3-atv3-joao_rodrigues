import { useState } from "react";
import '../App.css';

function Getting() {
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter usuário');
            }
            return response.json();
        })
        .then(data => {
            setUserData(data);
        })
        .catch(error => {
            console.log(`Erro ao obter usuário: ${error}`);
        });
    }

    return (
        <div className="get-container">
            <h1>Obter Detalhes do Usuário</h1>
            <form className="container" onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="number"
                    placeholder="ID do Usuário"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                />
                <button className="submit-button" type="submit">Obter</button>
            </form>
            {userData && (
                <div className="user-details">
                    <h2>Detalhes do Usuário:</h2>
                    <p>ID: {userData.id}</p>
                    <p>Nome: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Telefone: {userData.phone}</p>
                </div>
            )}
        </div>
    );
}

export default Getting;