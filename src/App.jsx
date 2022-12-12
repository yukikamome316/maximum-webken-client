import {useState} from 'react'

function App() {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const res = await fetch('http://localhost:8000');
    const data = await res.json();
    console.log(data);
    setUsers(data);
  }
  return (
    <div>
      <button onClick={getUser}>Get User</button>
      {users.map((user) => (
        <p key={user.id}>
          <span>{user.id}</span>
          <span>:</span>
          <span>{user.name}</span>
        </p>
      ))}
    </div>
  );
}

export default App
