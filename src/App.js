import "./App.css";
import AppProvider from "./context/AppContext";
import Footer from "./components/footer/Footer.component";
import TodoList from "./components/TodoList/TodoList.component";

const App = () => {
  console.log("i have rendered");
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
