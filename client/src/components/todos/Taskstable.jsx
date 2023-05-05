import React, { useState, useEffect } from "react";
import "./taskstable.css";
import TaskCard from "./TaskCard";
import Swal from "sweetalert2";
import SearchTodos from "./SearchTodos";
import ReactSwitch from "react-switch";

function Taskstable() {

  // Define state variables for tasks, filtered tasks, and show all tasks
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [showAllTasks, setShowAllTasks] = useState(true);

  // Calculate the number of completed, current, and total tasks using the tasks array
  const completedTasks = tasks.filter(task => task.isDone).length;
  const currentTasks = tasks.filter(task => !task.isDone).length;
  const totalTasks = tasks.length;

  // Load saved tasks from localStorage when the component is mounted
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
      setFilteredTasks(savedTasks);
    }
  }, []);

  // Open a prompt to add a new task, and add it to the tasks array when submitted
  const handleAddTask = () => {
    Swal.fire({
      title: "Enter task title",
      input: "text",
      inputPlaceholder: "Task title",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Add task",
      showLoaderOnConfirm: true,
      preConfirm: (taskTitle) => {
        if (!taskTitle || taskTitle.trim() === "") {
          Swal.showValidationMessage("Task title cannot be empty");
        } else {
          // Create a new task object 
          const newTask = {
            id: Math.random().toString(),
            title: taskTitle,
            isDone: false,
          };
          // Add the new task to both the tasks and filteredTasks arrays
          setTasks([...tasks, newTask]);
          setFilteredTasks([...tasks, newTask]);
          // Save the updated tasks array to localStorage
          localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        }
      },
    });
  };

  // Toggle the isDone property of an existing task, and update the tasks and filteredTasks arrays accordingly
  const handleToggleDone = (updatedTask) => {
    // Find the index of the updated task in the tasks array
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    // Create a copy of the tasks array with the updated task
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    // Update the tasks and filteredTasks arrays with the updated tasks array
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    // Save the updated tasks array to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
                onToggleDone={handleToggleDone}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}  

export default Taskstable;
