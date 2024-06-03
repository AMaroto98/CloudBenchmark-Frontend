import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainTable } from "./components/MainTable";
import "./App.css";
import { AuxiliarTable } from "./components/AuxiliarTable";

function App() {
  return (
    <>
      <Header />
      <div className="tables-container">
        <MainTable />
        <AuxiliarTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
