// import { pizzaData } from "./data";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import { Order } from "./Footer";
// import Menu from "./Menu";
// import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
