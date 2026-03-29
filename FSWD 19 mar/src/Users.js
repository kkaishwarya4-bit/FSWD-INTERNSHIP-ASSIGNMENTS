import { useEffect, useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching users");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}
    </div>
  );
}

export default Users;