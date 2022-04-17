import React from "react";

const Avatar = ({ name,handleSignout }) => {
  return (
    <div class="dropdown dropdown-hover mx-10">
      <div class="avatar">
        <div class="w-12 rounded">
          <img
            src="https://api.lorem.space/image/face?hash=77703"
            alt="Tailwind-CSS-Avatar-component"
          />
        </div>
      </div>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>{name}</a>
        </li>
        <li>
          <a onClick={handleSignout}> Signout </a>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
