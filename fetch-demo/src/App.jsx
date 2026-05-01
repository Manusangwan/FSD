import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  async function fetchdata() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata(); //  function is called here
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;