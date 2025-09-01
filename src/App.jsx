import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MyWork from './components/MyWork'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MyWork />
      </main>
      <Footer />
    </>
  )
}

export default App;
