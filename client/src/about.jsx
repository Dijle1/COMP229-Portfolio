import React from "react";

// About Me page component
export default function About() {
  // Component return kısmı
  return (
    <div style={{ padding: "2rem" }}>
    
      <h1>Hi, I'm Dijle Arikan</h1>


      <p>
        I'm currently a 3rd-semester Software Engineering student at Centennial College, 
        specializing in Artificial Intelligence. I enjoy building web applications and 
        exploring new technologies in AI and software development.
      </p>

   
      <img 
        src="/images/myphoto.jpg" 
        alt="Dijle Arikan" 
        style={{ width: '200px', borderRadius: '50%' }} 
      />

    
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        View My Resume
      </a>
    </div>
  );
}
