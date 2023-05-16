import React, { useContext } from "react";
import { UserDataContext } from "../utils/dataContext";
import UserInformation from "./UserInformation";

export default function BasicDetails() {
  const { username } = useContext(UserDataContext);
  return (
    <div>
      <div>username: {username}</div>
      <UserInformation />
    </div>
  );
}
