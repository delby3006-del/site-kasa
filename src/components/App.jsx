import "../styles/App.css";
import Header from "./Header.jsx";
import Banniere from "./Banniere.jsx";
import Conteneur from "./Conteneur.jsx";
// import Home from "../pages/home.jsx";

function App() {
  return (
    <>
      <div className="main-conteneur">
        <Header />
        <Banniere />
        <div>
          <Conteneur />
        </div>
      </div>
    </>
  );
}
export default App;
