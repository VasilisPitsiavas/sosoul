import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact";
import { Events } from "./pages/Events";
import { Home } from "./pages/Home";
import { Studio } from "./pages/Studio";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
