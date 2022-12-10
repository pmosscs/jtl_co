import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Gallery from "./screens/Gallery";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route to="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
