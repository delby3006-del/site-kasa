// src/components/Routes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import Page_accueil from "../pages/Page_accueil.jsx";
import PagePartLogement from "../pages/Page_logement.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Accueil */}
      <Route path="/" element={<Page_accueil />} />

      {/* Fiche logement */}
      <Route path="/logement/:id" element={<PagePartLogement />} />

      {/* 404 */}
      <Route path="*" element={<div>Page introuvable</div>} />
    </Routes>
  );
}

export default AppRoutes;
