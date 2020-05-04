import React from 'react'

const Row = ({ index, student, deleteRow }) => {
  const { name } = student;
  
  return (
    <tr data-index={index}>
      <td>{name}</td>
      <td>
        <button onClick={e => deleteRow(e, index)}>Delete</button>
      </td>
    </tr>
  );
};

function App() {
  const students = [
    { name: "Student1" },
    { name: "Student2" },
    { name: "Student3" }
  ];

  const deleteRow = (e, index) => {
    e.target.closest(`[data-index="${index}"]`).remove()
  };

  return (
    <table>
      <tbody>
        {students.map((student, index) =>
          <Row
            key={index} //key không truyền xuống component con bằng props được
            index={index} //muốn truyền phải sử dụng 1 biến khác
            student={student}
            deleteRow={deleteRow}
          />
        )}
      </tbody>
    </table>
  );
}

export default App;