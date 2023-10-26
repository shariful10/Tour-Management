import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
	return (
      <>
         <Header />
			<Outlet />
			<Footer />
      </>
	);
}

export default App;
