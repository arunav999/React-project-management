import React, { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const taskModal = useRef();

  function handelChange(event) {
    setEnteredTask(event.target.value);
  }

  function handelClick() {
    if (enteredTask.trim() === "") {
      taskModal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={taskModal} buttonCaption="Try Again...?">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please enter a task to add.</p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for the input field.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          onChange={handelChange}
          value={enteredTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handelClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
