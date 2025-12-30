import "./App.css"; // Importing the main CSS file for styling
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

//Importing necessary components: Header, Menu, and Footer

export default function App() {
  {
    /* exporting the app function as default directly instead of using a separate line */
  }
  return (
    // Using React Fragment to wrap multiple elements <>...</> (This here is good practice?)
    <>
      <div className="container">
        <Header /> {/* Contains the Title or our Site */}
        <Menu /> {/* Contains the Main complex part aka the menu rendering*/}
        <Footer />
        {/* Contains the Footer information, the button and time y'all */}
      </div>
    </>
  );
}
