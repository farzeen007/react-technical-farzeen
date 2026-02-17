import React, { useState } from "react";
import { modalStore, taskStore } from "../../store";
import { toast } from "react-toastify";

const TaskForm = () => {
  const { selectedTask, closeModal } = modalStore();
  const { addTasks, updateTasks } = taskStore();
  const [taskTitle, setTaskTitle] = useState(
    selectedTask ? selectedTask?.title : "",
  );
  const [taskStatus, setTaskStatus] = useState(
    selectedTask ? selectedTask?.status : "ToDo",
  );

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {};
    if (taskTitle) {
      if (selectedTask) {
        data = { ...selectedTask, title: taskTitle, status: taskStatus };
        updateTasks(data);
        toast.success("Task Edited successfully");
        closeModal();
        return;
      }
      data = {
        completed:
          taskStatus == "ToDo" || taskStatus == "In Progress" ? false : true,
        id: Math.floor(Math.random() * 101) + 200,
        status: taskStatus,
        title: taskTitle,
        userId: 1,
      };
      addTasks(data);
      toast.success("Task added successfully");
      closeModal();
      return;
    } else {
      toast.error("Please enter the values");
    }
  };

  return (
    <form
      className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-5 absolute insite-1/2"
      onSubmit={(e) => onSubmit(e)}
    >
      <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
        {selectedTask ? "Edit Task" : "Create Task"}
      </h2>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Task Title
          </label>
          <input
            type="text"
            defaultValue={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
            defaultValue={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            value={taskStatus}
          >
            <option value="ToDo">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8 cursor-pointer">
        <button
          type="button"
          className="px-5 cursor-pointer py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          onClick={closeModal}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-5 py-2 cursor-pointer rounded-lg bg-green-600 text-white hover:bg-green-700 transition shadow-md"
        >
          {selectedTask ? "Edit Task" : "Save Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
