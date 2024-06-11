import { AuxiliarTable } from "./components/AuxiliarTable";
import { ApiProvider } from "./provider/ApiProvider";
import { MainTable } from "./components/MainTable";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <div className="body-container">
        <Header />
        <ApiProvider>
          <main className="tables-container">
            <MainTable />
            <AuxiliarTable />
          </main>
        </ApiProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
