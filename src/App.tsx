import { Route, Routes } from "react-router-dom";
import { LangRoot } from "./i18n/lang";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Practice } from "./pages/Practice";
import { Workshops } from "./pages/Workshops";

const pages = (
  <>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="practice" element={<Practice />} />
    <Route path="workshops" element={<Workshops />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </>
);

export default function App() {
  return (
    <Routes>
      <Route path="/en" element={<LangRoot lang="en" />}>
        {pages}
      </Route>
      <Route path="/" element={<LangRoot lang="el" />}>
        {pages}
      </Route>
    </Routes>
  );
}
