import React, { useState } from 'react'

const Row = ({ student, deleteRow }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <button onClick={() => deleteRow(student.id)}>Delete</button>
      </td>
    </tr>
  );
};

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Student1" },
    { id: 2, name: "Student2" },
    { id: 3, name: "Student3" }
  ]);

  const deleteRow = id => {
    setStudents(students.filter(student => student.id !== id))
  }
  return (
    <table>
      <tbody>
        {students.map(student =>
          <Row
            key={student.id}
            student={student}
            deleteRow={deleteRow}
          />
        )}
      </tbody>
    </table>
  );
};


export default App;