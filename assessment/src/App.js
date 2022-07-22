import "./App.css";
import List from "./components/display";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({ todoName: "", description: "", id: "" });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { todoName, description } = form;
    if (todoName === "" || description === "") {
      return;
    } else {
      form.id = uuidv4();
      setList([...list, form]);
    }
    console.log("yyhh", form);
    setForm({
      todoName: "",
      description: "",
    });
  };

  const deleteItem = (id) => {
    const filteredList = list.filter((item) => {
      return item.id !== id;
    });
    setList(filteredList);
  };

  const editTodo = (id) => {
    const editTodo = list.find((element) => element.id === id);
    if (editTodo) {
      setIsEditing(true);
      setForm({
        ...form,
        todoName: editTodo.todoName,
        description: editTodo.description,
      });
      setEditId(editTodo.id);
    }
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const array = list.map((item) => {
      if (item.id === editId) {
        item.todoName = form.todoName;
        item.description = form.description;
      }
      return item;
    });
    setList(array);
    setIsEditing(false);
    setForm({ todoName: "", description: "" });
  };
  return (
    <div className="App">
      <h1>React Todo App </h1>
      <form className="border" onSubmit={isEditing ? saveEdit : handleSubmit}>
        <h2> {isEditing ? "Edit Todo" : "ADD Todo"} </h2>
        <div className="form-group">
          <label>Task Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="task"
            name="todoName"
            value={form.todoName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-md">
          {isEditing ? "Save" : "Add"}
        </button>
      </form>
      <div>
        {" "}
        <List list={list} deleteItem={deleteItem} editTodo={editTodo} />
      </div>
      <div style={{ display: list.length > 0 ? "block" : "none" }}>
      <button
     className="btn btn-danger btn-md "
     onClick={() => setList([])}
   >
     REMOVE ALL
   </button>
      </div>
      
    </div>
  );
}

export default App;
