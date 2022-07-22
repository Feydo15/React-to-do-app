import React from "react";

function List(props) {

  const { list, deleteItem, editTodo } = props;;
  console.log('props :>> ', props);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr styles={{width: '20%'}}>
            <th styles={{width: '20%'}}>Todo Name</th>
            <th styles={{width: '20%'}}>Description</th>
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
                <td>{<button className="btn btn-danger btn-md"
                 onClick={() => deleteItem(item.id)}>
                Delete</button>}</td>
              </tr>
              );
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default List;
