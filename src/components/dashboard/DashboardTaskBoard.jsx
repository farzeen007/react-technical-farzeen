import { modalStore, taskStore } from "../../store";
import { toast } from "react-toastify";
import Modal from "../ui/Modal";
import TaskForm from "../form/TaskForm";
import SearchTaskInput from "../FilterTask";

const DashboardTaskBoard = ({ tasks }) => {
  const { deleteTasks } = taskStore();
  const { openModal } = modalStore();

  const onDelete = (list) => {
    deleteTasks(list?.id);
    toast.success(`${list.title} deleted successfully`);
  };

  const completedList = tasks?.filter((task) => task.status === "Completed");
  const todoList = tasks?.filter((task) => task.status === "ToDo");
  const inProgressList = tasks?.filter((task) => task.status === "In Progress");

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-green-600 text-center">
          Task Board
        </h2>
        <button
          className="bg-green-200 py-2 px-5 rounded-lg font-semibold cursor-pointer"
          onClick={() => openModal()}
        >
          Add Task
        </button>
      </div>
      <SearchTaskInput />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">ToDo</h3>
          {todoList.length > 0 ? (
            todoList?.map((list) => (
              <div
                key={list.id}
                className="bg-gray-100 rounded-md p-2 mb-2 text-sm flex justify-between items-center"
              >
                <div>{list?.title}</div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal("edit", list)}
                    className="px-2 cursor-pointer py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-100 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(list)}
                    className="px-2 cursor-pointer py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">
            In Progress
          </h3>
          {inProgressList.length > 0 ? (
            inProgressList?.map((list) => (
              <div
                key={list.id}
                className="bg-yellow-100 rounded-md p-2 mb-2 text-sm flex justify-between items-center"
              >
                <div>{list?.title}</div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal("edit", list)}
                    className="px-2 cursor-pointer py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-100 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(list)}
                    className="px-2 cursor-pointer py-1 text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">
            Completed
          </h3>
          {completedList.length > 0 ? (
            completedList?.map((list) => (
              <div
                key={list.id}
                className="bg-green-100 rounded-md p-2 mb-2 text-sm flex justify-between items-center"
              >
                <div>{list?.title}</div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal("edit", list)}
                    className="px-2 py-1 cursor-pointer text-xs bg-white border border-gray-300 rounded hover:bg-gray-100 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(list)}
                    className="px-2 py-1 cursor-pointer text-xs bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
      </div>
      <Modal>
        <TaskForm />
      </Modal>
    </div>
  );
};

export default DashboardTaskBoard;

const NoData = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-10 py-12 text-center">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          No Tasks Found
        </h2>
        <p className="text-gray-500 text-sm">
          Try adjusting your search or filter settings.
        </p>
      </div>
    </div>
  );
};
