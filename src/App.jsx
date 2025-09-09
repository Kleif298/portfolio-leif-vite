import './App.css'
import Header from './components/common/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import MyWork from './components/mywork/MyWork'
import Footer from './components/common/Footer'
import { useState } from "react";

function App() {
  /*
  const [viewingHero, setViewingHero] = useState(true);

  window.addEventListener("wheel",
    (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        const headerHeight = document.querySelector("header");
        const about = document.getElementById("about");

        const y = about.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        })
        setViewingHero(false)
      }
    }, 
    { passive: false }
  )
  */

  return (
    <div className="app responsive-container">
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <MyWork />
      </main>
      <Footer />
    </div>
  )
}

export default App;
