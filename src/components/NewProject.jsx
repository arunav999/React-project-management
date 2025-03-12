import React from "react";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea name="desc" id="description"></textarea>
        </p>
        <p>
          <label htmlFor="dueDate">Due Date</label>
          <input type="text" id="dueDate" />
        </p>
      </div>
    </div>
  );
}
