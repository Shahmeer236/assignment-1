import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


let taskId;
function Home() {
  const [task, setTask] = useState([]);
  const [btnText, setBtnText] = useState("Add Items");

  const addItems = () => {
    if(document.getElementById("taskInput").value!=="")
    {
      setTask([
        ...task,
        {
          id: generateUniqueKey(),
          value: document.getElementById("taskInput").value,
        },
      ]);
      console.log(task);
      console.log("clicked");
      document.getElementById("taskInput").value = "";
    }
    else
    {
      alert("Please Input Task");          
    }
    

  };

  const generateUniqueKey = () => {
    return uuidv4();
  };
  const deleteItem = (id) => {
    console.log(id);
    const updateTask = task.filter((item) => item.id !== id);
    setTask(updateTask);
  };
  const updateItem = (id, value) => {
    // const updatedItem=task.filter(item=>item.id===id);
    const updateTask = task.filter((item) => item.id !== id);
    document.getElementById("taskInput").value = value;
    setBtnText("Update Item");

    console.log(value);

    // setTask(updateTask);
  };

  const deleteAll = () => {
    setTask([]);
  };

  return (
    <>
  <div className="heading-sec">
  <hr className="shortHr" style={{ borderTop: "2px solid black" }} />
  <h1 className="headingTop">To-do List</h1>
  <hr className="shortHr" style={{ borderTop: "2px solid black", width: "100%" }} />
</div>

    <hr />
    <div className="inputs-sec">
      <div className="input-task-div">
        <input type="text" id="taskInput" placeholder="Add your task here" className="input-task" />
        <button
        className="btn-add"
          onClick={() => {
            addItems();
            setBtnText("Add Items");
          }
          
        }
        >
          {btnText}
        </button>
      </div>
      <hr />
      <ul className="inputItems">
        {task.map((item) => (
          <div key={generateUniqueKey()} style={{ display: "flex" }} className="oneList">
            <li className="li_items">{item.value}</li>
            <button onClick={() => deleteItem(item.id)}>delete</button>
            <button
              onClick={() => {
                updateItem(item.id, item.value);
                deleteItem(item.id);
              }}
            >
              Update
            </button>
          </div>
        ))}
      </ul>
      {task.length !== 0 ? (
        <button onClick={() => deleteAll()}>Delete All</button>
      ) : (
        <button onClick={() => deleteAll()} style={{ display: "none" }}>
          Delete All
        </button>
        
      )}
      </div>
    </>
  );
}

export default Home;
