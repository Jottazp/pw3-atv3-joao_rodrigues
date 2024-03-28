import { useEffect, useState } from "react";
import '../App.css';

function Listing() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log('Erro ao obter usuários:', error));
    }, []);

    return (
        <div className="list-container">
            <h1>Lista de Usuários</h1>
            <div className="user-list">
                {users.map(user => (
                    <div className="user-card" key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Telefone: {user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Listing;
