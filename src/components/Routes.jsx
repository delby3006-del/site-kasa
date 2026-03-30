// src/components/Routes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import Page_accueil from "../pages/Page_accueil.jsx";
import PagePartLogement from "../pages/Page_logement.jsx";
import PageAPropos from "../pages/Page_apropos.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Accueil */}
      <Route path="/" element={<Page_accueil />} />

      {/* Fiche logement */}
      <Route path="/logement/:id" element={<PagePartLogement />} />

      {/* A Propos */}
      <Route path="/A_Propos" element={<PageAPropos />} />

      {/* 404 */}
      <Route path="*" element={<div>Page introuvable</div>} />
    </Routes>
  );
}

export default AppRoutes;
