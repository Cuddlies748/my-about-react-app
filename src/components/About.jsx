
import "../styles/about.css"
import React, { useEffect, useRef } from "react";
function About() {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    function createStar() {
      if (!starsContainerRef.current) return;

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
      for (let i = 0; i < 15; i++) createStar(); // Создаём 20 звёзд за раз
    }, 200); // Каждые 200 мс

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="About">
      <div className="stars-container" ref={starsContainerRef}></div>
      <div className='text_div'>
      <h2 className='about_h2'>About Me</h2>
      
  <h2 class="text-container">Eshboev Jasur</h2>
      </div>
      <a className="button-86" href=" https://cuddlies748.github.io/my-react-app/">Back to home</a>
  
</div>
   
  );
}

export default About;

