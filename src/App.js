import { Provider } from "react-redux";

import "./App.css";
import Footer from "./components/footer/Footer.component";
import TodoList from "./components/TodoList/TodoList.component";
import { store, persistor } from "./redux/store";
import AppProvider from "./context/AppContext.jsx";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <div className="the-header">
          <h2 className="logo">GET IT DONE</h2>
        </div>
        <TodoList />
        <Footer />
      </AppProvider>
    </div>
  );
};

export default App;
