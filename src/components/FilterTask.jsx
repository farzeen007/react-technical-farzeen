import { taskStore } from "../store";

const FilterTask = () => {
  const { searchTasks, filterByStatus } = taskStore();

  return (
    <div className="my-5 flex gap-5 items-center">
      <input
        onChange={(e) => searchTasks(e.target.value)}
        className="bg-white px-10 pl-3 py-3 w-1/2 rounded-xl border border-gray-200 focus:outline-1 focus:outline-gray-500 placeholder:text-gray-400 transition"
        placeholder="Search by title"
      />

      <select
        className="py-3 border rounded-lg bg-white px-4 border-gray-200 focus:outline-1 focus:outline-gray-500 transition"
        defaultValue="All"
        onChange={(e) => filterByStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="ToDo">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterTask;
