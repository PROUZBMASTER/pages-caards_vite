import IndelibleInput from "./components/IndelibleInput";
import MyCard from "./components/MyCard/Card.jsx";
import Navbar from "./components/Navbar"
import Routes from "./routes"
import {useLocation} from "react-router-dom"


function App() {
  const location = useLocation();
  return (
    <>
      <Navbar/>
        <Routes/>   
          <h1 className="text-center mt-5">hozir ushbu routeda = {location.pathname}</h1>
          <IndelibleInput />
          <MyCard/>
    </>
    )
}

export default App
