import { Navbar, Home, About, Teacher, Courses, Contact, Footer } from "./components/index"

const App = () => {
  return (
    <div className="bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
