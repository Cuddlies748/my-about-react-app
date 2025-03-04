import "../styles/about.css";
import React, { useEffect, useRef } from "react";

function About() {
  const starsContainerRef = useRef(null);
  const maxStars = 100; // Ограничиваем общее количество звезд

  useEffect(() => {
    function createStar() {
      if (!starsContainerRef.current) return;

      if (starsContainerRef.current.children.length >= maxStars) {
        return; // Если звезд уже слишком много, новые не создаём
      }

      const star = document.createElement("div");
      star.classList.add("star");
      starsContainerRef.current.appendChild(star);

      const startX = Math.random() * window.innerWidth;
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 2;

      star.style.left = `${startX}px`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `-${delay}s`;

      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    }

    const interval = setInterval(() => {
      for (let i = 0; i < 20; i++) {
        createStar(); // Создаём 20 звезд за раз
      }
    }, 300); // Каждые 300 мс
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div data-ignore-cursor="true" className="About">
      <div
        data-ignore-cursor="true"
        className="stars-container"
        ref={starsContainerRef}
      ></div>
      <div data-ignore-cursor="true" className="text_div">
        <h2 data-ignore-cursor="true" className="about_h2">
          About Me
        </h2>
        <h2 data-ignore-cursor="true" className="text-container">
          Eshboev Jasur
        </h2>
      </div>
      <a
        className="button-86"
        href=" https://cuddlies748.github.io/my-react-app/"
      >
        Back to home
      </a>
    </div>
  );
}

export default About;
