import { useRouteProtector } from "../hooks/useRouteProtector";

export default function ProtectedRoute({ children }) {
  useRouteProtector();
  return children;
}
