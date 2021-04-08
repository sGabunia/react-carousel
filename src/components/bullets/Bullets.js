import React from "react";
import Bullet from "./Bullet";
import "./bullets.css";

const BulletList = ({ images, handleBulletClick }) => {
  return (
    <div className="bullets">
      {images.map((bullet) => (
        <Bullet
          key={bullet.id}
          bullet={bullet}
          handleBulletClick={handleBulletClick}
        />
      ))}
    </div>
  );
};

export default BulletList;
