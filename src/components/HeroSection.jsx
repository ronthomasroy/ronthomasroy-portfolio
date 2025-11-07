// src/components/HeroSection.jsx
import React, { useRef, useState, useEffect } from "react";
import SocialTabs from "./SocialTabs";

// Multilingual typing animation component
function MultilingualTyping() {
  const [currentText, setCurrentText] = useState("");
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const languages = [
    "Hello, I'm Ron Thomas Roy",
    "你好，我是罗恩·托马斯·罗伊",
    "नमस्ते, मैं रॉन थॉमस रॉय हूं",
    "Bonjour, je suis Ron Thomas Roy",
    "Hola, soy Ron Thomas Roy",
    "مرحبا، أنا رون توماس روي"
  ];

  const currentLanguage = languages[currentLanguageIndex];

  useEffect(() => {
    let timeout;
    
    if (isTyping && !isDeleting) {
      // Typing forward
      if (currentText.length < currentLanguage.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentLanguage.slice(0, currentText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else if (isDeleting) {
      // Deleting backward
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        // Finished deleting, move to next language
        setIsDeleting(false);
        setCurrentLanguageIndex((prev) => (prev + 1) % languages.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentLanguage, isTyping, isDeleting, currentLanguageIndex]);

  return (
    <div className="typing-overlay">
      <div className="typing-container">
        <h1 className="typing-text">
          {currentText}
          <span className="cursor">|</span>
        </h1>
      </div>
    </div>
  );
}

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
        position: "relative",
      }}
    >
      {/* Multilingual Typing Animation Overlay */}
      <MultilingualTyping />
      
      {/* Original Centered Landing Page */}
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
            transition: "clip-path 0.1s",
          }}
        />
        
        {/* Social Media Tabs */}
        <SocialTabs />
        
        {/* Add overlay text/buttons here */}
      </div>
    </div>
  );
}
