import { create } from "zustand";
import { persist } from "zustand/middleware";

export const taskStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      filteredTasks: [],
      searchTerm: "",
      statusFilter: "All",
      loading: false,
      errors: false,

      fetchTasks: async () => {
        if (get().tasks.length) return; // tasks already exist in persisted storage

        set({ loading: true });
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos`,
          );
          const responseData = await response.json();

          const modifiedTasks = responseData
            .slice(0, 100)
            .map((task, index) => {
              if (task.completed) return { ...task, status: "Completed" };
              else if (!task.completed && index % 2 === 0)
                return { ...task, status: "In Progress" };
              return { ...task, status: "ToDo" };
            });

          set({ tasks: modifiedTasks, filteredTasks: modifiedTasks });
        } catch (error) {
          set({ errors: true });
          console.log("error while fetching tasks");
        } finally {
          set({ loading: false });
        }
      },

      deleteTasks: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((item) => item.id !== id),
        }));
        get().applyFilters();
      },

      addTasks: (data) => {
        set((state) => ({
          tasks: [data, ...state.tasks],
        }));
        get().applyFilters();
      },

      updateTasks: (selectedTask) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === selectedTask.id ? selectedTask : task,
          ),
        }));
        get().applyFilters();
      },

      applyFilters: () => {
        const { tasks, searchTerm, statusFilter } = get();
        let updatedTasks = [...tasks];

        if (searchTerm) {
          updatedTasks = updatedTasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }

        if (statusFilter !== "All") {
          updatedTasks = updatedTasks.filter(
            (task) => task.status === statusFilter,
          );
        }

        set({ filteredTasks: updatedTasks });
      },

      searchTasks: (value) => {
        set({ searchTerm: value });
        get().applyFilters();
      },

      filterByStatus: (value) => {
        set({ statusFilter: value });
        get().applyFilters();
      },
    }),
    {
      name: "task-storage",
    },
  ),
);
