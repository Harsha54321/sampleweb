import React, { useState } from "react";
import "./Details.css";

const StudentData = () => {
  const [form, setForm] = useState({ name: "", age: "", grade: "", email: "" });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.grade || !form.email) {
      alert("Please fill all fields!");
      return;
    }
    setStudents([...students, form]);
    setForm({ name: "", age: "", grade: "", email: "" });
  };

  return (
    <div>
      <h2>Student Registration Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          name="grade"
          value={form.grade}
          onChange={handleChange}
          placeholder="Grade"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Add Student</button>
      </form>

      {students.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>{s.grade}</td>
                <td>{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentData;