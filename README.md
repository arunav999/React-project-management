# 🛠️ React Project Management App

🚀 **Live Demo:👉** [Click here to view the live app](https://project-management-arunav.netlify.app) 

---

## 📌 Overview

This is a **React-based** project management app, created as a practice project from a **Udemy** course. The app allows users to create projects, add tasks to those projects, and handle errors with a smooth, no-page-reload experience.

---

## ✨ Features

- **Homepage with Two Buttons:**

  - Users start by choosing one of two buttons to create a new project.

- **Project Creation:**

  - After clicking a button, the user is prompted to enter project details:
    - **Title**
    - **Description**
    - **Due Date**
  - Two action buttons:
    - **Save:** Adds the project if all fields are filled.
    - **Cancel:** Returns to the homepage without saving.
  - If any field is left blank, a **modal dialog box** appears, displaying an error message with a **Close** button to retry.

- **Project Sidebar:**

  - Successfully added projects appear on the **left sidebar**.
  - Users can select a project by clicking its title to view or manage tasks.

- **Task Management:**

  - Users can add tasks below the selected project’s details.
  - An **"Add Task"** button allows users to input tasks.
  - If the task input field is empty, a **modal error** appears with a **Close** button.
  - Each task has a **"Clear"** button to delete the task individually.

- **No Page Reloads:**
  - All actions (adding projects, tasks, handling errors) occur seamlessly without reloading the page, enhancing the user experience.

---

## 🛠️ Tech Stack

- **React** (Frontend Framework)
- **HTML5/TAILWIND** (Structure & Styling)
- **JavaScript (ES6+)**

---

## 🐛 Error Handling

- **Empty Project Fields:** A modal appears with an error prompt if Title, Description, or Due Date is missing.
- **Empty Task Field:** A similar modal appears with a task-specific error when the "Add Task" button is clicked without entering a task.

---

## 🖼️ Screenshots

### 🌟 Main Page

![Main Page Screenshot](./Project%20Snapshots/Home%20Page%20SS.png)  
👉 **File path:** `./Project%20Snapshots/Home%20Page%20SS.png`

---

### Creating a Project

![Creating a Project Screenshot](./Project%20Snapshots/Creating%20Project%20SS.png)
👉 **File path:** `./Project%20Snapshots/Creating%20Project%20SS.png`

---

### Creating a Task

![Creating a Task in an Added project](./Project%20Snapshots/Adding%20Tasks%20SS.png)
👉 **File path:** `./Project%20Snapshots/Adding%20Tasks%20SS.png`

---

### ⚠️ Error Modal

![Error Modal Screenshot](./Project%20Snapshots/Error%20message%20Task%20SS.png)  
👉 **File path:** `./Project%20Snapshots/Error%20message%20Task%20SS.png`

---

## 💡 Acknowledgments

- **Udemy Course:** [React](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- **React Docs:** [React Documentation](https://reactjs.org/docs/getting-started.html)

---

Happy coding! 🚀✨
