import "../styles/App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AppRoutes from "./routes.jsx";

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
