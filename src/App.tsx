import { AuxiliarTable } from "./components/AuxiliarTable";
import { ApiProvider } from "./provider/ApiProvider";
import { MainTable } from "./components/MainTable";
// import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./App.css";

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
      {/* <Footer /> */}
    </>
  );
}

export default App;
