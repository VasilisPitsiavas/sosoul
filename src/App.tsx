import { Route, Routes } from "react-router-dom";
import { LangRoot } from "./i18n/lang";
import { Contact } from "./pages/Contact";
import { Events } from "./pages/Events";
import { Home } from "./pages/Home";
import { Studio } from "./pages/Studio";

const pages = (
  <>
    <Route index element={<Home />} />
    <Route path="events" element={<Events />} />
    <Route path="studio" element={<Studio />} />
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
