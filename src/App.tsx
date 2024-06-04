import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainTable } from "./components/MainTable";
import "./App.css";
import { AuxiliarTable } from "./components/AuxiliarTable";
import { ApiProvider } from "./provider/ApiProvider";

function App() {
  return (
    <>
      <Header />
      <ApiProvider>
        <div className="tables-container">
          <MainTable />
          <AuxiliarTable />
        </div>
      </ApiProvider>
      <Footer />
    </>
  );
}

export default App;
