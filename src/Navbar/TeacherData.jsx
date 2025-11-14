import React, { useEffect, useState } from "react";
import "./Details.css";

const TeacherData = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error("Error fetching teachers:", err));
  }, []);

  return (
    <div>
      <h2>Teacher Details</h2>
      {teachers.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t, i) => (
              <tr key={t.id}>
                <td>{i + 1}</td>
                <td>{t.name}</td>
                <td>{t.username}</td>
                <td>{t.email}</td>
                <td>{t.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading teacher data...</p>
      )}
    </div>
  );
};

export default TeacherData;