import React from 'react'

class Row extends React.Component {
  render() {
    const { index, student, deleteRow } = this.props
    return (
      <tr data-index={index}>
        <td>{student.name}</td>
        <td>
          <button onClick={e => deleteRow(e, index)}>Delete</button>
        </td>
      </tr>
    );
  }
}

class App extends React.Component {
  deleteRow = (e, index) => {
    e.target.closest(`[data-index="${index}"]`).remove()
  };

  render() {
    const students = [
      { name: "Student1" },
      { name: "Student2" },
      { name: "Student3" }
    ];

    return (
      <table>
        <tbody>
          {students.map((student, index) =>
            <Row
              key={index} //key không truyền xuống component con bằng props được
              index={index} //muốn truyền phải sử dụng 1 biến khác
              student={student}
              deleteRow={this.deleteRow}
            />
          )}
        </tbody>
      </table>
    );
  }
}

export default App;