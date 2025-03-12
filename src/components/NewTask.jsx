import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();

  function handelChange(event) {
    setEnteredTask(event.target.value);
  }

  function handelClick() {
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
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
