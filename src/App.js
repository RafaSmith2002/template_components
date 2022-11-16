import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer/Index";
import SelectWrapper from "./components/Select";
import { Card } from "./components/Card/index";
function App() {
  return (
    <div className="App">
      <Header style={{ backgroundColor: "Chartreuse", width: "100vw" }} />
      <Card style={{ backgroundColor: "Chocolate" , width:"100px", borderRadius:"200px" }} name="clique aqui" />
      <Card style={{ backgroundColor: "DodgerBlue" }} name="Agora, dedada aqui" />
      <Card style={{ backgroundColor: "Fuchsia" }} name="clica vai deliciooo " />
      
      <SelectWrapper />
      <h1>Aula 2 - Componentes e Props</h1>
      <Footer />
    </div>
  );
}

export default App;
