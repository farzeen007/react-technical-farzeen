import React, { useEffect } from "react";
import { taskStore, userStore } from "../../store";
import DashboardTaskBoard from "./DashboardTaskBoard";
import Loader from "../ui/Loader";

const Dashboard = () => {
  const { filteredTasks, loading, errors, fetchTasks } = taskStore();
  const { user } = userStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (loading) return <Loader />;

  if (errors) return <h1>Error while fetching tasks...</h1>;
  return (
    <div>
      <DashboardTaskBoard tasks={filteredTasks} />
    </div>
  );
};

export default Dashboard;
