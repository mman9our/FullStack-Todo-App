import React, { useState, useEffect } from "react";
import "./taskstable.css";
import TaskCard from "./TaskCard";
import Swal from "sweetalert2";
import SearchTodos from "./SearchTodos";
import ReactSwitch from "react-switch";

function Taskstable() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [showAllTasks, setShowAllTasks] = useState(true);

  const completedTasks = tasks.filter((task) => task.isDone).length;
  const currentTasks = tasks.filter((task) => !task.isDone).length;
  const totalTasks = tasks.length;

    // Load saved tasks from the server when the component is mounted
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:4000/");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const todos = await response.json();
        setTasks(todos);
        setFilteredTasks(todos);
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Failed to fetch todos",
          text: "An error occurred while fetching the todos. Please try again.",
        });
      }
    };

    fetchTodos();
  }, []);


  const handleAddTask = async () => {
    const taskTitle = await Swal.fire({
      title: "Enter task title",
      input: "text",
      inputPlaceholder: "Task title",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Add task",
      showLoaderOnConfirm: true,
      preConfirm: async (taskTitle) => {
        if (!taskTitle || taskTitle.trim() === "") {
          Swal.showValidationMessage("Task title cannot be empty");
          return;
        }
        try {
          const response = await fetch("http://localhost:4000/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: taskTitle, isDone: false }),
          });
  
          if (!response.ok) {
            throw new Error("Failed to add task");
          }
  
          const data = await response.json();
          const newTask = { id: data.id, title: taskTitle, isDone: false };
          setTasks([...tasks, newTask]);
          setFilteredTasks([...tasks, newTask]);
          localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        } catch (error) {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Failed to add task",
            text: "An error occurred while adding the task. Please try again.",
          });
        }
      },
    });
  };

  const handleToggleDone = async (updatedTask) => {
    try {
      const response = await fetch(`http://localhost:4000/todos/${updatedTask.id}`, {
        method: "PUT",
      });
      if (response.ok) {
        setTasks((prevTasks) => {
          const updatedTasks = prevTasks.map((task) =>
            task.id === updatedTask.id ? { ...task, isDone: !task.isDone } : task
          );
          setFilteredTasks(updatedTasks);
          return updatedTasks;
        });
      } else {
        throw new Error("Failed to update task");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };
  
  
  

  // Filter the tasks array based on a search query, and update the filteredTasks array
  const handleSearch = (searchValue) => {
    if (searchValue === "") {
      // If the search query is empty, set the filteredTasks array to the tasks array
      setFilteredTasks(tasks);
    } else {
      // Otherwise, filter the tasks array based on the search query and set the filteredTasks array to the filtered result
      const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredTasks(filteredTasks);
    }
  };
  
  const handleShowAllTasksChange = (checked) => {
    // This function handles the change of the "Show All Tasks" toggle button
    setShowAllTasks(checked);
    // Set the state of the "showAllTasks" variable to the boolean value passed in
    if (checked) {
      // If the toggle button is checked, show all tasks
      setFilteredTasks(tasks);
      // Set the state of the "filteredTasks" variable to the array of all tasks
    } else {
      // If the toggle button is unchecked, show no tasks
      setFilteredTasks([]);
      // Set the state of the "filteredTasks" variable to an empty array
    }
  };
  
  
  // Determine the text to display on the toggle button based on the state of the "showAllTasks" variable
  const toggleLabel = showAllTasks ? "Hide All Tasks" : "Show All Tasks";
  return (
    <>
      <div className="center-div">
        <div className="tasks-table">
          <div className="header-properties">
            <div className="table-properties">
              {/* Show the number of completed, current, and total tasks */}
              <span className="btn-status">
                <span className="material-symbols-sharp">priority</span>: {completedTasks}
              </span>
              <span className="btn-status">
                <span className="material-symbols-sharp">hourglass_top</span>: {currentTasks}
              </span>
              <span className="btn-status">
                <span className="material-symbols-sharp">receipt_long</span>: {totalTasks}
              </span>
              {/* Add a search bar to allow the user to search for tasks */}
              <SearchTodos onSearch={handleSearch} />
              <div className="toggle-button">
                {/* Show the toggle button */}
                <span>{toggleLabel}</span>
                <ReactSwitch
                  checked={showAllTasks}
                  onChange={handleShowAllTasksChange}
                />
              </div>
            </div>
            <div className="header">
              {/* Add a button to allow the user to add a new task */}
              <span id="add-btn" onClick={handleAddTask}>
                <span className="material-symbols-sharp">assignment_add</span>
                &nbsp; Add Task
              </span>
            </div>
          </div>
          <div className="tasks">
            {/* Show a list of task cards for each task */}
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleDone={() => handleToggleDone(task)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}  

export default Taskstable;
