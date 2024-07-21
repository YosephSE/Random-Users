import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      if (count < 99) {
        try {
          const res = await axios.get("https://randomuser.me/api/");
          setUsers((prevUsers) => [...prevUsers, res.data.results[0]]);
          setCount((prevCount) => prevCount + 1);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUsers();
  }, [count]);

  return (
    <>
      <div className="header">React Random Users From API</div>
      <div className="grid-container">
        {users.map((user, index) => (
          <div key={index} className="grid-item">
            <img
              src={user.picture.large}
              alt={`${user.name.first}'s Profile pic`}
            />
            <p>
              {user.name.first} {user.name.last}
            </p>
            <p>{user.gender}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
