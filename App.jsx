import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Alok Kumar Sah</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I'm a Computer Science graduate and Frontend Developer passionate about building responsive websites and learning new technologies.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>E-commerce Inventory App</strong> – Built with React and mock REST API</li>
          <li><strong>Portfolio Website</strong> – Built using React, HTML, and CSS</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: kumaralok2472000@gmail.com</p>
        <p>GitHub: <a href="https://github.com/ALOK-KUMAR-SAH" target="_blank" rel="noopener noreferrer">github.com/ALOK-KUMAR-SAH</a></p>
      </section>

      <footer>
        <p>© 2025 Alok Kumar Sah</p>
      </footer>
    </div>
  );
}

export default App;
