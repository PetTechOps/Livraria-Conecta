import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Catalogo } from "./pages/Catalogo";
import { Cadastro } from "./pages/Cadastro";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}
