// Teste Claude Code funcionando
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import TrabalheConosco from "./pages/TrabalheConosco";
import SerieVBL from "./pages/SerieVBL";
import SerieVBC from "./pages/SerieVBC";
import SerieVBF from "./pages/SerieVBF";
import BombaHelicoidal from "./pages/BombaHelicoidal";
import PecasReposicao from "./pages/PecasReposicao";
import BombasDosadorasPistao from "./pages/BombasDosadorasPistao";
import BombasDosadorasDiafragma from "./pages/BombasDosadorasDiafragma";
import BombasPeristalticas from "./pages/BombasPeristalticas";
import SkidsDosagem from "./pages/SkidsDosagem";
import SerieVET from "./pages/SerieVET";
import SerieVBP from "./pages/SerieVBP";
import SerieVSM from "./pages/SerieVSM";
import Privacidade from "./pages/Privacidade";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Páginas existentes */}
          <Route index element={<Home />} />
          <Route path="quemsomos" element={<QuemSomos />} />
          <Route path="bombahelicoidal" element={<Navigate to="/produtos/bomba-helicoidal" />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="trabalheconosco" element={<TrabalheConosco />} />
          <Route path="privacidade" element={<Privacidade />} />
          <Route path="faq" element={<FAQ />} />

          {/* Produtos */}
          <Route path="produtos" element={<Produtos />} />
          <Route path="produtos/bomba-helicoidal" element={<BombaHelicoidal />} />
          <Route path="produtos/pecas-reposicao" element={<PecasReposicao />} />
          <Route path="produtos/serie-vbc" element={<SerieVBC />} />
          <Route path="produtos/serie-vbf" element={<SerieVBF />} />
          <Route path="produtos/serie-vbl" element={<SerieVBL />} />
          <Route path="produtos/serie-vbp" element={<SerieVBP />} />
          <Route path="produtos/serie-vet" element={<SerieVET />} />
          <Route path="produtos/serie-vsm" element={<SerieVSM />} />
          <Route path="produtos/skids-dosagem" element={<SkidsDosagem />} />
          <Route path="produtos/bombas-peristalticas" element={<BombasPeristalticas />} />
          <Route path="produtos/bombas-dosadoras-pistao" element={<BombasDosadorasPistao />} />
          <Route path="produtos/bombas-dosadoras-diafragma" element={<BombasDosadorasDiafragma />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}