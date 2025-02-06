import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import ProtectedRoute from "../../components/layouts/ProtectedRoute";

const Main = () => {
  return (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  );
};

export default Main;
