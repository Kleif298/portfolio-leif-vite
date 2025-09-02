import './App.css'
import Header from './components/common/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import MyWork from './components/mywork/MyWork'
import Footer from './components/common/Footer'

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
