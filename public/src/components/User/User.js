import React from "react";
import './User.css';

import UserIcon from 'react-icons/lib/fa/user';

export default function User() {
  return (
    <div id="User__parent">
      <UserIcon id="User__icon" />
      <span> Guest </span>
    </div>
  )
}