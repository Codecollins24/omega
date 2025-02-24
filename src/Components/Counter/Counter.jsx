import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";

const CounterContainer = () => {
  const containerRef = useRef(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight > containerTop && !activated) {
        const counters = container.querySelectorAll("[data-count]");
        counters.forEach((counter) => {
          let count = 0;
          const target = parseInt(counter.getAttribute("data-count"), 10);
          const updateCount = () => {
            if (count < target) {
              counter.innerText = ++count;
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
        setActivated(true);
      } else if (
        scrollPosition + windowHeight < containerTop ||
        scrollPosition === 0
      ) {
        const counters = container.querySelectorAll("[data-count]");
        counters.forEach((counter) => {
          counter.innerText = 0;
        });
        setActivated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activated]);

  return (
    <div className="counter-container" ref={containerRef}>
      <div className="counters">
        <div className="counter">
          <h1>
            <span data-count="50">0</span>K+
          </h1>
          <p>Graduate Students</p>
        </div>
        <div className="counter">
          <h1>
            <span data-count="20">0</span>+
          </h1>
          <p>Courses</p>
        </div>
        <div className="counter">
          <h1>
            <span data-count="200">0</span>+
          </h1>
          <p>University Facilities</p>
        </div>
        <div className="counter">
          <h1>
            <span data-count="70">0</span>K+
          </h1>
          <p>Total Students</p>
        </div>
      </div>
    </div>
  );
};

export default CounterContainer;
