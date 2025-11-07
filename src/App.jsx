import { useState } from 'react';
import './App.css';
import HeroSection from "./components/HeroSection";
import { ShaderAnimation } from "./components/ShaderAnimation";

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {!showContent && (
        <ShaderAnimation onComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.5s' }}>
          <HeroSection />
          {/* Add more sections here */}
        </div>
      )}
    </div>
  );
}

export default App;