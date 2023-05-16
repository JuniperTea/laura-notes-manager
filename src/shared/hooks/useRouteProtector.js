import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../utils/dataContext";

export function useRouteProtector() {
  const { username, email } = useContext(UserDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    // on every page load
    if (!username) {
      navigate("/login");
    }
  }, []);
}
