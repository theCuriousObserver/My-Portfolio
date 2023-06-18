import React, { useEffect } from 'react';
import './StarrySky.css';

const StarrySky = () => {
  useEffect(() => {
    const starrySky = document.querySelector('.starry-sky');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      starrySky.appendChild(star);
    }
  }, []);

  return <div className="starry-sky"></div>;
};

export default StarrySky;
