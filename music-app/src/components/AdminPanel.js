import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getInitialState = () => {
    const value = "default";
    return value;
  };

  const [dropDownValue, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/login");
    }
    getAllUsers();
  }, [navigate]);


  const getAllUsers = async () => {
    console.log(auth);
    let result = await fetch(`/userInfo`);
    result = await result.json();
    setUsers(result);
  };

  const changeRole = async (user) => {
    if (dropDownValue !== "default") {
      const userName = user;
      const roleValue = dropDownValue;
      console.log(roleValue);
      fetch(`/admin/${userName}/${roleValue}`);
      let result = await fetch(
        `/admin/${userName}/${roleValue}`,
        {
          method: "POST",
        }
      );
      console.log(result);
    }
  };

  return (
    <div>
      {" "}
      <h2>Admin Panel</h2>
      <Link to="/dashboard" style={{ marginLeft: "20px" }}>
        Dashboard
      </Link>
      <div className="user-list">
        <table id="t1">
          <tbody>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Change role</th>
              <th></th>
            </tr>

            {users.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <select value={dropDownValue} onChange={handleChange}>
                    <option value="default">default</option>
                    <option value="admin">admin</option>
                    <option value="active-user">active-user</option>
                    <option value="deactivated">deactivated</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => changeRole(user.username)}>
                    Apply change
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
