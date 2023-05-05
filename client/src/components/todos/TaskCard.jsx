// This component represents a single task card in the tasks table
import React from "react";
import './taskstable.css';

function TaskCard({ task, onToggleDone }) {
    // This function toggles the "isDone" state of a task when the "Done" button is clicked
    const handleToggleDone = () => {
        const updatedTask = { ...task, isDone: !task.isDone };
        onToggleDone(updatedTask);
    };

    // The following code represents the UI of a task card
    return (
        <div className={`task${task.isDone ? ' done' : ''}`}>
            <div className="task-info">
                <h2>{task.title}</h2>
            </div>
            <div className="task-actions">
                <button className="circular btn-delete">
                    <span className="material-symbols-sharp btn-delete-icon">
                        delete
                    </span>
                </button>

                {/* Shows different buttons based on whether the task is done or not */}
                {task.isDone ? (
                    <button className="circular btn-delete" onClick={handleToggleDone}>
                        <span className="material-symbols-sharp btn-delete-icon">
                            close
                        </span>
                    </button>
                ) : (
                    <button className="circular btn-isDone" onClick={handleToggleDone}>
                        <span className="material-symbols-sharp btn-isDone-icon">
                            done
                        </span>
                    </button>
                )}

            </div>
        </div>
    );
}

export default TaskCard;



