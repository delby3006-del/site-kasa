import "../styles/App.css";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import AppRoutes from "./Routes.jsx";

function App() {
  return (
    <div className="main-conteneur">
      <Header />

      <AppRoutes />

      <div className="footer-conteneur">
        <Footer />
      </div>
    </div>
  );
}

export default App;
