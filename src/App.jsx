import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API+"/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="p-4">
      <ul>
        {users.map((user) => (
          <li key={user.id} >
            {user.id} {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
