import React from "react";

function List(props) {

  const { list, deleteItem, editTodo } = props;;
  console.log('props :>> ', props);
  return (
    <div  style={{ display: list.length > 0 ? "block" : "none" }}>
      <h2>Todo List</h2>
      <table className="table table-striped">
        <thead>
          <tr styles={{width: '20%'}}>
            <th styles={{width: '20%'}}>Task Name</th>
            <th styles={{width: '20%'}}>Description</th>
            <th styles={{width: '20%'}}>Edit</th>
            <th styles={{width: '20%'}}>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {list && list.map((item) => {
              return (
              <tr key={item.id}>
                <td>{item.todoName}</td>
                <td>{item.description}</td>
                <td>{<button className="btn btn-secondary btn-md"
                onClick={()=>editTodo(item.id)}
                    >Edit</button>}</td>
                <td>{<span className="btn btn-danger btn-md"
                 onClick={() => deleteItem(item.id)}>
                &times;</span>}</td>
              </tr>
              );
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default List;
