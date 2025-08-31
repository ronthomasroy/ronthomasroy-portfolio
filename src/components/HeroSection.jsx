// src/components/HeroSection.jsx
import React, { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`hero-fade-in${visible ? " visible" : ""}`}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
      }}
    >
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src="/ronfore.png"
          alt="Top"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src="/ronlaugh.png"
          alt="Bottom"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            clipPath: `circle(120px at ${pos.x}px ${pos.y}px)`,
            transition: "clip-path 0.2s",
          }}
        />
        {/* Add overlay text/buttons here */}
      </div>
    </div>
  );
}
