import React, { useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [tasks, setTasks] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "Block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = () => {
    if (Inputs.title===" " || Inputs.body === "") {
      toast.error("Title or Body should not be empty");
    } else {
      setTasks([...tasks, Inputs]);
      setInputs({ title: "", body: "" });
      toast.success("Your Task is Added");
      toast.success("Your Task is not Saved: Please SignUp");
    }
  };

  const del = (id) => {
    tasks.splice(id, "1");
    setTasks([...tasks]);
  };

  const dis=(value)=>{
      console.log(value);
      document.getElementById("todo-update").style.display=value;
  };

  return (
    <>
      <div className="todo mt-5 pt-5">
        <ToastContainer />
        <div className=" container todo-main d-flex justify-content-center align-items-center flex-column gap-3">
          <div className="d-flex flex-column gap-3 todo-inputs w-50 todo-inputs-div p-1 ">
            <input
              className="todo-inputs"
              type="text"
              placeholder="TITLE"
              onClick={show}
              name="title"
              value={Inputs.title}
              onChange={change}
            />
            <textarea
              id="textarea"
              className="p-2 todo-inputs"
              type="text"
              name="body"
              value={Inputs.body}
              onChange={change}
              placeholder="Body"
            />
          </div>
          <div className="w-50 d-flex justify-content-end">
            <button
              className="home-btn bg-dark text-white fw-bold"
              onClick={submit}
            >
              Add
            </button>
          </div>
        </div>

        <div className="todo-body">
          <div className="container">
            <div className="row">
              {tasks &&
                tasks.map((item, index) => (
                  <div key={index} className="col-lg-3 col-10 mx-5 my-3">
                    <TodoCards data={item} id={index} delid={del} display={dis} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="todo-update" id="todo-update">
        <div className=" container update">
          <Update display={dis}/>
        </div>
      </div>
    </>
  );
};

export default Todo;
