import React from "react";

export default function Contributor({ avatar, name, profileUrl, contributions }) {
  return (
    <div className="contributor-card">
      <a href={profileUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="contributor-avatar"
          width={80}
          height={80}
        />
      </a>
      <h4>{name}</h4>
      <p>{contributions} contributions</p>
    </div>
  );
}
