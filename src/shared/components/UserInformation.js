import React, { useContext } from "react";
import { UserDataContext } from "../utils/dataContext";

export default function UserInformation() {
  const { username, email } = useContext(UserDataContext);
  return (
    <div>
      User: {username} <br></br> email : {email}
    </div>
  );
}
