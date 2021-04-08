import React from "react";

const Bullet = ({ bullet, handleBulletClick }) => {
  return (
    <div
      className={`bullet ${bullet.active && "active"}`}
      onClick={() => handleBulletClick(bullet.id)}
    ></div>
  );
};

export default Bullet;
