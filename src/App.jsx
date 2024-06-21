import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Marketplace from "./pages/Marketplace_page";
import CreateAccount from "./pages/CreateAccout_page";
import Ranking from "./pages/Ranking_page";
import './App.css'
function App() {

  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Marketplace />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </Layout>

    </>


  )
}

export default App
